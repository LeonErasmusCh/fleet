import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/home.scss";

export const Vistasell = () => {
	const { store, actions } = useContext(Context);
	const traerestado = () => {
		actions.estadoperfilpedido();
	};

	return (
		<>
			<div className="row projects-section-line text-center mt-5">
				<div className="col col-12 project-boxes jsGridView mt-5 mx-5">
					<div className="project-box">
						<div className="project-box-header">
							<div className="more-wrapper" />
						</div>
						<div className="project-box-content-header">
							<p className="box-content-header">Busca tu transportista favorito</p>
							<p className="box-content-subheader">Solicitar despacho</p>
						</div>
						<div className="box-progress-wrapper">
							<p className="box-progress-header">Progress</p>
							<div className="box-progress-bar">
								<span className="box-progress" />
							</div>
						</div>
					</div>
					<div className="project-box">
						<div className="project-box-header">
							<div className="more-wrapper" />
						</div>
						<div className="project-box-content-header">
							<p className="box-content-header">Busca tu transportista favorito</p>
							<p className="box-content-subheader">Solicitar despacho</p>
						</div>
						<div className="box-progress-wrapper">
							<p className="box-progress-header">Progress</p>
							<div className="box-progress-bar">
								<span className="box-progress" />
							</div>
						</div>
					</div>
					<div className="project-box">
						<div className="project-box-header">
							<div className="more-wrapper" />
						</div>
						<div className="project-box-content-header">
							<p className="box-content-header">Busca tu transportista favorito</p>
							<p className="box-content-subheader">Solicitar despacho</p>
						</div>
						<div className="box-progress-wrapper">
							<p className="box-progress-header">Progress</p>
							<div className="box-progress-bar">
								<span className="box-progress" />
							</div>
						</div>
					</div>
					<div className="project-box">
						<div className="project-box-header">
							<div className="more-wrapper" />
						</div>
						<div className="project-box-content-header">
							<p className="box-content-header">Busca tu transportista favorito</p>
							<p className="box-content-subheader">Solicitar despacho</p>
						</div>
						<div className="box-progress-wrapper">
							<p className="box-progress-header">Progress</p>
							<div className="box-progress-bar">
								<span className="box-progress" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
