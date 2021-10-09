const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//CAMBIAR CADA VEZ QUE TENGA SERVIDOR NUEVO

			endpoint: "https://3001-aqua-alpaca-w869zgjl.ws-us18.gitpod.io",


			token: null,
			message: null,
			session: null,
			registro: null,
			info_user: {},
			info_user2: [],
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

			solicitud: [],
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
		//probando lat lng (POR AHORA USAMOS test para los pins de vendedores)
		test: [],
		//probando lat lng (POR AHORA USAMOS test para los pins de vendedores)
		encomiendas: [],
		encomiendasUrl: [],
		encomiendasCoords: [],

		//generar pedido desde componente ORDER
		order: [],

		actions: {
			//FUNCION PARA MANTENER TOKEN OPERATIVO
			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token");
				console.log("aplication just loaded");
				if (token && token != "" && token != undefined) setStore({ token: token });
			},
			//login con metodo POST para vendedores
			login: async (mail, password) => {
				const store = getStore();
				console.log("mail", mail);
				console.log("password", password);

				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: mail,
					password: password
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				try {
					const response = await fetch(store.endpoint + "/api/Vendedor", requestOptions);
					if (response.status !== 200) {
						alert("There has been an error");
						return false;
					}

					const data = await response.json();
					console.log("this came from the backend", data);
					sessionStorage.setItem("token", data.token);
					setStore({ token: data.token });
					return true;
				} catch (error) {
					console.log("there was en error", error);
				}
			},

			//LOGIN PARA TRANSPORTISTAS
			login2: async (mail, password) => {
				const store = getStore();
				console.log("mail", mail);
				console.log("password", password);

				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: mail,
					password: password
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				try {
					const response = await fetch(store.endpoint + "/api/Transportista", requestOptions);
					if (response.status !== 200) {
						alert("There has been an error");
						return false;
					}

					const data = await response.json();
					console.log("this came from the backend", data);
					sessionStorage.setItem("token", data.token);

					setStore({ token: data.token });
					return true;
				} catch (error) {
					console.log("there was en error", error);
				}
			},
			//LOG OUT PARA AMBOS (SE LLAMA EN NAVBARSELL)
			logout: () => {
				sessionStorage.removeItem("token");
				console.log("login out"), setStore({ token: null });
			},
			//funciones para el boleano de los inicios de sesion
			iniciarsessionvendedor: () => {
				setStore({ session: true });
			},

			iniciarsessiontransportista: () => {
				setStore({ session: false });
			},

			//FUNCION PARA RUTA PRIVADA Y LLAMAR DATOS DEL PERFIL
			/*traerusuario: () => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch("https://3001-maroon-wombat-a7zqfr8t.ws-us18.gitpod.io/api/seller", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ info_user: result.info_user }))
					.catch(error => console.log("error", error));
			},*/

			traerusuario: () => {
				const store = getStore();
				var myHeaders = new Headers();
				myHeaders.append("Authorization", `Bearer ${store.token}`);
				myHeaders.append("Content-Type", "application/json");

				var requestOptions = {
					method: "GET",
					headers: myHeaders,

					redirect: "follow"
				};
				/*
				const opts = {
					headers: {
						Authorization: `Bearer ${store.token}`
					}
				};*/
				fetch(store.endpoint + "/api/seller", requestOptions)
					.then(resp => resp.json())
					.then(data => {
						setStore({ info_user: data.info_user });
						console.log(store.info_user);
					})
					.catch(error => console.log("Error loading message from backend", error));
			},

			traerusuariotrans: () => {
				const store = getStore();
				console.log(store.token);
				const opts = {
					headers: {
						Authorization: "Bearer " + store.token
					}
				};
				fetch(store.endpoint + "/api/DashTransport", opts)
					.then(resp => resp.json())
					.then(data => setStore({ info_user: data }))
					.catch(error => console.log("Error loading message from backend", error));
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			userSignup: (name, lastName, rut, email, phone, initialAddress, password) => {
				console.log("password", password);

				var raw = JSON.stringify({
					name: name,
					lastName: lastName,
					rut: rut,
					email: email,
					phone: phone,
					initialAddress: initialAddress,
					password: password
				});

				var requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: raw,
					redirect: "follow"
				};

				fetch("https://3001-aqua-alpaca-w869zgjl.ws-us18.gitpod.io/api/register", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("Ah ocurrido un error", error));
			},
			userSignup2: (name, lastName, rut, email, phone, transAddress, password) => {
				console.log("password", password);

				var raw = JSON.stringify({
					name: name,
					lastName: lastName,
					rut: rut,
					email: email,
					phone: phone,
					transAddress: transAddress,
					password: password
				});

				var requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: raw,
					redirect: "follow"
				};

				fetch("https://3001-aqua-alpaca-w869zgjl.ws-us18.gitpod.io/api/register2", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("Ah ocurrido un error", error));
			},

			registroUserSeller: () => {
				setStore({ registro: true });
			},

			registroUserTransport: () => {
				setStore({ registro: false });
			},

			/*getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},*/

			// getMessage: () => {
			// 	// fetching data from the backend
			// 	fetch(process.env.BACKEND_URL + "/api/hello")
			// 		.then(resp => resp.json())
			// 		.then(data => setStore({ message: data.message }))
			// 		.catch(error => console.log("Error loading message from backend", error));
			// },

			getMessage: (message, datosVendedor) => {
				const store = getStore();
				/*
				aca iria el fetch tipo post a la api haciendo una solicitud
				*/
			},

			//Funcion llamar usuarios, (API FAKE)
			/*loadSeller: () => {
				const store = getStore();
				fetch("https://jsonplaceholder.typicode.com/users")
					.then(response => response.json())
					.then(result => {
						setStore({ seller: result });
						//console.log(store.seller);
					})
					.catch(error => console.log("error", error));
			},*/

			//Funcion llamar detalle de usuarios (API FAKE)
			/*loadDetailseller: id => {
				const store = getStore();
				fetch("https://jsonplaceholder.typicode.com/users/" + id)
					.then(response => response.json())
					.then(result => {
						setStore({ detailseller: result });
						//console.log("ddetailseller", store.detailseller);
					})
					.catch(error => console.log("error", error));
			},*/

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
				fetch(store.endpoint + "/api/Vendedor")
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
				let url = "https://maps.googleapis.com/maps/api/geocode/json?address=";
				let country = "&components=country:CL";
				let googleKey = "&key=AIzaSyB1GucpRkmWB21geTiUfWGORwEt1E3utC0";
				//CONCATENATE URL + ADDRESS + APIkey  TO DO GEOCODING

				for (let i = 0; i < store.allVendedores.length; i++) {
					console.log("ALL VENDEDORES DIRECCIONES: " + store.allVendedores[i].initialAddress);
					// Remove , and " "
					let initialString = store.allVendedores[i].initialAddress.replace(/ /g, "+");
					let concatString = initialString.replace(/,/g, "");
					//console.log(concatString);
					// Concatenate
					let geoCoded = url + concatString + country + googleKey;
					console.log("geoCoded url:" + geoCoded);
					// Save in store
					setStore({ geocodedVendedores_url: [store.geocodedVendedores_url, geoCoded] });
					// Remove undefined values && flatten array
					var filtered = store.geocodedVendedores_url.filter(e => e !== undefined);
					setStore({ geocodedVendedores_url: filtered.flat() });
					console.log("store.geocodedVendedores_url Array", store.geocodedVendedores_url);
				}
			},

			fetchUrlVendedores: () => {
				const store = getStore();
				for (let i = 0; i < store.geocodedVendedores_url.length; i++) {
					console.log("fetch url-->", store.geocodedVendedores_url[i]);
					fetch(store.geocodedVendedores_url[i])
						.then(response => response.json())
						.then(result => {
							//setStore({ vendedoresLatLng: result.results[0].geometry.location });
							setStore({ test: [store.test, result.results[0].geometry.location] });
							// Remove undefined values && flatten array
							var filtered = store.test.filter(e => e !== undefined);
							setStore({ test: filtered.flat() });
						})
						.catch(error => console.log("error", error));
					//console.log("Nombre: ", store.allVendedores[0].name);
					//console.log("Fetch de geocode url para cada allVendedores array", store.allVendedores);
					console.log("test", store.test);
				}
			},

			// fetch encomiendas
			loadEncomiendas: () => {
				const store = getStore();
				fetch(store.endpoint + "/api/encomiendas")
					.then(response => response.json())
					.then(result => {
						setStore({ encomiendas: result });
						console.log("loadEncomiendas => ", result);
						console.log("store.encomiendas => ", store.encomiendas);
					})
					.catch(error => console.log("error", error));
			},

			//
			encomiendasCoords: () => {
				const store = getStore();
				let url = "https://maps.googleapis.com/maps/api/geocode/json?address=";
				let country = "&components=country:CL";
				let googleKey = "&key=AIzaSyB1GucpRkmWB21geTiUfWGORwEt1E3utC0";

				for (let i = 0; i < store.encomiendas.length; i++) {
					console.log("destinationAddress en encomiendas: " + store.encomiendas[i].destinationAddress);
					// Remove , and " "
					let initialString = store.encomiendas[i].destinationAddress.replace(/ /g, "+");
					let concatString = initialString.replace(/,/g, "");
					//console.log(concatString);
					// Concatenate
					let geoCoded = url + concatString + country + googleKey;
					console.log("geoCoded url encomiendas:" + geoCoded);
					// Save in store
					setStore({ encomiendasUrl: [store.encomiendasUrl, geoCoded] });
					// Remove undefined values && flatten array
					var filtered = store.encomiendasUrl.filter(e => e !== undefined);
					setStore({ encomiendasUrl: filtered.flat() });
					console.log("store.encomiendasUrl Array", store.encomiendasUrl);
				}
			},

			fetchUrlEncomiendas: () => {
				const store = getStore();
				for (let i = 0; i < store.encomiendasUrl.length; i++) {
					console.log("fetch url encomiendas-->", store.encomiendasUrl[i]);
					fetch(store.encomiendasUrl, [i])
						.then(response => response.json())
						.then(result => {
							setStore({
								encomiendasCoords: [store.encomiendasCoords, result.results[0].geometry.location]
							});
							// Remove undefined values && flatten array
							var filtered = store.encomiendasCoords.filter(e => e !== undefined);
							setStore({ encomiendasCoords: filtered.flat() });
						})
						.catch(error => console.log("error", error));
					console.log("encomiendasCoords", store.encomiendasCoords);
				}
			},

			generateOrder: input => {
				const store = getStore();
				setStore({ order: input });
				console.log("STORE => Order message: ", store.order);
			}
		}
	};
};

export default getState;
