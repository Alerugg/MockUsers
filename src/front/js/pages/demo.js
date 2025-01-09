import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = () => {
    const { store, actions } = useContext(Context);
    const [count, setCount] = useState("");
    const [dynamicUsers, setDynamicUsers] = useState([]);

    const fetchDynamicUsers = () => {
        fetch(`https://didactic-capybara-97qwj6wx7jwc7vj-3001.app.github.dev/api/randomUsers/${count}`)
            .then((response) => response.json())
            .then((data) => setDynamicUsers(data))
            .catch((error) => console.error("Error fetching dynamic users:", error));
    };

    return (
        <div className="demo-container">
            <h1 className="demo-title">Demo de la API</h1>

            {/* Sección Todos los Usuarios */}
            <div className="demo-section">
                <h2 className="section-title">/api/users</h2>
                <p className="section-description">
                    Este endpoint devuelve un listado de 1000 usuarios. A continuación, se muestra un ejemplo del cuerpo de un solo usuario en el response:
                </p>
                <pre className="response-example">
                    {store.allUsers.length > 0
                        ? JSON.stringify(store.allUsers[0], null, 2)
                        : "Cargando ejemplo..."}
                </pre>
            </div>

            {/* Sección Endpoint Dinámico */}
            <div className="demo-section">
                <h2 className="section-title">/api/randomUsers/&lt;count&gt;</h2>
                <p className="section-description">
                    Este endpoint es dinámico y devuelve una cantidad aleatoria de usuarios según el número especificado en el parámetro <code>count</code>.
                    Por ejemplo, si deseas obtener 6 usuarios, puedes hacer la solicitud a <code>/api/randomUsers/6</code>.
                </p>
                <div className="input-container">
                    <input
                        type="number"
                        className="dynamic-input"
                        placeholder="Número de usuarios"
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                    />
                    <button className="fetch-button" onClick={fetchDynamicUsers}>
                        Get
                    </button>
                </div>
                <pre className="response-example">
                    {dynamicUsers.length > 0
                        ? JSON.stringify(dynamicUsers, null, 2)
                        : "Ingrese un número y presione 'Get' para ver el resultado..."}
                </pre>
            </div>
        </div>
    );
};
