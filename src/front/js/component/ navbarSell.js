import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/home.scss";

export const NavbarSell = () => {
	const { store, actions } = useContext(Context);

	const history = useHistory();
	const logouts = () => {
		actions.logout();
		history.push("/login");
	};

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="row col-6 mx-3">
				<Link to="/">
					<a className="navbar-brand text-white" href="#">
						<span className="fleet">
							<i className="fas fa-box-open ">
								<em style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>Fleet</em>
							</i>
						</span>
					</a>
				</Link>
			</div>
			<div className="app-header-right">
				<button className="mode-switch" title="Switch Theme">
					<svg
						className="moon"
						fill="none"
						strokeLinecap="currentColor"
						strokeLinecap-linecap="round"
						strokeLinecap-linejoin="round"
						strokeLinecap-width="2"
						width="24"
						height="24"
						viewBox="0 0 24 24">
						<defs />
						<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
					</svg>
				</button>
				<button className="profile-btn">
					<img src="https://assets.codepen.io/3306515/IMG_2025.jpg" />
					<span>{store.info_user.name}</span>
				</button>
				<div className="ml-auto">
					<button onClick={logouts} type="button" className="btn btn-secondary">
						logout
					</button>
				</div>
			</div>
		</nav>
	);
};
