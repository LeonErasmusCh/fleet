import React from "react";
import PropTypes from "prop-types";
export const TeamMembers = props => {
	return (
		<div id="who-we-are" className="m-3 col-3 ">
			<h1 className="text-center p-3">Quienes somos</h1>
			<div className="row d-flex justify-content-around">
				<img src="rigo-baby.jpg" alt="..." className="rounded-circle img-thumbnail m-3" />
				<h5>
					Hola! Soy
					{props.name}
				</h5>
				<p>Fullstack developer 4Geeks...</p>
				<p>
					Integrante de este equipo, socio de este gran proyecto llamado Fleet. Somos un agente económico
					conformado por programadores, que a través de la tecnólogia y la misma programación en si, creamos
					una aplicación y/o pagina web con el fin de generar un vinculo seguro y confiable entre empresas
					vendedoras y empresas repartidoras, facilitando la comunicación directa entre ellas siendo nosotros
					un intermediario. Nuestra prestación de servicios no solo genera un mejor vinculo entre las empresas
					vendedoras y las empresas de reparto, sino que también puede otorgarle una satisfacción a los cientes de aquellas
					empresas en lo que respecta al despacho de sus encargos.
				</p>
			</div>
		</div>
	);
};
TeamMembers.propTypes = {
	name: PropTypes.string
};
