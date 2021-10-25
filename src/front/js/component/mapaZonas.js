import React from "react";
import mapaZonas from "../../img/mapa.png";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Mapa = () => {
	return (
		<>
			<div className="row zonas " style={{ textAlign: "center", alignContent: "center" }}>
				<h1 style={{ color: "#CF32DF" }}>Delimitación de Zonas</h1>

				<div className="col-8 div-mapa">
					<img src={mapaZonas} style={{ width: "65%" }} />
				</div>
				<div className="col-3 div-zonas" style={{ color: "white", textAlign: "left", marginTop: "45px" }}>
					<h4>
						<i className="fas fa-circle" style={{ color: "#EC9945", margin: "10px" }} />
						Poniente
					</h4>
					<br />
					<h4>
						<i className="fas fa-circle" style={{ color: "#648A12", margin: "10px" }} />
						Norte
					</h4>
					<br />
					<h4>
						<i className="fas fa-circle" style={{ color: "#E6F12C", margin: "10px" }} />
						Centro
					</h4>
					<br />
					<h4>
						<i className="fas fa-circle" style={{ color: "#614183", margin: "10px" }} />
						Sur
					</h4>
					<br />
					<h4>
						<i className="fas fa-circle" style={{ color: "#42B8E5", margin: "10px" }} />
						Oriente
					</h4>{" "}
					<br />
					<a href="javascript: history.go(-1)">Volver </a>
				</div>

				{/* <Link to="/seller">
					<button
						style={{ backgroundColor: "#614183", marginLeft: "10px" }}
						className="btn btn-primary"
						// value={register}
						name="register">
						Volver
					</button>
				</Link> */}
			</div>
		</>
	);
};
