import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const DashTrans = () => {
	const { store, actions } = useContext(Context);
	const [zone, setZone] = useState("");
	const [zoneDestino, setZoneDestino] = useState("");
	const [price, setPrice] = useState("");
	const [count, setCount] = useState(0);

	const handleChange = e => {
		//console.log(e.target.name);
		//console.log(e.target.value);
		e.preventDefault();
		console.log("Zona selected : ", e.target.value);
		setZona({ ...zona, [e.target.name]: e.target.value });
		console.log("zona :", zona);
	};

	const enviarDatos = event => {
		event.preventDefault();
		event.target.reset();
		setCount(count + 1);
		console.log("zona data", zona);
		actions.loadTransportPrices(zona);
	};

	const handlersubmit3 = e => {
		e.preventDefault();
		actions.loadTransportPrices(zone, zoneDestino, price);
		console.log(zone, zoneDestino, price);
	};

	useEffect(() => {
		actions.loadtrans();
	}, []);

	return (
		<div className="container">
			<h5>Bienvenido</h5>
			<h1>Lista de Precios Según Sector</h1>
			<div className="row mt-5">
				<div className="container col-9 col-md-8 bg-light">
					<div className="row">
						<h5 className="text-center m-3">Pedidos disponibles</h5>
						<table className="table table-light">
							<thead>
								<tr>
									<th scope="col">Origen</th>
									<th scope="col">Destino</th>
									<th scope="col">Precio</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Mark</td>
									<td>Otto</td>
									<td>
										<div className="d-flex align-items-center">
											@mdo
											<button type="button" className="btn btn-success btn-sm mx-3">
												<i className="fas fa-check mx-2" />
												aceptar
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td>Mark</td>
									<td>Otto</td>
									<td>
										<div className="d-flex align-items-center">
											@mdo
											<button type="button" className="btn btn-success btn-sm mx-3">
												<i className="fas fa-check mx-2" />
												aceptar
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td>Mark</td>
									<td>Otto</td>
									<td>
										<div className="d-flex align-items-center">
											@mdo
											<button type="button" className="btn btn-success btn-sm mx-3">
												<i className="fas fa-check mx-2" />
												aceptar
											</button>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<Link to="/">
						<button type="button" className="btn btn-secondary btn-md btn-block m-2">
							inicio
						</button>
					</Link>
					<Link to="/map">
						<button type="button" className="btn btn-secondary btn-md btn-block m-2">
							ver pedidos aceptados en mapa
						</button>
					</Link>
					<Link to="/">
						<button type="button" className="btn btn-secondary btn-md btn-block m-2">
							solicitudes
						</button>
					</Link>

					{/* 				<h4>** Montos Referenciales</h4>
				<div className="row">
					<button type="button" className="btn btn-primary mx-2">
						Editar Informacion
					</button>
					<button type="button" className="btn btn-primary">
						Guardar
					</button>
				</div> */}
				</div>

				<div className="container bg-light col-10 col-md-3 ">
					<h5 className="text-center m-3">Ingresar valores de servicio</h5>
					<form onSubmit={e => handlersubmit3(e)}>
						<div className="row p-3">
							<div className="col-12">
								<label htmlFor="formGroupExampleInput">Zona de Origen</label>
								<select
									type="text"
									name="zone"
									className="form-control"
									required
									onChange={e => setZone(e.target.value)}>
									<option disable selected="true" value="" className="text-center">
										-- Elegir Zona --
									</option>
									<option id="Cuidad" value="Centro">
										Centro
									</option>
									<option id="Cuidad" value="Sur">
										Sur
									</option>
									<option id="Cuidad" value="Oeste">
										Oeste
									</option>
									<option id="Cuidad" value="Norte">
										Norte
									</option>
								</select>
							</div>

							<div className="col-12">
								<label htmlFor="formGroupExampleInput">Zona de Destino</label>
								<select
									// id="zonaB"
									className="form-control"
									name="zoneDestino"
									onChange={e => setZoneDestino(e.target.value)}
									required>
									<option value="" className="text-center">
										-- Elegir Zona --
									</option>
									<option id="Cuidad" value="Centro">
										Centro
									</option>
									<option id="Cuidad" value="Sur">
										Sur
									</option>
									<option id="Cuidad" value="Oeste">
										Oeste
									</option>
									<option id="Cuidad" value="Norte">
										Norte
									</option>
								</select>
							</div>

							<div className="col-12">
								<label htmlFor="formGroupExampleInput">Precio</label>
								<input
									type="number"
									min="0"
									step="500"
									className="form-control"
									placeholder="Precio"
									name="price"
									required
									onChange={e => setPrice(e.target.value)}
								/>
							</div>
							<button
								type="sumbit"
								className="btn btn-secondary btn-md my-2"
								onSubmit={e => handlersubmit3(e)}>
								enviar
							</button>
							{count ? (
								<h6 className="text-success text-center p-2">
									{count} ingresado <i className="fas fa-check-circle" />
								</h6>
							) : null}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
