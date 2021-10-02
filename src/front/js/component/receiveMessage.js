import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const ReceiveMessage = () => {
	const { store, actions } = useContext(Context);
	const [accept, setAccept] = useState(null);

	return (
		<div className="container text-center float-right">
			<div className="col-4">
				<h5>Tienes un mensaje</h5>
				{/* Recibir mensaje */}
				<p>
					Por favor necesito enviar un pedido mañana desde santiago centre a las condes. Peso aprox 5 kg.
					Dimensiones 25cm x 25cm
					<div className="text-center mt-5">
						<button
							type="button"
							className="btn btn-primary mx-1"
							onClick={() => {
								setAccept(true);
								console.log("pedido aceptado: ", accept);
							}}>
							aceptar
						</button>
						<button
							type="button"
							className="btn btn-danger mx-1"
							onClick={() => {
								setAccept(false);
								console.log("pedido aceptado: ", accept);
							}}>
							rechazar
						</button>
					</div>
				</p>
			</div>
		</div>
	);
};
