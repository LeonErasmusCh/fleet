import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Transportista from "../../img/Transportista.jpg";
import vendedor from "../../img/vendedor.jpg";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			{/* <h1 style={{ color: "black", textAlign: "center" }}>Bienvenido!</h1> <div className="row" id="divSignin">*/}
			<div className="container-fluid text-center mt-5">
				<div id="loginBox" className="col-8">
					<h2>Iniciar sesion</h2>
					<div className="row justify-content-center mx-5 mt-5">
						<div className="col-4 ml-5 card" style={{ width: "18rem" }}>
							<img src={"vendedor.jpg"} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">vendedor</h5>
								<p className="card-text" />
								<Link to="/loginsell">
									<button
										id="signupButton"
										type="submit"
										style={{ marginTop: "10px" }}
										className="btn btn-primary">
										Iniciar sesion
									</button>
								</Link>
							</div>
						</div>

						<div className="col-4 mx-4 card" style={{ width: "18rem" }}>
							<img src={"Transportista.jpg"} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Transportista </h5>
								<p className="card-text" />
								<button
									id="signupButton"
									type="submit"
									style={{ marginTop: "10px" }}
									className="btn btn-primary">
									Iniciar sesion
								</button>
							</div>
						</div>
					</div>

					<br />
					<br />
				</div>
				<div className="col" style={{ marginTop: "100px" }}>
					<h2 style={{ color: "black" }}>
						¿Aún no cuentas con tu perfil?
						<br />
						Registrate, para obtener todos los beneficios de Fleet!
					</h2>
					<Link to="/signup">
						<button
							id="signupButton"
							type="submit"
							style={{ marginTop: "10px" }}
							className="btn btn-primary">
							Registrarse
						</button>
					</Link>
					<br />
					<Link to="/">
						<button
							id="signupButton"
							type="submit"
							style={{ marginTop: "120px" }}
							className="btn btn-primary">
							Volver a Inicio
						</button>
					</Link>
				</div>
			</div>
			{/* <Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link> */}
		</>
	);
};
