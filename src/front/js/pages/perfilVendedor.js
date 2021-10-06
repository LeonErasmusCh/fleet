import React, { useState, useEffect, useContext } from "react";
import heroImg from "../../img/heroImg.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Pedido } from "../component/order";

export const PerfilVendedor = () => {
	return (
		<div>
			<Pedido />
		</div>
	);
};
