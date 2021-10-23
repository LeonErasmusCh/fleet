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
			<div className="app-container">
				<div className="row">
					<div className="col col-2">
						<NewSidebar />
					</div>

					<div className="col col-10">
						<div className="row app-content">
							<div className="col col-8 projects-section">
								<div className="row projects-section-header m-5">
									<div className="col col-6">
										<h5>
											Bienvenido
											<br />
											<span> {store.info_user.name} </span>
										</h5>
									</div>
									<div className="col col-4">
										<span>Pendiente traer fecha actual</span>
									</div>
									<div className="projects-status">
										<div className="item-status">
											<span className="status-number">10</span>
											<span className="status-type">Ventas</span>
										</div>
										<div className="item-status">
											<span className="status-number">24</span>
											<span className="status-type">Pendientes</span>
										</div>
									</div>
								</div>

								<div className="projects-section-line">
									<div className="row">
										<div className="card text-center">
											<div className="card-header">
												<ul className="nav nav-pills card-header-pills">
													<li className="nav-item">
														<button
															id="perfilV"
															className="btn "
															onClick={traerestado}
															style={{ color: "black", border: "white" }}>
															pedido
														</button>
													</li>
													<li className="nav-item">
														<button
															id="perfilV"
															className="btn "
															onClick={traerestado2}
															style={{ color: "black", border: "white" }}>
															perfil
														</button>
													</li>
												</ul>
											</div>
											<div className="card-body">
												<h5 className="card-title">Mis actividades </h5>
												<p className="card-text">
													<div>{store.estado ? <Selector /> : <Vistasell />}</div>{" "}
												</p>
												<a href="#" className="btn btn-primary">
													Go somewhere
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="projects-section-footer">
									<div>{store.sidebar ? <Calendario /> : ""}</div>
								</div>
							</div>
							<div className="col col-3 messages-section">
								<div className="projects-section-header">
									<p>Mi tablero</p>
								</div>
								<div className="messages">
									<div className="message-box">Favoritos</div>
									<div className="message-box" />
									<div className="message-box">
										<Calendario />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
