import React from "react";
import "../../styles/donations.css";

export const Donations = () => {
    return (
        <div className="donations-container">
            <h1 className="donations-title">Apoya Mock Users API</h1>
            <div className="donations-section">
                <p className="donations-description">
                    Gracias por considerar apoyar Mock Users API. Tu contribución nos ayuda a mantener el servicio, mejorar nuestras herramientas y expandir nuestras funcionalidades.
                </p>
                <h2 className="donations-subtitle">Opciones de Donación</h2>
                <ul className="donations-list">
                    <li>
                        <strong>PayPal:</strong> <a href="https://www.paypal.com/donate" target="_blank" rel="noopener noreferrer">Donar ahora</a>
                    </li>
                    <li>
                        <strong>Criptomonedas:</strong> 
                        <p>Dirección BTC: <code>1A2b3C4d5E6f7G8h9I0j</code></p>
                        <p>Dirección ETH: <code>0xa1B2c3D4e5F6g7H8i9J0</code></p>
                    </li>
                    <li>
                        <strong>Patreon:</strong> <a href="https://www.patreon.com" target="_blank" rel="noopener noreferrer">Apóyanos en Patreon</a>
                    </li>
                </ul>
                <p className="donations-thankyou">
                    ¡Gracias por tu apoyo! Cada contribución nos ayuda a mantener Mock Users API accesible y gratuita para la comunidad de desarrolladores.
                </p>
            </div>
        </div>
    );
};
