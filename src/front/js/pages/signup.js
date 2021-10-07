import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import "../../styles/demo.scss";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [seller, setSeller] = useState("");
	const [transport, setTransport] = useState("");
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
			console.log(data);
			actions.userSignup(data);
		},
		[data]
	);

	const registrarSeller = () => {
		actions.registroUserSeller();
	};

	const registrarTransport = () => {
		actions.registroUserTransport();
	};

	const handlersubmit = e => {
		e.preventDefault();
		actions.userSignup(name, lastName, rut, email, phone, initialAddress, password);
		console.log("DATOS");
	};

	return (
		<>
			<div id="divSignin">
				<div className="botones">
					<button onClick={registrarSeller}>Vendedor</button>
					<button onClick={registrarTransport}>Transportista</button>
				</div>
				<div className="container login-container">
					{/* <div>{store.registro ? <LoginVendedor /> : <LoginTransportista />}</div> */}
				</div>
			</div>
		</>
	);
};
