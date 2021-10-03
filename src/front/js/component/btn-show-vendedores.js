import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const BtnVendedors = () => {
	const { store, actions } = useContext(Context);
	const [puntosEntrega, setAllpuntosEntrega] = useState([{}]);

	return (
		<>
			<button
				type="button"
				className="btn btn-warning"
				style={{
					position: "absolute",
					marginLeft: "450px",
					top: "10px"
				}}
				onClick={() => {
					actions.fetchUrlVendedores();
					actions.addressToLatLong();
					//(console.log("lat", puntosEntrega[0].lat);
					//console.log("lng", puntosEntrega[0].lng);
					setAllpuntosEntrega([
						{
							name: store.allVendedores[0].name,
							lastName: store.allVendedores[0].lastName,
							initialAddress: store.allVendedores[0].initialAddress,
							lat: store.allVendedores[0].lat,
							lng: store.allVendedores[0].lng
						}
					]);
					console.log("allpuntosEntrega HOOK en btn-show-vendedores", puntosEntrega);
				}}>
				muestra vendedores
			</button>
		</>
	);
};
