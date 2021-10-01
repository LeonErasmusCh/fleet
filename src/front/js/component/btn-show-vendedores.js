import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const BtnVendedors = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<button
				type="button"
				className="btn btn-warning"
				style={{
					position: "absolute",
					marginLeft: "200px",
					bottom: "10px"
				}}
				onClick={() => {
					actions.addressToLatLong();
					actions.fetchUrlVendedores();
				}}>
				muestra vendedores
			</button>
		</>
	);
};
