import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const DashTrans = () => {
	const { store, actions } = useContext(Context);

	const [zone, setZone] = useState("");
	const [zoneDestino, setZoneDestino] = useState("");
	const [price, setPrice] = useState("");
	const [count, setCount] = useState(0);
	const [encomiendas, setEncomiendas] = useState("");

	useEffect(() => {
		actions.traerusuario();
	}, []);

	const handleChange = e => {
		//console.log(e.target.name);
		//console.log(e.target.value);
		e.preventDefault();
		console.log("Zona selected : ", e.target.value);
		setZona({ ...zona, [e.target.name]: e.target.value });
		console.log("zona :", zona);
	};

	// const enviarDatos = event => {
	// 	event.preventDefault();
	// 	event.target.reset();
	// 	setCount(count + 1);
	// 	console.log("zona data", zona);
	// 	actions.PostPrices(zona);
	// };

	const handlersubmit3 = e => {
		e.preventDefault();
		e.target.reset();
		setCount(count + 1);
		actions.PostPrices(zone, zoneDestino, price);
		console.log(zone, zoneDestino, price);
	};

	useEffect(() => {
		actions.loadtrans();
	}, []);

	useEffect(() => {
		setEncomiendas(store.encomiendas);
		console.log("======>>>>>>>", encomiendas);
	});

	return (
		<>
			<div className="container">
				<div className="row text-center mt-3">
					<h4 className="text-secondary">
						Bienvenido <span> {store.info_user.name} </span>
					</h4>
				</div>
				<div className="row mt-5">
					<div className="container bg-light col-10 col-md-8">
						<div className="">
							<h3>Aqui voy a dejar los precios ingresados</h3>
						</div>
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
										<option id="Cuidad" value="Periferia">
											Periferia
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
										<option id="Cuidad" value="Periferia">
											Periferia
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

			<div className="container mt-5 col-10 col-md-10">
				<div className="row">
					<h5 className="text-center m-3">Pedidos disponible</h5>
					<table className="table table-light">
						<thead>
							<tr>
								<th scope="col">Origen</th>
								<th scope="col">Destino</th>
								<th scope="col">Dimenciones</th>
								<th scope="col">Peso</th>
								<th scope="col">Mensaje</th>
								<th scope="col">Aceptar</th>
							</tr>
						</thead>
						<tbody>
							{encomiendas
								? encomiendas.map((index, key) => {
										console.log("map", index, " key", key);
										return (
											<tr key={{ key }}>
												<td>{index.originAddress}</td>
												<td>{index.destinationAddress}</td>
												<td>{index.dimensions} cm</td>
												<td>{index.weight} kg</td>
												<td>{index.mensaje}</td>
												<td>
													<div className="d-flex align-items-center">
														<button type="button" className="btn btn-success btn-sm">
															<i className="fas fa-check " />
															aceptar
														</button>
													</div>
												</td>
											</tr>
										);
								  })
								: console.log("Failed to load encomiendas hook")}
						</tbody>
					</table>
					<div className="container col-10 col-md-8">
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
					</div>
				</div>
			</div>
		</>
	);
};
