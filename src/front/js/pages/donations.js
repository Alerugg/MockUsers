import React from "react";
import "../../styles/donations.css";

export const Donations = () => {
    return (
        <div className="donations-container">
            <h1 className="donations-title">💖 Apoya Mock Users API</h1>
            <div className="donations-section">
                <p className="donations-description">
                    Gracias por considerar apoyar Mock Users API. <br /><br />
                    Tu contribución nos ayuda a mantener el servicio, mejorar nuestras herramientas y expandir nuestras funcionalidades.
                </p>
                <h2 className="donations-subtitle">Opciones de Donación</h2>
                <ul className="donations-list">

                    <li>
                        <strong>Criptomonedas:</strong>
                        <p>Dirección BTC: <code>3FebwBM9HQSMt3GPevhoDtGTZTDkkSkYDJ</code></p>
                        <p>Dirección ETH (ERC20): <code>0xcd3414761394b106768a95108c18aad1708f972c</code></p>
                    </li>
                </ul>
                <p className="donations-thankyou">
                    ¡Gracias por tu apoyo! Cada contribución nos ayuda a mantener Mock Users API accesible y gratuita para la comunidad de desarrolladores.
                </p>
            </div>
        </div>
    );
};
