import React, { useContext, useState, useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker, InfoWindow } from "@react-google-maps/api";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

/* Tamaño del mapa */
const containerStyle = {
	width: "90vw",
	height: "40vw",
	margin: "80px auto"
};

/* Aqui centramos el mapa -- lat: -33.4369,
    lng: -70.6344 ES PARA PLAZA ITALIA */
const center = {
	lat: -33.4369,
	lng: -70.6344
};

export const Map = () => {
	const { store, actions } = useContext(Context);
	// USER LOCATION
	const [userLat, setUserLat] = useState(null);
	const [userLng, setUserLng] = useState(null);
	const [status, setStatus] = useState(null);

	// VENDEDOR LOCATION
	const [googlecoords, setGooglecoords] = useState([]);
	// ENCOMIENDA LOCATION
	const [encomiendacoords, setEncomiendascoords] = useState([]);

	useEffect(() => {
		setGooglecoords(store.test);
		console.log("googlecoords", googlecoords);
	});
	useEffect(() => {
		setEncomiendascoords(store.encomiendasCoords);
		console.log("encomiendacoords", encomiendacoords);
	});

	const getUserLocation = () => {
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
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
				{/* Child components, such as markers, info windows, etc. */}
				<>
					{/* Markers son los pins en el mapa */}

					<div>
						{/* button for user position */}
						<button
							className="btn btn-success"
							style={{
								position: "absolute",
								marginLeft: "200px",
								top: "10px"
							}}
							onClick={() => {
								getUserLocation();
								console.log("User Status", status);
								console.log("User lat", userLat);
								console.log("User lng", userLng);
							}}>
							<span>
								<i className="fas fa-location-arrow mx-1" />
							</span>
						</button>
						{/*  El Marker abajo se pinta despues el onClick en boton "mi ubicacion", para pintar ubicacion del USARIO*/}
						<Marker position={{ lat: userLat, lng: userLng }} />

						{/* button for VENDEDOR position */}
						<button
							className="btn btn-success"
							style={{
								position: "absolute",
								marginLeft: "260px",
								top: "10px"
							}}
							onClick={() => {
								actions.addressToLatLong();
								actions.fetchUrlVendedores();
							}}>
							<span>
								<i className="fas fa-box-open mx-2" />
							</span>
						</button>
						{/* button for ENCOMIENDAS position */}
						<button
							className="btn btn-success"
							style={{
								position: "absolute",
								marginLeft: "330px",
								top: "10px"
							}}
							onClick={() => {
								actions.encomiendasCoords();
								actions.fetchUrlEncomiendas();
							}}>
							<span>
								<i className="fas fa-home mx-2" />
							</span>
						</button>

						{/* Encomieda (puntos de retiro) Markers */}
						{encomiendacoords
							? encomiendacoords.map((index, key) => {
									console.log("helloooooo encomiendacoords", index);
									return (
										<Marker
											key={{ key }}
											position={{ lat: index.lat, lng: index.lng }}
											icon={{
												url: require("../../img/destination.png")
											}}
										/>
									);
							  })
							: console.log("allgoogle coords undefined")}
						{/* Vendedor Markers */}
						{googlecoords
							? googlecoords.map((index, key) => {
									console.log("helloooooo googlecoords", index);
									return (
										<Marker
											key={{ key }}
											position={{ lat: index.lat, lng: index.lng }}
											icon={{
												url: require("../../img/box-icon.png")
											}}
										/>
									);
							  })
							: console.log("allgoogle coords undefined")}
					</div>
				</>
			</GoogleMap>
		</LoadScript>
	);
};
