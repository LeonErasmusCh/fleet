import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { ModalExample } from "./modal";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";

export const Selector = () => {
	const [filter, setFilter] = useState("");
	const { store, actions } = useContext(Context);
	const [datosVendedor, setDatosVendedor] = useState([]);

	useEffect(() => {
		setDatosVendedor(store.datos);
		console.log("datosVendedor", datosVendedor);
	});

	const handleChange = e => {
		console.log("element Selected!!", e.target.value);
		setFilter(e.target.value); //significa que como filtro ya tendrá un parámetro mostrará los que cumplan solamente
	};

	return (
		<>
			<div className="card-body">
				<h5 className="card-title">Dónde quieres enviar tu pedido? </h5>
				<div className="card-text">
					<div className="selector">
						<div className="select-container">
							<select name="plan" className="form-control" value={filter} onChange={handleChange}>
								<option disable selected="true" value="" className="text-center">
									-- Elegir Zona --
								</option>
								<option value="Poniente"> Poniente</option>
								<option value="Norte"> Norte</option>
								<option value="Centro"> Centro</option>
								<option value="Sur"> Sur</option>
								<option value="Oriente"> Oriente</option>
							</select>

							<table className="table form-control">
								<thead>
									<tr>
										<th>Transportista</th>
										<th>Zona de Origen</th>
										<th>Zona de Destino</th>
										<th>Tarifa</th>
									</tr>
								</thead>
								<tbody>
									{datosVendedor
										? datosVendedor.map((value, posicion) => {
												console.log("tarfias", value);
												return (
													<>
														{value.zoneDestino === filter ? (
															<tr>
																<td>{value.name_transport}</td>
																<td>{value.zone}</td>
																<td>{value.zoneDestino}</td>
																<td>{value.price}</td>
																<td>
																	<Link to="/sellerDetail">
																		<Button color="success">Solicitar</Button>
																	</Link>
																</td>
															</tr>
														) : (
															""
														)}
													</>
												);
										  })
										: console.log("esta vacia")}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
