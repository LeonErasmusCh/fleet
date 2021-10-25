import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import Calendar from "react-calendar";
import { Context } from "../store/appContext";
import { Selector } from "../component/filter";
import { TodoList } from "../component/todolist";
import { Calendario } from "../component/calendario";
import { Vistasell } from "../component/vistasell";
import { NewSidebar } from "../component/NewSidebar";
import mapa from "../../img/mapa.png";
// import { Mapa } from "../component/mapaZonas";

//npm install react-calendar
export const Seller = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.traerusuario();
	}, []);
	//validar usuario con el token haciendo fetch a mi ruta privada que tengo en el backend
	//eso debe retornarme si el token corresponde a una vendedora o a un transporttista
	const traerestado = () => {
		actions.estadoperfilpedido();
	};

	const traerestado2 = () => {
		actions.estadoperfilvendedor();
	};

	return (
		<>
			<div className="container">
				<div className="row text-center mt-3 divGrande">
					<h2 className="text-secondary mt-5" style={{ borderRadius: "15px" }}>
						Bienvenid@ <span> {store.info_user.name} </span>{" "}
					</h2>

					<div className="row mt-5">
						<div className="container bg-light col-10 col-md-8" style={{ borderRadius: "15px" }}>
							<div className="container mt-5 col-10 col-md-10">
								<button
									id="perfilV"
									className="btn "
									onClick={traerestado}
									style={{ color: "black", border: "white" }}>
									Solicitar Pedido
								</button>
								<button
									id="perfilV"
									className="btn "
									onClick={traerestado2}
									style={{ color: "black", border: "white" }}>
									Mis pedidos
								</button>
								<div className="row">
									<div className="row div-filtro">
										<div className="col">
											<div>{store.estado ? <Selector /> : <Vistasell />}</div>
										</div>{" "}
									</div>
								</div>{" "}
							</div>
						</div>
						<div className="container bg-light col-10 col-md-3 pt-5" style={{ borderRadius: "15px" }}>
							<div className="col-12 mb-5" style={{ textAlign: "center" }}>
								Delimitación de Zonas <i className="fas fa-chevron-down" />
								<Link to="/zones">
									<img src={mapa} style={{ width: "70%" }} />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>{" "}
		</>
	);
};
