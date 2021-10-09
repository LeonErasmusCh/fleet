import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Selector } from "../component/filter";
import { NEWSidebar } from "../component/NewSidebar";

export const Seller = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.traerusuario();
	}, []);
	//validar usuario con el token haciendo fetch a mi ruta privada que tengo en el backend
	//eso debe retornarme si el token corresponde a una vendedora o a un transporttista
	return (
		<div className="container">
			<div className="row">
				<div className="col col-10 mt-5">
					<h4>
						Bienvenido
						<span> {store.info_user.name} </span>
					</h4>
					<br />
					<h5>¿Donde necesitas enviar tu producto hoy?</h5>
					<br />

					<br />
					<Selector />
					<br />


					<Link to="/">
						<button>Go back</button>
					</Link>
				</div>
			</div>

			<Link to="/">
				<button id="signupButton" type="submit" style={{ marginTop: "120px" }} className="btn btn-primary">
					Volver a Inicio
				</button>
			</Link>
		</div>
	);
};
