import React, { Component } from "react";
import fleet from "../../img/fleet-logo.png";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center text-sm">
		<a className="navbar-brand text-white" href="#">
			<img src={fleet} style={{ height: "50px", marginBottom: "0", marginTop: "10px" }} />

			{/* 
			<span className="fleet">
				<i className="fas fa-box-open ">
					<small style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>Fleet</small>
				</i>
			</span>
			
			*/}
		</a>
	</footer>
);
