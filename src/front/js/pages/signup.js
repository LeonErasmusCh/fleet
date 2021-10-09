import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { SignupSeller } from "../component/signupSeller";
import { SignupTransport } from "../component/signupTransport";
import "../../styles/demo.scss";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	// // const [seller, setSeller] = useState("");
	// // const [transport, setTransport] = useState("");
	// const [name, setName] = useState("");
	// const [lastName, setLastName] = useState("");
	// const [rut, setRut] = useState("");
	// const [email, setEmail] = useState("");
	// const [phone, setPhone] = useState("");
	// const [initialAddress, setInitialAddress] = useState("");
	// const [password, setPassword] = useState("");
	// const [data, setData] = useState();

	// useEffect(
	// 	() => {
	// console.log(data);
	// actions.userSignup(data);
	// 	},
	// 	[data]
	// );

	const registrarSeller = () => {
		actions.registroUserSeller();
	};

	const registrarTransport = () => {
		actions.registroUserTransport();
	};

	// const handlersubmit = e => {
	// 	e.preventDefault();
	// 	actions.userSignup(name, lastName, rut, email, phone, initialAddress, password);
	// 	console.log("DATOS");
	// };

	return (
		<>
			<div className="signinBox">
				<h1 style={{ color: "white" }}>Selecciona tu Perfil</h1>
				<button className="btn" onClick={registrarSeller} style={{ color: "white" }}>
					Vendedor
				</button>
				<button className="btn" onClick={registrarTransport} style={{ color: "white" }}>
					Transportista
				</button>
				<div>{store.registro ? <SignupSeller /> : <SignupTransport />}</div>
			</div>

			{/* <div className="signinBox">
				<form onSubmit={e => handlersubmit(e)}>
					<h1>Registro de Cuenta</h1>
					<select className="custom-select" id="inputGroupSelect01">
							<option selected>Selecciona tu Perfil</option>
							<option value="transport" onClick={e => setTransport(e.target.value)}>
								Transportista
							</option>
							<option value="seller" onClick={e => setLastName(e.target.value)}>
								Vendedor
							</option>
						</select>
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
					<input type="submit" name="ingresar" value="Registrarse" onSubmit={e => handlersubmit(e)} /> */}
			{/* <Link to="/login">
						<button
							type="submit"
							style={{ backgroundColor: "transparent" }}
							className="btn btn-primary"
							// value={register}
							name="register">
							Iniciar Sesión
						</button>
					</Link> */}
			{/* </form>
				<form action="login.html" method="POST" />
			</div> */}
			{/* <SignupSeller /> */}
		</>
	);
};
