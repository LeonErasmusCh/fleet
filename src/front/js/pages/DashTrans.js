import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const DashTrans = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadtrans();
	}, []);

	return (
		<div className="MarginDashTrans">
			<div className="container w-50">
				<h5>Bienvenido {store.perfil.name}</h5>
				<h1>Lista de Precios Según Sector</h1>

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
							<td>@mdo</td>
						</tr>
						<tr>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<td>Larry</td>
							<td>the Bird</td>
							<td>@twitter</td>
						</tr>
					</tbody>
				</table>
				<Link to="/">
					<button type="button" className="btn btn-success btn-md btn-block m-2">
						inicio
					</button>
				</Link>
				<Link to="/map">
					<button type="button" className="btn btn-success btn-md btn-block m-2">
						ver pedidos aceptados en mapa
					</button>
				</Link>
				<Link to="/">
					<button type="button" className="btn btn-success btn-md btn-block m-2">
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
		</div>
	);
};
