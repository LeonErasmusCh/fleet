import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { ModalExample } from "./modal";

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
				<h5 className="card-title">Solicitar pedido </h5>
				<div className="card-text">
					<div className="selector">
						<div className="select-container">
							<select name="plan" value={filter} onChange={handleChange}>
								<option value="Norte"> Norte</option>
								<option value="Centro"> Centro</option>
								<option value="Sur"> Sur</option>
								<option value="Oeste"> Oeste</option>
								<option value="Periferia"> Periferia</option>
							</select>

							<table className="table">
								<thead>
									<tr>
										<th>Pyme Transportista</th>
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
																	<ModalExample datosVendedor={value} />
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
