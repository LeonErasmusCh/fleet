import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import "../../styles/demo.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { LoginTransportista } from "../component/logintransportista";
import { LoginVendedor } from "../component/loginvendedor";
import "../../styles/demo.scss";

export const Login = () => {
	const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");
	const { store, actions } = useContext(Context);
	const history = useHistory();

	console.log("this is your token", store.token);

	//FUNCIONES VARIAS PARA EL BOLEANO DE PERFILES (PROABLEMENTE SE PUEDE HACER EN MENOS PASOS)
	const traeriniciosessionvendedor = () => {
		actions.iniciarsessionvendedor();
	};

	const traeriniciosessiontransportista = () => {
		actions.iniciarsessiontransportista();
	};

	// ALMACENE UNA VARIABLE EN store LLAMADA SESSION QUE ES NULA, CREE DOS FUNCOINES EN FLUX UNA PARA INICIAR SESSION TRANSPORTISTA QUE CAMBIA A SESSION A TRUE Y OTRA PARA VENDEDORES QUE AMBIA SESSION A FALSE.

	//funciones para llamar a los login de vendedor y tranportista
	//llama login vendedor
	const handleClick = () => {
		actions.login(mail, password);
	};

	//llama login transportista
	const handleClick2 = () => {
		actions.login2(mail, password);
	};

	//condicional para que rediriga una vez iniciada session vendedor a seller
	if (store.token && store.token != "" && store.token != undefined) history.push("/seller");
	return (
		<>
			<div className="text-center mt-5">
				{/* <div id="divSignin"> */}
				<div className="signinBox">
					{/* <div id="loginBox"> */}
					<h1 style={{ color: "white" }}>Selecciona tu Perfil</h1>
					<br />
					<br />
					<div className="botones">
						<button
							id="perfilV"
							className="btn "
							onClick={traeriniciosessionvendedor}
							style={{ color: "white", border: "white" }}>
							Vendedor
						</button>
						<button
							id="perfilT"
							className="btn"
							onClick={traeriniciosessiontransportista}
							style={{ color: "white" }}>
							Transportista
						</button>
					</div>
					<div className="container login-container">
						<div>{store.session ? <LoginVendedor /> : <LoginTransportista />}</div>
					</div>
					<div style={{ align: "right" }}>
						<h5 style={{ color: "white" }}>
							¿Aún no cuentas con tu perfil?
							<br />
							Registrate para obtener los beneficios de Fleet!
						</h5>
						<a href="/signup">Registrarse</a>
						<br />
						<a href="/password">¿Olvidaste tu contraseña?</a>
					</div>

					{/* <Link to="/signup">
								<button
									type="submit"
									className="btn btn-primary"
									// value={register}
									name="register">
									Registrarse
								</button>
							</Link> */}
				</div>
				{/* </div> */}
				{/* </div> */}
			</div>
		</>
	);
};
