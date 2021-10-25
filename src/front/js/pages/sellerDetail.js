import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

import { Link, useParams } from "react-router-dom";
import { LeftSidebar } from "../component/left-sidebar";
import { ReceiveMessage } from "../component/receiveMessage";

export const SellerDetail = () => {
	const { store, actions } = useContext(Context);

	// const [estado, setEstado] = useState("");
	const [originAddress, setOriginAddress] = useState("");
	const [destinationAddress, setDestinationAddress] = useState("");
	const [mensaje, setMensaje] = useState("");
	// const [zone, setZone] = useState("");
	// const [zoneDestino, setZoneDestino] = useState("");
	const [weight, setWeight] = useState("");
	const [dimensions, setDimensions] = useState("");
	// const [id_transport, setId_transport] = useState("");
	// const [name_transport, setName_transport] = useState("");
	// const [phone_transport, setPhone_transport] = useState("");
	// const [id_seller, setId_seller] = useState("");
	// const [name_seller, setName_seller] = useState("");
	const [phone_seller, setPhone_seller] = useState("");
	// const [rating, setRating] = useState("");
	// const [price, setPrice] = useState("");

	// const [form, setForm] = useState({
	// 	origin_calle: "",
	// 	origin_numero: "",
	// 	origin_pisodepto: "",
	// 	origin_comuna: "",
	// 	origin_cuidad: "Santiago",
	// 	encomienda_peso: "",
	// 	encomienda_alto: "",
	// 	encomienda_ancho: "",
	// 	encomienda_largo: "",
	// 	destino_calle: "",
	// 	destino_numero: "",
	// 	destino_pisodepto: "",
	// 	destino_comuna: "",
	// 	destino_cuidad: "Santiago",
	// 	mensaje: ""
	// });

	// const [count, setCount] = useState(0);

	// const handleInputChange = event => {
	// 	// console.log(event.target.name)
	// 	// console.log(event.target.value)
	// 	setForm({
	// 		...form,
	// 		[event.target.name]: event.target.value
	// 	});
	//console.log("form data", form);
	// };

	// const handlersubmit4 = e => {
	// 	e.preventDefault();
	// 	actions.postEncomiendas(estado, originAddress, destinationAddress, mensaje);
	// 	console.log(estado, originAddress, destinationAddress, mensaje);
	// };

	const enviarSolicitud = e => {
		e.preventDefault();
		// e.target.reset();
		// setCount(count + 1);
		// console.log("form data", form);
		// NEXT SEND FORM TO STORE loadEncomiendaForm()
		actions.postEncomiendas(originAddress, destinationAddress, weight, dimensions, mensaje, phone_seller);
		console.log(originAddress, destinationAddress, mensaje);
		// actions.loadEncomiendaForm(form);
		// actions.postForm();
	};

	return (
		<>
			<form
				className="container bg-light col-12 col-md-8"
				style={{ borderRadius: "15px" }}
				onSubmit={e => enviarSolicitud(e)}>
				<div className="col-10 col-md-9 mx-auto">
					<h3 className="text-center text-secondary p-4">Solicitud de Servicio</h3>

					<div className="border-bottom border-light m-3" />

					<div className="form-group">
						<h5 className="text-secondary">
							Dirección de Origen
							<i className="fas fa-home mx-3" />
						</h5>
						<div className="row">
							<div className="  w-100">
								<label htmlFor="formGroupExampleInput2" />
								<input
									type="text"
									className="form-control"
									id="formGroupExampleInput2"
									placeholder="Ej: Pasaje Las Flores 1234, Providencia"
									name="originAddress"
									onChange={e => setOriginAddress(e.target.value)}
									//required
								/>
							</div>
							{/* <div className="w-25">
								<label htmlFor="formGroupExampleInput2">Numero</label>
								<input
									type="number"
									min="1"
									className="form-control"
									placeholder="1"
									name="numeracion"
									// onChange={e => setEstado(e.target.value)}
									//required
								/>
							</div> 
						</div>*/}

							{/*<div className="row">
								<div className="w-25">
								<label htmlFor="formGroupExampleInput2">Piso/Depto</label>
								<input
									type="number"
									className="form-control"
									placeholder="1"
									min="1"
									name="origin_pisodepto"
									//onChange={handleInputChange}
									//required
								/>
							</div>
							<div className="col">
								<label htmlFor="formGroupExampleInput2">Comuna</label>
								<input
									type="text"
									className="form-control"
									placeholder="Comuna"
									list="comuna"
									name="origin_comuna"
									//onChange={handleInputChange}
									//required
								/>
								<datalist id="comuna">
									<option value="Cerrillos" />
									<option value="Cerro Navia" />
									<option value="Conchali" />
									<option value="El Bosque" />
									<option value="Estación Central" />
									<option value="Huechuraba" />
									<option value="Independencia" />
									<option value="La Cisterna" />
									<option value="La Florida" />
									<option value="La Reina" />
									<option value="Las Condes" />
									<option value="Lo Barnechea" />
									<option value="Lo Espejo" />
									<option value="Lo Prado" />
									<option value="Macul" />
									<option value="Maipu" />
									<option value="Nunoa" />
									<option value="Pedro Aguirre Cerda" />
									<option value="Penalolen" />
									<option value="Providencia" />
									<option value="Pudahuel" />
									<option value="Quilicura" />
									<option value="Quinta Normal" />
									<option value="Recoleta" />
									<option value="Renca" />
									<option value="San Joaquin" />
									<option value="San Miguel" />
									<option value="San Ramon" />
									<option value="Santiago" />
									<option value="Vitacura" />
								</datalist>
							</div>*/}
							<div className="col">
								<label htmlFor="formGroupExampleInput2">Ciudad</label>
								<select type="text" id="cuidad" className="form-control" placeholder="Santiago">
									<option id="Cuidad" value="Santiago">
										Santiago
									</option>
								</select>
							</div>
						</div>

						<div className="border-bottom border-light m-3" />

						<h5 className="text-secondary">
							Dimenciones del encomienda
							<i className="fas fa-box mx-3" />
						</h5>
						<footer className="blockquote-footer text-info py-2">
							Si deseas enviar multiples pedidos a la misma direccion, ingresa peso y volumen por el total
						</footer>
						<div className="row">
							<div className="col">
								<label htmlFor="formGroupExampleInput2">Peso</label>
								<input
									type="number"
									className="form-control"
									placeholder="1kg"
									min="1"
									name="weight"
									onChange={e => setWeight(e.target.value)}
									//required
								/>
							</div>
							<div className="col">
								<label htmlFor="formGroupExampleInput2">Medidas</label>
								<input
									type="text"
									className="form-control"
									placeholder="Ej: 20x30x15"
									// min="1"
									name="dimensions"
									onChange={e => setDimensions(e.target.value)}
									//required
								/>
							</div>
							{/* <div className="col">
								<label htmlFor="formGroupExampleInput2">ancho</label>
								<input
									type="number"
									className="form-control"
									placeholder="20cm"
									min="1"
									name="encomienda_ancho"
									//onChange={handleInputChange}
									//required
								/>
							</div> */}
							{/* <div className="col">
								<label htmlFor="formGroupExampleInput2">largo</label>
								<input
									type="number"
									className="form-control"
									placeholder="10cm"
									min="1"
									name="encomienda_largo"
									//onChange={handleInputChange}
									//required
								/>
							</div> */}
							{/* <div className="border-bottom border-light m-3" /> */}
							<h5 className="text-secondary">
								Dirección de Destino
								<i className="fas fa-check-square mx-3" />
							</h5>{" "}
							<div className="row">
								<div className=" w-100">
									<label htmlFor="formGroupExampleInput2" />
									<input
										type="text"
										className="form-control"
										id="formGroupExampleInput2"
										placeholder="Ej: Pasaje Las Flores 1234, Providencia"
										name="destinationAddress"
										onChange={e => setDestinationAddress(e.target.value)}
										//required
									/>
								</div>
								{/* <div className="w-25">
									<label htmlFor="formGroupExampleInput2">Numero</label>
									<input
										type="number"
										min="1"
										className="form-control"
										placeholder="1"
										name="destino_numero"
										//onChange={handleInputChange}
										//required
									/>
								</div>
						</div>

							<div className="row">
								<div className="w-25">
									<label htmlFor="formGroupExampleInput2">Piso/Depto</label>
									<input
										type="number"
										className="form-control"
										placeholder="1"
										name="destino_pisodepto"
										//onChange={handleInputChange}
										//required
									/>
								</div>*/}
								<div className="col">
									<label htmlFor="formGroupExampleInput2">Contacto</label>
									<input
										type="number"
										className="form-control"
										placeholder="+569 88776655"
										name="phone_seller"
										onChange={e => setPhone_seller(e.target.value)}
										required
									/>
									<datalist id="comuna" />
								</div>
								<div className="col">
									<label htmlFor="formGroupExampleInput2">Ciudad</label>
									<select type="text" id="cuidad" className="form-control" placeholder="Santiago">
										<option id="Cuidad" value="Santiago">
											Santiago
										</option>
									</select>
								</div>
							</div>
							<div className="border-bottom border-light m-3" />
							<div className="form-group">
								<label htmlFor="exampleFormControlTextarea1">Especificaciones</label>
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									placeholder="Ej: Hola! Necesito un despacho para el día Martes 14 de Diciembre, en horario PM"
									name="mensaje"
									onChange={e => setMensaje(e.target.value)}
								/>
							</div>
							<div className="border-bottom border-light m-3" style={{ alignContent: "center" }}>
								{/* {count ? (
								<h6 className="text-success text-center p-2">
									{count} ingresado <i className="fas fa-check-circle" />
								</h6>
							) : null} */}
								<button
									className="btn btn-primary my-3"
									type="submit"
									onSubmit={e => enviarSolicitud(e)}>
									enviar
								</button>{" "}
								<br />
								<a href="javascript: history.go(-1)">Volver </a>
								<br />
							</div>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};
