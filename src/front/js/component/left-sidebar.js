import React from "react";
import { Link, useParams } from "react-router-dom";

export const LeftSidebar = () => {
	return (
		<div className="container float-left">
			<div className="col-4">
				<h3>Vista Repartidor</h3>
				<div className="list-group">
					<a href="#" className="list-group-item list-group-item-action active">
						Inicio
					</a>
					<a href="#" className="list-group-item list-group-item-action">
						Despachos Solicitados
					</a>
					<a href="#" className="list-group-item list-group-item-action">
						Despachos Aceptados
					</a>
					<a href="#" className="list-group-item list-group-item-action">
						Despachos En curso
					</a>
					<a href="#" className="list-group-item list-group-item-action disabled">
						Estádistica de satisfación
					</a>
					<Link to="/">
						<span className="btn btn-primary btn-lg my-4" href="#" role="button">
							Back home
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};
