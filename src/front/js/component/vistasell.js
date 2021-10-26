import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/home.scss";

export const Vistasell = () => {
	const { store, actions } = useContext(Context);
	const [encomiendas, setEncomiendas] = useState("");
	const [estado, setEstado] = useState(false);

	useEffect(() => {
		setEncomiendas(store.encomiendas);
		console.log("======>>>>>>>", encomiendas);
	});

	const traerestado = () => {
		actions.estadoperfilpedido();
	};

	return (
		<>
			<div className="card-body">
				<h5 className="card-title">Mis pedidos</h5>
				<div className="card-text">
					<div className="row">
						<div className="table-responsive">
							<table className="table table-light">
								<thead>
									<tr>
										<th scope="col">Transportista</th>
										<th scope="col">Origen</th>
										<th scope="col">Destino</th>
										<th scope="col">Dimenciones</th>
										<th scope="col">Peso</th>
										<th scope="col">Mensaje</th>
										<th scope="col">estado</th>
										<th scope="col">Eliminar</th>
									</tr>
								</thead>
								<tbody>
									{encomiendas
										? encomiendas.map((index, key) => {
												console.log("map", index, " key", key);
												return (
													<tr key={{ key }}>
														<td>{index.name_transport}</td>
														<td>{index.originAddress}</td>
														<td>{index.destinationAddress}</td>
														<td>{index.dimensions} cm</td>
														<td>{index.weight} kg</td>
														<td>{index.mensaje}</td>
														<td>{index.estado}</td>
														<td>{index.estado}</td>
													</tr>
												);
										  })
										: console.log("Failed to load encomiendas hook")}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
