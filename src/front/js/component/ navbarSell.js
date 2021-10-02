import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const NavbarSell = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="row col-4 mx-3">
				<Link to="/">
					<button type="button" className="btn btn-secondary">
						Fleet
					</button>
				</Link>
			</div>
			<div className="row col-3 ml-auto">
				<button onClick={() => actions.logout()} type="button" className="btn btn-secondary">
					logout
				</button>
			</div>
		</nav>
	);
};
