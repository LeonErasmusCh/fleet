import React, { useContext, useState, useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker, InfoWindow } from "@react-google-maps/api";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { BtnVendedors } from "./btn-show-vendedores";

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
	const [userLat, setUserLat] = useState(null);
	const [userLng, setUserLng] = useState(null);
	const [status, setStatus] = useState(null);
	const [showVendedor, setShowVendedor] = useState([]);
	const [vendedorLat, setVendedorLat] = useState(null);
	const [vendedorLng, setVendedorLng] = useState(null);
	const [pins, setPins] = useState([]);

	useEffect(() => {
		setShowVendedor(store.allVendedores);
		console.log("On page load --> showVendedor", showVendedor);
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
						{store.vendedores.map((person, position) => {
							return (
								<Marker
									key={position}
									position={{ lat: person.lat, lng: person.lng }}
									icon={{
										url: require("../../img/box-icon.png")
									}}
									onClick={() => {
										alert("Cliente " + person.name);
									}}
								/>
							);
						})}

						{/* button for user position */}
						<button
							className="btn btn-success"
							style={{
								position: "absolute",
								marginLeft: "250px",
								top: "10px"
							}}
							onClick={() => {
								getUserLocation();
								console.log("User Status", status);
								console.log("User lat", userLat);
								console.log("User lng", userLng);
							}}>
							mi ubicación actual
						</button>
						{/*  El Marker abajo se pinta despues el onClick en boton "mi ubicacion", para pintar ubicacion del USARIO*/}
						<Marker position={{ lat: userLat, lng: userLng }} />

						{/* button for VENDEDOR position */}
						<button
							className="btn btn-success"
							style={{
								position: "absolute",
								marginLeft: "250px",
								top: "50px"
							}}
							onClick={() => {
								console.log("hellooooooooo");
								setVendedorLat(showVendedor[0].lat);
								setVendedorLng(showVendedor[0].lng);
								console.log(vendedorLat);
								console.log(vendedorLng);
								for (let i = 0; i < showVendedor.length; i++) {
									//<Marker position={{ lat: showVendedor[i].lat, lng: showVendedor[i].lng }} />;
									console.log("all venderssss", showVendedor[i].lat, showVendedor[i].lng);
									setPins([showVendedor[i].lat, showVendedor[i].lng]);
								}
							}}>
							Vendedor
						</button>
						{/*  El Marker para VENDEDOR*/}
						<Marker
							position={{ lat: vendedorLat, lng: vendedorLng }}
							icon={{
								url: require("../../img/box-icon.png")
							}}
						/>

						<BtnVendedors />
						{/*  Mostrar vendedores
						<Marker position={{ lat: store.test.lat, lng: store.test.lng }} />  */}

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
