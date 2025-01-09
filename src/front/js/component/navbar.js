import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar-invisible">
			<div className="navbar-logo">
				<Link className="logo-link" to="/">
					<span className="navbar-brand">Mock Users</span>
				</Link>
			</div>
			<div className="navbar-pills">
				<span className="pill">Donaciones</span>
				<span className="pill">Próximamente</span>
			</div>
			<div className="navbar-button-container">
				<Link to="/demo">
					<button className="navbar-button">Demo</button>
				</Link>
			</div>
		</nav>
	);
};
