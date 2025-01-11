# Mock Users API v2 🚀

Bienvenido a **Mock Users API v2**, la herramienta definitiva para desarrolladores que buscan poblar sus aplicaciones con datos de usuario realistas y congruentes. Ahora con autenticación segura, protección de rutas, y datos optimizados. Ideal para pruebas, desarrollo y demostraciones.

---

## 🌐 Demo en vivo

Accede a la demo aquí:  
[**Mock Users API v2 - Demo**](https://mockusers-d417.onrender.com)

⚠️ **Nota:** La API está alojada en un servidor gratuito (Render). Si no ha tenido actividad, puede tardar hasta **40 segundos** en responder mientras se reactiva.

---

## 🛠 Tecnologías utilizadas

- **Backend:** Python, Flask, Flask-RESTful, Flask-JWT-Extended, SQLAlchemy
- **Base de Datos:** PostgreSQL, SQLAlchemy ORM
- **Seguridad:** Autenticación JWT, Flask-CORS, Password Hashing (Werkzeug)
- **Deployment:** Render, Neon
- **Gestión de dependencias:** Pipenv

---

## 💡 Características

- **Autenticación JWT:** Rutas protegidas con inicio de sesión para administrar usuarios.
- **Generación de datos realistas:** Datos congruentes según país, ciudad, identificación y contacto.
- **CRUD completo de usuarios:** Crear, leer, y eliminar usuarios de manera segura.
- **Generación dinámica de usuarios:** Crea usuarios aleatorios con `/api/randomUsers/<count>`.
- **Gestión de administrador:** Registro e inicio de sesión para administrar usuarios.
- **Optimización de base de datos:** Mejor rendimiento en consultas y almacenamiento.

---

## 📚 Endpoints

### 🔐 **Autenticación (Admin)**

- **`POST /api/register-admin`** → Registrar administrador (solo el primero).
- **`POST /api/login`** → Iniciar sesión y obtener un token JWT.

### 👥 **Usuarios (Protegido con JWT)**

- **`POST /api/users`** → Crear usuarios (uno o varios).  
  **Header:** `Authorization: Bearer <token>`
  ```json
  {
    "email": "juan.perez@example.com",
    "name": "Juan",
    "last_name": "Perez",
    "address": {
      "street": "Av. Siempre Viva 742",
      "city": "Buenos Aires",
      "country": "Argentina"
    },
    "phone": "+54-11-1234-5678",
    "identification": "12345678",
    "birthday": "1990-05-20",
    "birth_country": "Argentina",
    "password": "contraseñaSegura123"
  }
  ```

- **`GET /api/users`** → Listar todos los usuarios.

- **`GET /api/randomUsers/<count>`** → Obtener `<count>` usuarios aleatorios.

- **`DELETE /api/users`** → Eliminar todos los usuarios.  
  **Header:** `Authorization: Bearer <token>`

- **`DELETE /api/users/<user_id>`** → Eliminar usuario por ID.  
  **Header:** `Authorization: Bearer <token>`

---

## 🚀 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tuusuario/mock-users-api.git
   cd mock-users-api
   ```

2. **Configura el entorno:**
   ```bash
   pipenv install
   cp .env.example .env
   pipenv run init
   pipenv run migrate
   pipenv run upgrade
   ```

3. **Ejecuta la aplicación:**
   ```bash
   pipenv run start
   ```

---

## 🌟 Próximas mejoras (v3)

- Inclusión de campos adicionales: **estado civil**, **número de hijos**, **estado laboral**.
- Filtros por **nacionalidad** o **país de residencia**.
- Datos aún más detallados y consistentes.

---

## 📬 Contacto

¿Ideas o sugerencias? ¡Contáctanos!  
🔗 [LinkedIn - Alejandro Ruggeri](https://www.linkedin.com/in/aleruggeril/)

---

