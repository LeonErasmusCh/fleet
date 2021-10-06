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
			<div className="row col-4 mx-3">
				<Link to="/">
					<button type="button" className="btn btn-secondary">
						Fleet
					</button>
				</Link>
			</div>
			<div className="ml-auto">
				<button onClick={logouts} type="button" className="btn btn-secondary">
					logout
				</button>
			</div>
		</nav>
	);
};
