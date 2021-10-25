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
			<div className="container mt-5 col-10 col-md-10">
				<div className="row">
					<h5 className="text-center m-3">Mis pedidos </h5>
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
		</>
	);
};
