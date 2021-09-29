import React, { useContext, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker, InfoWindow } from "@react-google-maps/api";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

/* Tamaño del mapa */
const containerStyle = {
	width: "70vw",
	height: "60vh"
};

/* Aqui centramos el mapa -- lat: -33.4369,
	lng: -70.6344 ES PARA PLAZA ITALIA */
const center = {
	lat: -33.4369,
	lng: -70.6344
};

export const Map = () => {
	const { store, actions } = useContext(Context);
	const [userLat, setUserLat] = useState(null);
	const [userLng, setUserLng] = useState(null);
	const [status, setStatus] = useState(null);

	const getLocation = () => {
		if (!navigator.geolocation) {
			setStatus("Geolocation is not supported by your browser");
		} else {
			setStatus("Locating...");
			navigator.geolocation.getCurrentPosition(
				position => {
					setStatus();
					setUserLat(position.coords.latitude);
					setUserLng(position.coords.longitude);
				},
				() => {
					setStatus("Unable to retrieve your location");
				}
			);
		}
	};

	return (
		<LoadScript googleMapsApiKey="AIzaSyB1GucpRkmWB21geTiUfWGORwEt1E3utC0">
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
				{/* Child components, such as markers, info windows, etc. */}
				<>
					{/* Markers son los pins en el mapa */}

					<div>
						{store.vendedores.map((person, position) => {
							return (
								<Marker
									key={position}
									position={{ lat: person.lat, lng: person.lng }}
									icon={{
										url: require("../../img/box-icon.png")
									}}
									onClick={() => {
										alert("Cliente " + person.name + " esta en punto de retiro " + person.address);
										actions.addressToLatLong();
									}}
								/>
							);
						})}

						{/* button for user position */}
						<button
							className="btn btn-success"
							style={{
								position: "absolute",
								marginLeft: "10px",
								bottom: "10px"
							}}
							onClick={() => {
								getLocation();
								console.log("User Status", status);
								console.log("User lat", userLat);
								console.log("User lng", userLng);
							}}>
							mi ubicación actual
						</button>
						{/*  El Merker abajo se pinta despues el onClick en boton "mi ubicacion", para pintar ubicacion del USARIO*/}
						<Marker position={{ lat: userLat, lng: userLng }} />

						{store.puntosDeEntrega.map((person, position) => {
							return (
								<Marker
									key={position}
									position={{ lat: person.lat, lng: person.lng }}
									icon={{
										url: require("../../img/destination.png")
									}}
									onClick={() => {
										alert("Nombre: " + person.name + "  " + " Punto de entrega: " + person.address);
									}}
								/>
							);
						})}
					</div>
				</>
			</GoogleMap>
		</LoadScript>
	);
};

export const Maplist = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{store.vendedores.map((person, position) => {
				return (
					<div className="container mt-2 col-6 mx-auto" key={position}>
						<ul className="list-group">
							<li className="list-group-item">
								Nombre: <strong>{person.name}</strong>
								<p>
									Punto de Inicio:
									<strong>{person.address}</strong>
								</p>
								<p>
									Zona:
									<strong>{person.zone}</strong>
								</p>
								<h5>
									punto de retiro <span className="text-success">confirmado</span>
								</h5>
							</li>
						</ul>
					</div>
				);
			})}
		</div>
	);
};
