import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const LoginSell = () => {
	const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");
	const { store, actions } = useContext(Context);
	const history = useHistory();

	/*const token = sessionStorage.getItem("token");
	console.log("this is your token", token);
	const handleClick = () => {
		actions.enviarDatos(e, mail, password);
	};*/

	function resolveAfter2Seconds(x) {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(x);
			}, 2000);
		});
	}

	const handleClick = () => {
		history.push("/seller");
	};
	return (
		<div className="text-center mt-5">
			<div id="divSignin" className="row">
				<div id="loginBox2" className="col">
					<form>
						<h1>Acceso</h1>
						<div>
							<form
								onSubmit={async e => {
									e.preventDefault();
									actions.enviarDatos(e, mail, password);
									await resolveAfter2Seconds(5);
									handleClick();
								}}>
								<div className="mb-3 mx-auto col-6">
									<label htmlFor="exampleInputEmail1" className="form-label">
										Email address
									</label>
									<input
										type="email"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										onChange={e => {
											setMail(e.target.value);
										}}
									/>
								</div>
								<div className="mb-3  mx-auto col-6">
									<label htmlFor="exampleInputPassword1" className="form-label">
										Password
									</label>
									<input
										type="password"
										className="form-control"
										id="exampleInputPassword1"
										onChange={e => {
											setPassword(e.target.value);
										}}
									/>
								</div>
								<button type="submit" className="btn btn-primary">
									Iniciar Sesion
								</button>
							</form>
						</div>
					</form>
					<br />
					<br />

					<form>
						<h6 style={{ color: "white" }}>¿Olvidaste tu Contraseña?</h6>

						<select className="custom-select" id="inputGroupSelect02">
							<option selected> Pregunta seguridad</option>
							<option value="1">Película Favorita</option>
							<option value="2">Nombre de tu última mascota</option>
							<option value="1">Animal Favorito</option>
						</select>
						<input type="password" className="form-control" name="" placeholder="Respuesta" />
						<button type="submit" style={{ backgroundColor: "transparent" }} className="btn btn-primary">
							Recuperar Contraseña
						</button>
						<br />
					</form>
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

				{/* <h1 style={{ color: "black", textAlign: "center" }}>Bienvenido!</h1> */}

				<br />
			</div>
		</div>
	);
};
