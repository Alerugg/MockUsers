
# Mock Users API 🌟

¡Bienvenido a Mock Users API! Esta herramienta fue creada para desarrolladores que necesitan poblar sus aplicaciones con datos de usuario de manera rápida y sencilla. Perfecta para pruebas, desarrollo y demos.

---

## 🚀 Demo en vivo

Prueba la API directamente desde nuestra demo en vivo:  
[**Enlace a la Demo**](https://mockusers-d417.onrender.com)

---

## 💡 Características

- **Endpoint dinámico:** `/api/randomUsers/<count>` para generar cualquier cantidad de usuarios al instante.
- **Interfaz de exploración:** Una demo interactiva para ver los resultados de los endpoints.
- **Fácil integración:** Compatible con cualquier stack de desarrollo.

---

## 📚 Endpoints

### **`/api/users`**
Devuelve una lista de 1000 usuarios.  
**Ejemplo de respuesta:**
```json
[
  {
    "address": {
      "city": "San José",
      "country": "Costa Rica",
      "street": "El Prado"
    },
    "birth_country": "Uruguay",
    "birthday": "1975-10-04",
    "email": "javier.cruz522@hotmail.com",
    "id": 524,
    "identification": "153562Q625",
    "last_name": "Cruz",
    "name": "Javier",
    "password": "javiercruz123",
    "phone": "+777-8015173"
  }
]
```

### **`/api/randomUsers/<count>`**
Endpoint dinámico que devuelve una cantidad aleatoria de usuarios según el número especificado en el parámetro `<count>`.  
Por ejemplo, si haces una solicitud a `/api/randomUsers/2`, obtendrás algo como esto:

**Ejemplo de respuesta:**
```json
[
  {
    "address": {
      "city": "San José",
      "country": "Costa Rica",
      "street": "El Prado"
    },
    "birth_country": "Uruguay",
    "birthday": "1975-10-04",
    "email": "javier.cruz522@hotmail.com",
    "id": 524,
    "identification": "153562Q625",
    "last_name": "Cruz",
    "name": "Javier",
    "password": "javiercruz123",
    "phone": "+777-8015173"
  },
  {
    "address": {
      "city": "Madrid",
      "country": "Spain",
      "street": "Las Heras"
    },
    "birth_country": "Costa Rica",
    "birthday": "1982-07-01",
    "email": "sebastián.jimenez57@outlook.com",
    "id": 58,
    "identification": "3Y36",
    "last_name": "Jimenez",
    "name": "Sebastián",
    "password": "sebastiánjimenez123",
    "phone": "+953-3610768"
  }
]
```

---

## 🛠 Instalación

1. Clona el repositorio:  
   ```bash
   git clone https://github.com/tuusuario/mock-users-api.git
   cd mock-users-api
   ```

2. Configura el backend:
   - Asegúrate de tener Python 3.10, Node.js y PostgreSQL instalados.
   - Instala los paquetes backend:
     ```bash
     pipenv install
     ```
   - Crea y configura el archivo `.env` basado en `.env.example`:
     ```bash
     cp .env.example .env
     ```
   - Inicia la base de datos:
     ```bash
     pipenv run init
     pipenv run migrate
     pipenv run upgrade
     ```

3. Configura el frontend:
   - Instala los paquetes frontend:
     ```bash
     npm install
     ```
   - Inicia la aplicación frontend:
     ```bash
     npm run start
     ```

4. Ejecuta la aplicación completa:
   ```bash
   pipenv run start
   ```

---

## 🌟 Próximas mejoras (v2)

La próxima versión incluirá:
- Datos más realistas y robustos, incluyendo estado civil, hobbies, ingresos y más.
- Posibilidad de filtrar usuarios por país o región.
- Soporte para datos congruentes como números de teléfono y direcciones específicos por país.

¡Mantente atento para más actualizaciones!

---

## 📬 Contacto

Para sugerencias o mejoras, no dudes en crear un issue o contactarnos en [Linkedin](https://www.linkedin.com/in/aleruggeril/).

