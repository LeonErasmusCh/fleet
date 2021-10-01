const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			seller: [],
			detailseller: [],
			vendedores: [
				{
					name: "John Doe",
					address: "Parque Arauco",
					lat: -33.4022,
					lng: -70.5782,
					zone: "Norte"
				},
				{
					name: "Juan Pablo",
					address: "Parque Bicentinario",
					lat: -33.3986,
					lng: -70.6025,
					zone: "Centro"
				},
				{
					name: "Cabeza Papa",
					address: "Parque Forestal",
					lat: -33.4357,
					lng: -70.6413,
					zone: "Sur"
				},
				{
					name: "Karina Rubio",
					address: "Costanera Center",
					lat: -33.418,
					lng: -70.6064,
					zone: "Norte"
				}
			],
			puntosDeEntrega: [
				{
					name: "Raul Perez",
					address: "Portal La Reina",
					lat: -33.428,
					lng: -70.541,
					zone: "Norte"
				},
				{
					name: "Paula Daza",
					address: "La Moneda",
					lat: -33.4429,
					lng: -70.6539,
					zone: "Centro"
				},
				{
					name: "Camila Soto",
					address: "Estacion Central",
					lat: -33.4619,
					lng: -70.6985,
					zone: "Centro"
				}
			]
		},
		//Vendedores desde api, direccion sin geocode
		allVendedores: [],
		//Url en formato google para traer lat: lng: de google api
		geocodedVendedores_url: [],
		// Lat: lng: de cada usario para pintar markers en map
		vendedoresLatLng: [],
		//probando lat lng
		test: [],

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},

			//Funcion llamar usuarios, (API FAKE)
			loadSeller: () => {
				const store = getStore();
				fetch("https://jsonplaceholder.typicode.com/users")
					.then(response => response.json())
					.then(result => {
						setStore({ seller: result });
						//console.log(store.seller);
					})
					.catch(error => console.log("error", error));
			},

			//Funcion llamar detalle de usuarios (API FAKE)
			loadDetailseller: id => {
				const store = getStore();
				fetch("https://jsonplaceholder.typicode.com/users/" + id)
					.then(response => response.json())
					.then(result => {
						setStore({ detailseller: result });
						//console.log("ddetailseller", store.detailseller);
					})
					.catch(error => console.log("error", error));
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			//Traer todos Vendedores desde nuestro api
			loadAllVendedores: () => {
				const store = getStore();
				fetch("https://3001-green-reptile-8ag6a3rx.ws-us18.gitpod.io/api/perfilTransportista")
					.then(response => response.json())
					.then(result => {
						setStore({ allVendedores: result });
						console.log("*** allVendedores ***", store.allVendedores);
					})
					.catch(error => console.log("error", error));
			},
			//funcion para convertir direccciones a LAT LNG
			addressToLatLong: () => {
				const store = getStore();
				let url = "https://maps.googleapis.com/maps/api/geocode/json?";
				let country = "&components=country:CL";
				let googleKey = "&key=AIzaSyB1GucpRkmWB21geTiUfWGORwEt1E3utC0";
				//CONCATENATE URL + ADDRESS + APIkey  TO DO GEOCODING
				let address;
				for (address = 0; address < store.allVendedores.length; address++) {
					console.log("ALL VENDEDORES DIRECCIONES: " + store.allVendedores[address].transAddress);
					// Remove , and " "
					let initialString = store.allVendedores[address].transAddress.replace(/ /g, "+");
					let concatString = initialString.replace(/,/g, "");
					//console.log(concatString);
					// Concatenate
					let geoCoded = url + concatString + country + googleKey;
					//console.log("geoCoded url:" + geoCoded);
					// Save in store
					setStore({ geocodedVendedores_url: geoCoded });
					console.log(store.geocodedVendedores_url);
				}
			},

			fetchUrlVendedores: () => {
				const store = getStore();
				fetch(store.geocodedVendedores_url)
					.then(response => response.json())
					.then(result => {
						setStore({ vendedoresLatLng: result.results[0] });
						setStore({ test: result.results[0].geometry.location });
					})
					.catch(error => console.log("error", error));
				console.log("Fetch de geocode url para cada vendedor", store.vendedoresLatLng);
				console.log("test", store.test);
			}
		}
	};
};

export default getState;
