from flask import request, jsonify, Blueprint
from api.models import db, User, Admin
from api.utils import APIException
from flask_cors import CORS
from flask_jwt_extended import jwt_required, create_access_token
from werkzeug.security import generate_password_hash
from datetime import datetime
from sqlalchemy.sql import func

api = Blueprint('api', __name__)
CORS(api)

# ✅ Registro de un único Admin
@api.route('/register-admin', methods=['POST'])
def register_admin():
    data = request.get_json()

    if not data or not data.get('email') or not data.get('password'):
        return jsonify({"msg": "Faltan campos requeridos"}), 400

    existing_admin = Admin.query.first()
    if existing_admin:
        return jsonify({"msg": "El administrador ya existe"}), 403

    new_admin = Admin(
        email=data['email'],
        password_hash=generate_password_hash(data['password'])
    )

    db.session.add(new_admin)
    db.session.commit()

    return jsonify({"msg": "Administrador creado exitosamente"}), 201

# ✅ Inicio de sesión del Admin
@api.route('/login', methods=['POST'])
def admin_login():
    data = request.get_json()

    if not data or not data.get('email') or not data.get('password'):
        return jsonify({"msg": "Faltan credenciales"}), 400

    admin = Admin.query.filter_by(email=data['email']).first()

    if not admin or not admin.check_password(data['password']):
        return jsonify({"msg": "Credenciales incorrectas"}), 401

    access_token = create_access_token(identity=str(admin.id))

    return jsonify(access_token=access_token), 200

# ✅ Obtener usuarios aleatorios (Público)
@api.route('/randomUsers/<int:count>', methods=['GET'])
def get_random_users_count(count):
    try:
        if count <= 0:
            return jsonify({
                "status": "fail",
                "message": "El número de usuarios debe ser positivo."
            }), 400

        total_users = User.query.count()
        if total_users < count:
            return jsonify({
                "status": "fail",
                "message": f"Solo hay {total_users} usuarios disponibles."
            }), 400

        random_users = User.query.order_by(func.random()).limit(count).all()
        users_list = [user.serialize() for user in random_users]

        return jsonify(users_list), 200
    except Exception as e:
        return jsonify({
            "status": "fail",
            "message": "Error al obtener usuarios aleatorios",
            "details": str(e)
        }), 500

# ✅ Obtener todos los usuarios (Público)
@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    users_list = [user.serialize() for user in users]
    return jsonify(users_list), 200

# ✅ Crear usuarios (Protegido)
@api.route('/users', methods=['POST'])
@jwt_required()
def create_users():
    data = request.get_json()

    if not data:
        return jsonify({"error": "No se proporcionaron datos"}), 400

    if isinstance(data, list):
        users_to_create = data
    elif isinstance(data, dict):
        users_to_create = [data]
    else:
        return jsonify({"error": "Formato de datos no válido"}), 400

    created_users = []
    errors = []

    for idx, user_data in enumerate(users_to_create):
        required_fields = ['email', 'name', 'last_name', 'address', 'phone', 'identification', 'birthday', 'birth_country', 'password']
        missing_fields = [field for field in required_fields if field not in user_data]

        if 'address' in user_data:
            address_fields = ['street', 'city', 'country']
            missing_fields += [f'address.{field}' for field in address_fields if field not in user_data['address']]

        if missing_fields:
            errors.append({"index": idx, "error": f"Faltan los campos: {', '.join(missing_fields)}"})
            continue

        if User.query.filter_by(email=user_data['email']).first():
            errors.append({"index": idx, "error": "El email ya existe"})
            continue

        new_user = User(
            email=user_data['email'],
            name=user_data['name'],
            last_name=user_data['last_name'],
            street=user_data['address']['street'],
            city=user_data['address']['city'],
            country=user_data['address']['country'],
            phone=user_data['phone'],
            identification=user_data['identification'],
            birthday=datetime.strptime(user_data['birthday'], '%Y-%m-%d'),
            birth_country=user_data['birth_country'],
            password=user_data['password']
        )

        db.session.add(new_user)
        created_users.append(new_user.serialize())

    try:
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Error al insertar usuarios", "details": str(e)}), 500

    response = {"status": "success", "created_users": created_users}
    if errors:
        response["errors"] = errors

    return jsonify(response), 201

# ✅ Eliminar todos los usuarios (Protegido)
@api.route('/users', methods=['DELETE'])
@jwt_required()
def delete_all_users():
    users = User.query.all()
    if not users:
        return jsonify({"status": "fail", "message": "No hay usuarios para eliminar"}), 400

    try:
        for user in users:
            db.session.delete(user)
        db.session.commit()
        return jsonify({"status": "success", "message": "Todos los usuarios eliminados"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"status": "fail", "message": "Error al eliminar", "details": str(e)}), 500

# ✅ Eliminar usuario por ID (Protegido)
@api.route('/users/<string:user_id>', methods=['DELETE'])
@jwt_required()
def delete_user_by_id(user_id):
    user = User.query.filter_by(id=user_id).first()
    if not user:
        return jsonify({"status": "fail", "message": "Usuario no encontrado"}), 404

    try:
        db.session.delete(user)
        db.session.commit()
        return jsonify({"status": "success", "message": "Usuario eliminado"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"status": "fail", "message": "Error al eliminar", "details": str(e)}), 500
