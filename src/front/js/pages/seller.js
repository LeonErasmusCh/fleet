import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Selector } from "../component/filter";

export const Seller = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.traerusuario();
	}, []);
	//validar usuario con el token haciendo fetch a mi ruta privada que tengo en el backend
	//eso debe retornarme si el token corresponde a una vendedora o a un transporttista
	return (
		<div className="container">
			<div className="container-fluid row">
				<div className="col col-2" />
				<div className="col col-10 mt-5">
					<h5>Bienvenido {store.info_user.name}</h5>
					<p>¿donde necesitas enviar tu producto hoy?</p>
					<Selector />
					<Link to="/">
						<button>Go back</button>
					</Link>
				</div>
			</div>
			<Link to="/login">
				<button className="btn btn-primary">Login</button>
			</Link>
			<Link to="/">
				<button id="signupButton" type="submit" style={{ marginTop: "120px" }} className="btn btn-primary">
					Volver a Inicio
				</button>
			</Link>
		</div>
	);
};
