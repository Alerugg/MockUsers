import React from "react";
import "../../styles/documentation.css";

export const Documentation = () => {
    return (
        <div className="documentation-container">
            <h1 className="documentation-title">Documentación de la API</h1>

            {/* Introducción */}
            <div className="documentation-section">
                <h2 className="section-title">Introducción</h2>
                <p className="section-description">
                    Bienvenido a la documentación oficial de <b>Mock Users API</b>. Aquí encontrarás todos los detalles necesarios para usar los endpoints de nuestra API, diseñados para facilitar la generación de usuarios ficticios en tus proyectos.
                </p>
            </div>

            {/* /api/users */}
            <div className="documentation-section">
                <h2 className="section-title">/api/users</h2>
                <p className="section-description">
                    Este endpoint devuelve un listado de 1000 usuarios ficticios, incluyendo información como nombre, correo, dirección, y más. Útil para poblar bases de datos o probar funcionalidades relacionadas con usuarios.
                </p>
                <p><b>Método:</b> <span style={{ color: "red" }}>GET</span></p>
                <p><b>URL:</b> <code>/api/users</code></p>
                <h3>Ejemplo de respuesta:</h3>
                <pre className="response-example">
{`[
    {
        "address": {
            "city": "Quito",
            "country": "Ecuador",
            "street": "Avenida del Libertador"
        },
        "birth_country": "Ecuador",
        "birthday": "1966-11-27",
        "email": "sofía.cruz712@hotmail.com",
        "id": 714,
        "identification": "3571T557",
        "last_name": "Cruz",
        "name": "Sofía",
        "password": "sofíacruz123",
        "phone": "+753-4963131"
    }
]`}
                </pre>
            </div>

            {/* /api/randomUsers/<count> */}
            <div className="documentation-section">
                <h2 className="section-title">/api/randomUsers/&lt;count&gt;</h2>
                <p className="section-description">
                    Este endpoint es dinámico y devuelve una cantidad aleatoria de usuarios según el número especificado en el parámetro <code>count</code>. Por ejemplo, si deseas obtener 6 usuarios, puedes hacer la solicitud a <code>/api/randomUsers/6</code>.
                </p>
                <p><b>Método:</b> <span style={{ color: "red" }}>GET</span></p>
                <p><b>URL:</b> <code>/api/randomUsers/&lt;count&gt;</code></p>
                <h3>Ejemplo de respuesta:</h3>
                <pre className="response-example">
{`[
    {
        "address": {
            "city": "Montevideo",
            "country": "Chile",
            "street": "Avenida del Libertador"
        },
        "birth_country": "Venezuela",
        "birthday": "1972-10-23",
        "email": "sofía.alonso193@outlook.com",
        "id": 194,
        "identification": "86093Z9356",
        "last_name": "Alonso",
        "name": "Sofía",
        "password": "sofíaalonso123",
        "phone": "+711-9279194"
    },
    {
        "address": {
            "city": "Quito",
            "country": "Ecuador",
            "street": "Avenida del Libertador"
        },
        "birth_country": "Argentina",
        "birthday": "1984-03-18",
        "email": "rafael.silva228@yahoo.com",
        "id": 230,
        "identification": "47211F21194",
        "last_name": "Silva",
        "name": "Rafael",
        "password": "rafaelsilva123",
        "phone": "+344-5464329"
    },
    {
        "address": {
            "city": "San José",
            "country": "Costa Rica",
            "street": "Alameda"
        },
        "birth_country": "Peru",
        "birthday": "1984-06-11",
        "email": "marcos.aguilar59@yahoo.com",
        "id": 60,
        "identification": "9H528",
        "last_name": "Aguilar",
        "name": "Marcos",
        "password": "marcosaguilar123",
        "phone": "+562-1628243"
    },
    {
        "address": {
            "city": "Montevideo",
            "country": "Spain",
            "street": "Simón Bolívar"
        },
        "birth_country": "Mexico",
        "birthday": "1990-10-10",
        "email": "antonio.navarro963@gmail.com",
        "id": 965,
        "identification": "3224D44",
        "last_name": "Navarro",
        "name": "Antonio",
        "password": "antonionavarro123",
        "phone": "+773-9165458"
    },
    {
        "address": {
            "city": "Caracas",
            "country": "Venezuela",
            "street": "de Julio"
        },
        "birth_country": "Chile",
        "birthday": "1974-03-09",
        "email": "maría.moreno237@outlook.com",
        "id": 239,
        "identification": "751260D512605",
        "last_name": "Moreno",
        "name": "María",
        "password": "maríamoreno123",
        "phone": "+252-9611603"
    },
    {
        "address": {
            "city": "Montevideo",
            "country": "Colombia",
            "street": "Alameda"
        },
        "birth_country": "Mexico",
        "birthday": "1950-02-11",
        "email": "sofía.navarro798@outlook.com",
        "id": 800,
        "identification": "34J96672",
        "last_name": "Navarro",
        "name": "Sofía",
        "password": "sofíanavarro123",
        "phone": "+399-8143567"
    }
]`}
                </pre>
            </div>
        </div>
    );
};
