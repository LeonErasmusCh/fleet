import React from "react";
import { useEffect, useState, useAction, useContext, getState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const PasswordRecovery = () => {
	const [email, setEmail] = useState("");
	const { actions } = useContext(Context);

	return (
		<div className="container" style={{ backgroundColor: "violet" }}>
			<br />
			<br />
			<h5>¿Olvidó su contraseña y no puede acceder a su perfil? Aquí puede recuperarla.</h5>
			<div className="text-center mt-5">
				<h6>
					Por favor ingrese su email aquí y haga click en el boton enviar, nosotros le enviaremos un correo en
					el cual le indicaremos los pasos a seguir para poder recuperar su contraseña.
				</h6>

				<div className="text-center mt-5">
					<input
						className="form-control"
						type="text"
						placeholder="Ingrese su email"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<button
					type="submit"
					style={{ backgroundColor: "orange", fontSize: "20px" }}
					className="btn btn-outline-border border-dark border border-2">
					Enviar
				</button>
			</div>
		</div>
	);
};
