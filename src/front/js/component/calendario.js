import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const Calendario = () => {
	const { store, actions } = useContext(Context);

	const [value, onChange] = useState(new Date());

	return (
		<div>
			<Calendar onChange={onChange} value={value} />
		</div>
	);
};
