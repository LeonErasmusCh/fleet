import React, { useContext, useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
export const SellerMessage = props => {
	const [sellerText, setSellerText] = useState("");
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			console.log(sellerText);
		},
		[sellerText]
	);

	return (
		<>
			<div className="">
				<label htmlFor="inputPassword3" className="col-sm-3 col-form-label">
					Solicitar Despacho
				</label>
				<div className="col-sm-9">
					<textarea
						className="form-control"
						placeholder="Ingresa: Cantidad de envíos, dimensión, peso, dirección, comuna y día deseados, para que el repartidor seleccionado pueda aceptar tu solicitud."
						id="floatingTextarea2"
						style={{ height: "120px", color: "rgb(24, 24, 24)" }}
						onChange={e => {
							e.preventDefault();
							setSellerText(e.target.value);
						}}
					/>
					{/* value=
					{sellerText} */}
					<button
						type="submit"
						className="btn btn-primary"
						onClick={() => {
							actions.getMessage(sellerText, props.datosVendedor);
							console.log("Variable input: ", sellerText);
							console.log("datos Vendedor: ", props.datosVendedor);
						}}>
						Enviar Solicitud
					</button>
				</div>
			</div>
		</>
	);
};
SellerMessage.propTypes = {
	datosVendedor: PropTypes.object
};
