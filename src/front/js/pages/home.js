// frontend/src/js/component/home.jsx

import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="home-container">
			<h1 className="page-title">Mock Users! <br/> API</h1>
			<div className="buttons-container">
				<button className="circle-button" onClick={() => actions.navigateTo('documentacion')}>
					Documentación
				</button>
				<button className="circle-button" onClick={() => actions.navigateTo('donaciones')}>
					Donaciones
				</button>
				<button className="circle-button" onClick={() => actions.navigateTo('demo')}>
					Demo
				</button>
			</div>
		</div>
	);
};
