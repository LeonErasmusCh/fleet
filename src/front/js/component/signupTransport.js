import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const SignupTransport = () => {
	const { store, actions } = useContext(Context);
	// const [seller, setSeller] = useState("");
	// const [transport, setTransport] = useState("");
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [rut, setRut] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [transAddress, setTransAddress] = useState("");
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

	const handlersubmit2 = e => {
		e.preventDefault();
		actions.userSignup2(name, lastName, rut, email, phone, transAddress, password);
		console.log("DATOS");
	};

	return (
		<>
			<div className="signinBox">
				<form onSubmit={e => handlersubmit2(e)}>
					<h1>Registro de Cuenta</h1>
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
						name="transAddress"
						placeholder="Dirección"
						onChange={e => setTransAddress(e.target.value)}
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
					<input type="submit" name="ingresar" value="Registrarse" onSubmit={e => handlersubmit2(e)} />
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
				</form>
				<form action="login.html" method="POST" />
			</div>
			{/* <SignupSeller /> */}
		</>
	);
};
