import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Detecta si el tamaño de pantalla cambia
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="navbar-invisible">
            <div className="navbar-logo">
                <Link className="logo-link" to="/">
                    <span className="navbar-brand">Mock Users</span>
                </Link>
            </div>

            {!isMobile && (
                <>
                    <div className="navbar-pills">
                        <span className="pill">
                            <Link className="dona" to="/donations">Donaciones</Link>
                        </span>
                        <span className="pill">Próximamente</span>
                    </div>

                    <div className="navbar-button-container">
                        <Link to="/demo">
                            <button className="navbar-bubble-button">Demo</button>
                        </Link>
                    </div>
                </>
            )}
        </nav>
    );
};
