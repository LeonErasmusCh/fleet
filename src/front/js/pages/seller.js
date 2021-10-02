import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Seller = () => {
	const { store, actions } = useContext(Context);
	//validar usuario con el token haciendo fetch a mi ruta privada que tengo en el backend
	//eso debe retornarme si el token corresponde a una vendedora o a un transporttista
	return (
		<div className="container">
			{store.logged != false ? (
				<div className="container-fluid row">
					<div className="col col-2" />
					<div className="col col-10 mt-5">
						<h5>Bienvenido</h5>
						<p>¿donde necesitas enviar tu producto hoy?</p>

						<Link to="/">
							<button>Go back</button>
						</Link>
					</div>
				</div>
			) : (
				<div className="alert alert-warning d-flex align-items-center" role="alert">
					<svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:" />
					<div>No estas logeado</div>
				</div>
			)}
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
