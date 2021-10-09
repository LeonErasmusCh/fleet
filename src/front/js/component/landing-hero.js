import React from "react";
import heroImg from "../../img/heroImg.png";
import { Link } from "react-router-dom";

export const HeroSection = () => {
	return (
		<div id="heroSection">
			<div className="container">
				<div className="row pt-5 h-100">
					<div className="col-sm-12 col-lg-5">
						<h1 id="heroH1" className="text-white p-5 text-md-left text-xs-center display-5">
							Hola! Somos <em className="font-italic fleet-in-herosection">Fleet</em> y aqui es donde
							juntamos vendedores y repartidores
						</h1>
						<div className="container">
							<div className="row">
								<div className="col-xs-12 text-center">
									<div className=" text-md-left">
										<Link to="/login">
											<button className="button">iniciar Sesión</button>
										</Link>
										<Link to="/signup">
											<button className="button ">Registrar</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-5 p-5 img-fluid d-none d-lg-block">
						<img className="heroImg" src={heroImg} alt="Despachos" />
					</div>
				</div>
			</div>
		</div>
	);
};
