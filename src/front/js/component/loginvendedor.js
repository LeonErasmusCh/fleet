import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const LoginVendedor = () => {
	const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");
	const { store, actions } = useContext(Context);
	const history = useHistory();

	console.log("this is your token", store.token);

	//FUNCIONES VARIAS PARA EL BOLEANO DE PERFILES (PROABLEMENTE SE PUEDE HACER EN MENOS PASOS)
	// const traeriniciosessionvendedor = () => {
	// 	actions.iniciarsessionvendedor();
	// };

	// const traeriniciosessiontransportista = () => {
	// 	actions.iniciarsessiontransportista();
	// };

	// ALMACENE UNA VARIABLE EN store LLAMADA SESSION QUE ES NULA, CREE DOS FUNCOINES EN FLUX UNA PARA INICIAR SESSION TRANSPORTISTA QUE CAMBIA A SESSION A TRUE Y OTRA PARA VENDEDORES QUE AMBIA SESSION A FALSE.

	//funciones para llamar a los login de vendedor y tranportista
	//llama login vendedor
	const handleClick = () => {
		actions.login(mail, password);
	};

	//condicional para que rediriga una vez iniciada session vendedor a seller
	if (store.token && store.token != "" && store.token != undefined) history.push("/seller");
	return (
		<>
			<div className="text-center mt-5">
				{/* <div>
					<div className="container login-container">
						<div className="row"> */}
				{/* <div className="col-8 justify-content-center login-form-1"> */}
				<div className="form-group">
					<input
						className="form-control"
						type="text"
						placeholder="E-mail"
						value={mail}
						onChange={e => setMail(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<input
						className="form-control"
						type="password"
						placeholder="Contraseña"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
				<button
					type="submit"
					style={{ backgroundColor: "transparent", marginLeft: "10px", marginBottom: "10px" }}
					className="btn btn-primary"
					onClick={handleClick}>
					Iniciar Sesión
				</button>
				{/* </div> */}
				{/* </div>
					</div>
				</div> */}
			</div>
		</>
	);
};
