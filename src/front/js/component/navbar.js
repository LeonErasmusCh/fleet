import React from "react";
import { Link } from "react-router-dom";
import fleet from "../../img/fleet-logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg fixed-top">
			<div className="container">
				<a className="navbar-brand text-white" href="#">
					{/**
					 <span className="fleet">
						<i className="fas fa-box-open ">
							<em style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>Fleet</em>
						</i>
					</span>

					 */}

					<img src={fleet} style={{ height: "50px", marginBottom: "0", marginTop: "10px" }} />
				</a>
				<button
					className="navbar-toggler navbar-dark"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
					<div className="row" id="navbarNav">
						<ul className=" navbar-nav ml-auto">
							<li className="nav-item">
								<a className="nav-link " aria-current="page" href="#">
									inicio
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#faq">
									preguntas frecuentes
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#contacts">
									contactos
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#who-we-are">
									quienes somos
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
