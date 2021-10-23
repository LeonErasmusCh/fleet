import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Context } from "../store/appContext";

export const NewSidebar = () => {
	const { store, actions } = useContext(Context);

	//BUTTON 1
	const traelink = () => {
		actions.renderizarsidebar();
	};

	//BUTTON 2
	const traelink2 = () => {
		actions.renderizarsidebar2();
	};

	//BUTTON 3
	const traelink3 = () => {
		actions.renderizarsidebar2();
	};

	return (
		<>
			<div className="row">
				<div className="col col-2">
					<nav className="sidebar">
						<div className="sidebar-link">
							<div className="sidebar-link-left">
								<div className="icon icon-orange icon-rounded icon-small" />

								<button onClick={traelink3}>Perfil</button>
							</div>
							<div className="sidebar-link-right">
								<div className="icon icon-triangle" />
							</div>
						</div>

						<div className="sidebar-link">
							<div className="sidebar-link-left">
								<div className="icon icon-orange icon-rounded icon-small" />
								<button onClick={traelink2}>Perfil2</button>
							</div>
							<div className="sidebar-link-right">
								<div className="icon icon-triangle" />
							</div>
						</div>

						<div className="sidebar-link">
							<div className="sidebar-link-left">
								<div className="icon icon-orange icon-rounded icon-small" />
								<button onClick={traelink}>Perfil3</button>
							</div>
						</div>

						<div className="sidebar-link">
							<div className="sidebar-link-left">
								<div className="icon icon-orange icon-rounded icon-small" />
								<span>Link-4</span>
							</div>
						</div>

						<div className="sidebar-link">
							<div className="sidebar-link-left">
								<div className="icon icon-orange icon-rounded icon-small" />
								<span>Link-5</span>
							</div>
						</div>
						<Link to="/">
							<button
								id="signupButton"
								type="submit"
								style={{ marginTop: "120px" }}
								className="btn btn-primary">
								Volver a Inicio
							</button>
						</Link>
					</nav>
				</div>
			</div>
		</>
	);
};
