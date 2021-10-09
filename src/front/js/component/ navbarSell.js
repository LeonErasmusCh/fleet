import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const NavbarSell = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const logouts = () => {
		actions.logout();
		history.push("/login");
	};

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
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
		</nav>
	);
};
