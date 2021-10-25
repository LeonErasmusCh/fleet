import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { SignupSeller } from "../component/signupSeller";
import { SignupTransport } from "../component/signupTransport";
import "../../styles/demo.scss";

export const Signup = () => {
	const { store, actions } = useContext(Context);

	const registrarSeller = () => {
		actions.registroUserSeller();
	};

	const registrarTransport = () => {
		actions.registroUserTransport();
	};

	return (
		<>
			<div className="signinBox">
				<h1 style={{ color: "#ff1dff" }}>Selecciona tu Perfil</h1>
				<button className="btn" onClick={registrarSeller} style={{ color: "white" }}>
					Vendedor
				</button>
				<button className="btn" onClick={registrarTransport} style={{ color: "white" }}>
					Transportista
				</button>
				<div>{store.registro ? <SignupSeller /> : <SignupTransport />}</div>
			</div>
		</>
	);
};
