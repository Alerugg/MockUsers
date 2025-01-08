"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask import request, jsonify
import uuid
from datetime import datetime



api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    users_list = [
        {
            "id": user.id,
            "email": user.email,
            "name": user.name,
            "last_name": user.last_name,
            "address": {
                "street": user.street,
                "city": user.city,               
                "country": user.country,
            },
            "phone": user.phone,
            "identification": user.identification,
            "birthday": user.birthday.strftime('%Y-%m-%d') if user.birthday else None,
            "birth_country": user.birth_country,
            "password": user.password,  

        } for user in users
    ]
    return jsonify(users_list), 200


@api.route('/users', methods=['POST'])
def create_users():
    data = request.get_json()

    if not data:
        return jsonify({"error": "No se proporcionaron datos"}), 400

    # Verificar si el payload es una lista o un único objeto
    if isinstance(data, list):
        users_to_create = data
    elif isinstance(data, dict):
        users_to_create = [data]
    else:
        return jsonify({"error": "Formato de datos no válido"}), 400

    created_users = []
    errors = []

    for idx, user_data in enumerate(users_to_create):
        # Validar campos requeridos
        required_fields = ['email', 'name', 'last_name', 'address', 'phone', 'identification', 'birthday', 'birth_country', 'password']
        missing_fields = [field for field in required_fields if field not in user_data]

        # Validar campos dentro del objeto address
        if 'address' in user_data:
            address_fields = ['street', 'city', 'country']
            missing_address_fields = [field for field in address_fields if field not in user_data['address']]
            missing_fields.extend([f'address.{field}' for field in missing_address_fields])

        if missing_fields:
            errors.append({
                "index": idx,
                "error": f"Faltan los campos: {', '.join(missing_fields)}"
            })
            continue

        # Verificar si el email ya existe
        if User.query.filter_by(email=user_data['email']).first():
            errors.append({
                "index": idx,
                "error": "El email ya existe"
            })
            continue

        # Crear una nueva instancia de User
        new_user = User(
            email=user_data['email'],
            name=user_data['name'],
            last_name=user_data['last_name'],
            street=user_data['address']['street'],
            city=user_data['address']['city'],
            country=user_data['address']['country'],
            phone=user_data['phone'],
            identification=user_data['identification'],
            birthday=datetime.strptime(user_data['birthday'], '%Y-%m-%d') if user_data.get('birthday') else None,
            birth_country=user_data['birth_country'],
            password=user_data['password']  # Nota: Asegúrate de manejar las contraseñas de manera segura (hashing)
        )

        db.session.add(new_user)
        created_users.append(new_user.serialize())  # Cambia 'to_dict()' a 'serialize()'

    try:
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Error al insertar usuarios en la base de datos", "details": str(e)}), 500

    response = {
        "status": "success",
        "created_users": created_users
    }

    if errors:
        response["errors"] = errors

    return jsonify(response), 201 if created_users else 400


# backend/app/routes.py

@api.route('/users', methods=['DELETE'])
def delete_all_users():
    """
    Eliminar todos los usuarios
    ---
    tags:
      - Users
    responses:
      200:
        description: Todos los usuarios han sido eliminados
      500:
        description: Error interno del servidor
    """
    users = User.query.all()
    if not users:
        return jsonify({"status": "fail", "message": "No hay usuarios para eliminar"}), 400

    try:
        for user in users:
            db.session.delete(user)
        db.session.commit()
        return jsonify({"status": "success", "message": "Todos los usuarios han sido eliminados"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"status": "fail", "message": "Error al eliminar todos los usuarios", "details": str(e)}), 500
    

    # backend/app/routes.py

@api.route('/users/<string:user_id>', methods=['DELETE'])
def delete_user_by_id(user_id):
    """
    Eliminar un usuario por su ID
    ---
    tags:
      - Users
    parameters:
      - name: user_id
        in: path
        type: string
        required: true
        description: ID del usuario a eliminar
    responses:
      200:
        description: Usuario eliminado exitosamente
      404:
        description: Usuario no encontrado
      500:
        description: Error interno del servidor
    """
    user = User.query.filter_by(id=user_id).first()
    if not user:
        return jsonify({"status": "fail", "message": "Usuario no encontrado"}), 404

    try:
        db.session.delete(user)
        db.session.commit()
        return jsonify({"status": "success", "message": "Usuario eliminado exitosamente"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"status": "fail", "message": "Error al eliminar el usuario", "details": str(e)}), 500







