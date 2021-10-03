import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Map } from "../component/map";
import { LeftSidebar } from "../component/left-sidebar";

export const DeliveryMap = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="margin">
			<Map />
		</div>
	);
};
