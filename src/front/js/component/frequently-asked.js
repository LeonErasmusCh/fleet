import React from "react";

export const FrequentlyAsked = () => {
	return (
		<div id="faq" className="p-5">
			<h2 className="text-center p-3 m-5 text-secondary">Preguntas Frecuentes</h2>
			<div className="row d-flex justify-content-around">
				<div className="col-10">
					<h3 style={{ color: "#ff1dff" }}>
						¿Cualquier persona que trabaje en una pyme vendedora o pyme transportista puede registrarse en
						Fleet?
					</h3>
					<br />
					<h3 style={{ color: "white" }}>
						<small className="text-muted lead">
							Así es, en nuestra app se pueden registar personas que trabajen en pymes vendedoras y pymes
							transportistas.
						</small>
					</h3>
					<br />
					<h3 style={{ color: "#ff1dff" }}>¿Ustedes se hacen responsables por el extravío de un pedido?</h3>
					<br />
					<h3 style={{ color: "white" }}>
						<small className="text-muted lead">
							No, nosotros solo facilitamos la comunicación entre pymes vendedoras y pymes transportistas.
						</small>
					</h3>
					<br />
					<h3 style={{ color: "#ff1dff" }}>¿Hay que pagar por registrarse en su app o es gratis?</h3>
					<br />
					<h3 style={{ color: "white" }}>
						<small className="text-muted lead" style={{ color: "white" }}>
							No, el registro es gratis para los dos perfiles, tanto para el perfil vendedor como para el
							perfil transportista.
						</small>
					</h3>
					<br />
					<h3 style={{ color: "#ff1dff" }}>
						¿Fleet es una app que se puede usar en todos los equipos tecnólogicos ya sea desde un
						smartphone, tablet o un computador?
					</h3>
					<br />
					<h3 style={{ color: "white" }}>
						<small className="text-muted lead">
							Si, nuestra app está diseñada para que se pueda bajar y usar desde un smartphone o también
							desde otros equipos como tablets y computadores.
						</small>
					</h3>
					<br />
					<h3 style={{ color: "#ff1dff" }}>¿Ustedes van llevando un registro de cada pedido?</h3>
					<br />
					<h3 style={{ color: "#white" }}>
						<small className="text-muted lead">
							Totalmente, nosotros vamos llevando un registro de cada pedido.
						</small>
					</h3>
				</div>
			</div>
		</div>
	);
};
