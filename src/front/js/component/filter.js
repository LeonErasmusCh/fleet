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
		<div className="selector">
			<div className="select-container">
				<select name="plan" value={filter} onChange={handleChange}>
					<option value="norte"> Norte</option>
					<option value="centro"> Centro</option>
					<option value="sur"> Sur</option>
					<option value="periferia"> Periferia</option>
				</select>

				<table className="table">
					<thead>
						<tr>
							<th>transportista</th>
							<th>zone</th>
							<th>zoneDestino</th>
							<th>price</th>
						</tr>
					</thead>
					<tbody>
						{datosVendedor
							? datosVendedor.map((value, posicion) => {
									console.log("helloooooo tarfias", value);
									return (
										<>
											{value.zone === filter ? (
												<tr>
													<td>{value.transportista}</td>
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
	);
};
