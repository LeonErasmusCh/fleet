import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

import { Link, useParams } from "react-router-dom";
import { LeftSidebar } from "../component/left-sidebar";
import { ReceiveMessage } from "../component/receiveMessage";

export const SellerDetail = () => {
	const { store, actions } = useContext(Context);

	const [form, setForm] = useState({
		origin_calle: "",
		origin_numero: "",
		origin_pisodepto: "",
		origin_comuna: "",
		origin_cuidad: "Santiago",
		encomienda_peso: "",
		encomienda_alto: "",
		encomienda_ancho: "",
		encomienda_largo: "",
		destino_calle: "",
		destino_numero: "",
		destino_pisodepto: "",
		destino_comuna: "",
		destino_cuidad: "Santiago",
		mensaje: ""
	});

	const [count, setCount] = useState(0);

	const handleInputChange = event => {
		// console.log(event.target.name)
		// console.log(event.target.value)
		setForm({
			...form,
			[event.target.name]: event.target.value
		});
		//console.log("form data", form);
	};

	const enviarDatos = event => {
		event.preventDefault();
		event.target.reset();
		setCount(count + 1);
		console.log("form data", form);
		// NEXT SEND FORM TO STORE loadEncomiendaForm()
		actions.loadEncomiendaForm(form);
		actions.postForm();
	};

	return (
		<>
			<form className="container bg-light col-12 col-md-8" onSubmit={enviarDatos}>
				<div className="col-10 col-md-9 mx-auto">
					<h3 className="text-center text-secondary p-4">Solicitar pedido</h3>

					<div className="border-bottom border-light m-3" />

					<div className="form-group">
						<h5 className="text-secondary">
							Donde retiramos?
							<i className="fas fa-home mx-3" />
						</h5>
						<div className="row">
							<div className=" w-75">
								<label htmlFor="formGroupExampleInput2">Calle</label>
								<input
									type="text"
									className="form-control"
									id="formGroupExampleInput2"
									placeholder="Calle"
									name="origin_calle"
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className="w-25">
								<label htmlFor="formGroupExampleInput2">Numero</label>
								<input
									type="number"
									min="1"
									className="form-control"
									placeholder="1"
									name="origin_numero"
									onChange={handleInputChange}
									required
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
									min="1"
									name="origin_pisodepto"
									onChange={handleInputChange}
									required
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
									onChange={handleInputChange}
									required
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

						<h5 className="text-secondary">
							Dimenciones del encomienda
							<i className="fas fa-box mx-3" />
						</h5>
						<footer className="blockquote-footer text-info py-2">
							Si deseas enviar multiples pedidos a la misma direccion, ingresa peso y volumen por el total
						</footer>
						<div className="row">
							<div className="col">
								<label htmlFor="formGroupExampleInput2">peso</label>
								<input
									type="number"
									className="form-control"
									placeholder="1kg"
									min="1"
									name="encomienda_peso"
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className="col">
								<label htmlFor="formGroupExampleInput2">alto</label>
								<input
									type="number"
									className="form-control"
									placeholder="30cm"
									min="1"
									name="encomienda_alto"
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className="col">
								<label htmlFor="formGroupExampleInput2">ancho</label>
								<input
									type="number"
									className="form-control"
									placeholder="20cm"
									min="1"
									name="encomienda_ancho"
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className="col">
								<label htmlFor="formGroupExampleInput2">largo</label>
								<input
									type="number"
									className="form-control"
									placeholder="10cm"
									min="1"
									name="encomienda_largo"
									onChange={handleInputChange}
									required
								/>
							</div>

							<div className="border-bottom border-light m-3" />

							<h5 className="text-secondary">
								Donde entregamos?
								<i className="fas fa-check-square mx-3" />
							</h5>
							<div className="row">
								<div className=" w-75">
									<label htmlFor="formGroupExampleInput2">Calle</label>
									<input
										type="text"
										className="form-control"
										id="formGroupExampleInput2"
										placeholder="Calle"
										name="destino_calle"
										onChange={handleInputChange}
										required
									/>
								</div>
								<div className="w-25">
									<label htmlFor="formGroupExampleInput2">Numero</label>
									<input
										type="number"
										min="1"
										className="form-control"
										placeholder="1"
										name="destino_numero"
										onChange={handleInputChange}
										required
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
										onChange={handleInputChange}
										required
									/>
								</div>
								<div className="col">
									<label htmlFor="formGroupExampleInput2">Comuna</label>
									<input
										type="text"
										className="form-control"
										placeholder="Comuna"
										list="comuna"
										name="destino_comuna"
										onChange={handleInputChange}
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
								<label htmlFor="exampleFormControlTextarea1">Mensaje</label>
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									name="mensaje"
									onChange={handleInputChange}
								/>
							</div>

							<div className="border-bottom border-light m-3" />

							{count ? (
								<h6 className="text-success text-center p-2">
									{count} ingresado <i className="fas fa-check-circle" />
								</h6>
							) : null}

							<button className="btn btn-primary my-3" type="submit">
								enviar
							</button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};
