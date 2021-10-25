import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const SignupSeller = () => {
	const { store, actions } = useContext(Context);
	// const [seller, setSeller] = useState("");
	// const [transport, setTransport] = useState("");
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [rut, setRut] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [initialAddress, setInitialAddress] = useState("");
	const [password, setPassword] = useState("");
	const [data, setData] = useState();

	useEffect(
		() => {
			// console.log(data);
			// actions.userSignup(data);
		},
		[data]
	);

	// const registrarSeller = () => {
	// 	actions.registroUserSeller();
	// };

	const handlersubmit = e => {
		e.preventDefault();
		actions.userSignup(name, lastName, rut, email, phone, initialAddress, password);
		console.log("DATOS");
	};

	return (
		<>
			<div className="" style={{ alignContent: "center" }}>
				<form onSubmit={e => handlersubmit(e)}>
					<h1 />
					{/* <select className="custom-select" id="inputGroupSelect01">
							<option selected>Selecciona tu Perfil</option>
							<option value="transport" onClick={e => setTransport(e.target.value)}>
								Transportista
							</option>
							<option value="seller" onClick={e => setLastName(e.target.value)}>
								Vendedor
							</option>
						</select> */}
					<input
						type="text"
						className="form-control"
						// value={name}
						placeholder="Nombre"
						onChange={e => setName(e.target.value)}
					/>
					<input
						type="text"
						className="form-control"
						// value={lastName}
						name="lastName"
						placeholder="Apellido"
						onChange={e => setLastName(e.target.value)}
					/>
					<input
						type="text"
						className="form-control"
						// value={rut}
						name="rut"
						placeholder="RUT"
						onChange={e => setRut(e.target.value)}
					/>
					<input
						type="email"
						className="form-control"
						// value={email}
						name="email"
						placeholder="E-mail"
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						type="text"
						className="form-control"
						// value={phone}
						name="phone"
						placeholder="Teléfono"
						onChange={e => setPhone(parseInt(e.target.value))}
					/>
					<input
						type="text"
						className="form-control"
						// value={initialAddress}
						name="initialAddress"
						placeholder="Dirección"
						onChange={e => setInitialAddress(e.target.value)}
					/>
					<input
						type="password"
						className="form-control"
						// value={password}
						name="password"
						placeholder="Contraseña"
						onChange={e => setPassword(e.target.value)}
					/>
					<br />

					<Link to="/login">
						<input
							style={{
								// border: "2px",
								borderRadius: "5px",
								backgroundColor: "#ff1dff"
							}}
							className="btn btn-primary"
							type="submit"
							name="ingresar"
							value="Registrarse"
							onSubmit={e => handlersubmit(e)}
						/>
					</Link>
					<Link to="/login">
						<button
							style={{ backgroundColor: "#614183", marginLeft: "10px" }}
							className="btn btn-primary"
							// value={register}
							name="register">
							Volver
						</button>
					</Link>
				</form>
				<form action="login.html" method="POST" />
			</div>
		</>
	);
};
