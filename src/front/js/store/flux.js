const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//CAMBIAR CADA VEZ QUE TENGA SERVIDOR NUEVO

			endpoint: "https://3001-teal-horse-roe1rwgk.ws-us17.gitpod.io",

			token: null,
			message: null,
			session: null,
			local: null,
			registro: null,
			info_user: {},
			perfil: [],
			datos: [],
			mensaje: [],
			estado: null,
			sidebar: null,
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
		//datos de encomienda en formulario en sellerDetail
		encomiendaForm: [],
		//loadTransportPrices formulario (zonaA ZonaB y Precio)
		transportPrices: [],
		//estado de encomienda
		estadoEncomienda: [],

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
				localStorage.removeItem("transport");
				localStorage.removeItem("seller");
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

				fetch("https://3001-maroon-wombat-a7zqfr8t.ws-us17.gitpod.io/api/seller", requestOptions)
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
				fetch(store.endpoint + "/api/seller", requestOptions)
					.then(resp => resp.json())
					.then(data => {
						if (!localStorage.getItem("seller"))
							localStorage.setItem("seller", JSON.stringify(data.info_user));
						setStore({ info_user: JSON.parse(localStorage.getItem("seller")) });
						// setStore({ info_user: data.info_user });
						// console.log(store.info_user);
					})
					.catch(error => console.log("Error cargando datos", error));
			},

			loadtrans: () => {
				const store = getStore();
				var myHeaders = new Headers();
				myHeaders.append("Authorization", `Bearer ${store.token}`);
				myHeaders.append("Content-Type", "application/json");

				var requestOptions = {
					method: "GET",
					headers: myHeaders,

					redirect: "follow"
				};
				fetch(store.endpoint + "/api/dashTrans", requestOptions)
					.then(resp => resp.json())
					.then(data => {
						// guardar usuario transportista

						if (!localStorage.getItem("transport"))
							localStorage.setItem("transport", JSON.stringify(data.perfil));
						setStore({ perfil: JSON.parse(localStorage.getItem("transport")) });
						console.log("store.perfil ", store.perfil);
					})
					.catch(error => console.log("Error loading message from backend", error));
			},

			/////////////////////COMIENZO FUNCIONES MANDAR Y TRAER TARIFAS/////////////////////////////////////////////

			// funcion para Postear los  precios de Transportista
			PostPrices: (zone, zoneDestino, price) => {
				const store = getStore();
				const transport = JSON.parse(localStorage.getItem("transport"));
				// setStore({ transportPrices: [zone] });
				console.log("TARIFA :", zone, zoneDestino, price);

				var raw = JSON.stringify({
					price: price,
					zone: zone,
					zoneDestino: zoneDestino,
					id_transport: transport.id_transport,
					name_transport: transport.name + " " + transport.lastName
				});
				var requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: raw,
					redirect: "follow"
				};

				fetch("https://3001-jade-wildfowl-9d67vhyb.ws-us17.gitpod.io/api/tarifas", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("Ah ocurrido un error", error));
			},
			// funcion para TRAER los  precios de Transportista
			getPrices: () => {
				const store = getStore();
				fetch(store.endpoint + "/api/tarifas")
					.then(resp => resp.json())
					.then(data => setStore({ datos: data }))
					.catch(error => console.log("Error en tarifas", error));
			},

			/////////////////////COMIENZO FUNCIONES PARA REGISTRAR USUARIOS/////////////////////////////////////////////

			userSignup: (name, lastName, rut, email, phone, initialAddress, password) => {
				const store = getStore();
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

				fetch("https://3001-teal-horse-roe1rwgk.ws-us17.gitpod.io/api/register", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("Ah ocurrido un erroooooor", error));
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

				fetch("https://3001-teal-horse-roe1rwgk.ws-us17.gitpod.io/api/register2", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("Ah ocurrido un errooooor", error));
			},

			registroUserSeller: () => {
				setStore({ registro: true });
			},

			registroUserTransport: () => {
				setStore({ registro: false });
			},
			/////////////////FINALIZACIÓN FUNCIONES PARA REGISTROS DE USUARIO/////////////////////////////////////////////

			//bOLEANO INICIO DE SESSION
			iniciarsessionvendedor: () => {
				setStore({ session: true });
			},

			iniciarsessiontransportista: () => {
				setStore({ session: false });
			},

			//JUEGO DE BOLEANOS QUE RENDERIZAN COMPONENTEAS VISTA SELLER
			estadoperfilvendedor: () => {
				setStore({ estado: false });
			},

			estadoperfilpedido: () => {
				setStore({ estado: true });
			},

			//Boleano sidebar
			renderizarsidebar: () => {
				setStore({ sidebar: true });
			},

			renderizarsidebar2: () => {
				setStore({ sidebar: false });
			},

			renderizarsidebar3: () => {
				setStore({ sidebar: null });
			},

			/////////////////////COMIENZO FUNCIONES PARA MANDAR Y OBTENER LAS ENCOMIENDAS/////////////////////////////////////////////

			// getencomiendas: form => {
			// 	const store = getStore();
			// 	setStore({ encomiendaForm: [form] });
			// 	console.log("STORE => encomiendaForm: ", store.encomiendaForm);
			// },

			postEncomiendas: (
				originAddress,
				destinationAddress,
				// zone,
				// zoneDestino,
				weight,
				dimensions,
				mensaje,
				phone_seller
				// rating,
				// price
			) => {
				const store = getStore();
				// const transportt = JSON.parse(localStorage.getItem("transport"));
				const seller = JSON.parse(localStorage.getItem("seller"));
				console.log("ENCOMIENDA:");
				var raw = JSON.stringify({
					// estado: estado,
					originAddress: originAddress,
					destinationAddress: destinationAddress,
					weight: weight,
					dimensions: dimensions,
					mensaje: mensaje,
					phone_seller: phone_seller,
					id_seller: seller.id_vendor,
					name_seller: seller.name + " " + seller.lastName
					// zone: zone,
					// zoneDestino: zoneDestino,

					// id_transport: transportt.id_transport,
					// name_transport: transport2.name,
					// phone_transport: transport2.phone,

					// rating: rating,
					// price: price
				});

				var requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: raw,
					redirect: "follow"
				};

				fetch("https://3001-teal-horse-roe1rwgk.ws-us17.gitpod.io/api/encomiendas", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("ay no, no se mandó la encomiendaaa", error));
			},
			// const store = getStore();
			// console.log(
			// 	"postForm a orginAdress: ",
			// 	store.encomiendaForm[0].origin_calle +
			// 		" " +
			// 		store.encomiendaForm[0].origin_numero +
			// 		" " +
			// 		store.encomiendaForm[0].origin_comuna +
			// 		" " +
			// 		store.encomiendaForm[0].origin_cuidad
			// );
			// console.log(
			// 	"postForm a destinoAdress: ",
			// 	store.encomiendaForm[0].destino_calle +
			// 		" " +
			// 		store.encomiendaForm[0].destino_numero +
			// 		" " +
			// 		store.encomiendaForm[0].destino_comuna +
			// 		" " +
			// 		store.encomiendaForm[0].destino_cuidad
			// );
			// console.log("postForm messaje: ", store.encomiendaForm[0].mensaje);
			// console.log("postForm encomienda peso: ", store.encomiendaForm[0].encomienda_peso);
			// console.log(
			// 	"postForm encomienda volumen: ",
			// 	"alto " +
			// 		store.encomiendaForm[0].encomienda_alto +
			// 		" " +
			// 		"ancho " +
			// 		store.encomiendaForm[0].encomienda_ancho +
			// 		" " +
			// 		"largo " +
			// 		store.encomiendaForm[0].encomienda_largo
			// );
			// },

			/////////////////FINALIZACIÓN FUNCIONES PARA MANDAR Y OBTENER LAS ENCOMIENDAS/////////////////////////////////////////////

			// fetch encomiendas
			loadEncomiendas: () => {
				const store = getStore();
				fetch(store.endpoint + "/api/encomiendas")
					.then(response => response.json())
					.then(result => {
						setStore({ encomiendas: result });
						//console.log("loadEncomiendas => ", result);
						console.log("store.encomiendas => ", store.encomiendas);
					})
					.catch(error => console.log("error", error));
			},

			//
			encomiendasCoords: () => {
				const store = getStore();
				let url = "https://maps.googleapis.com/maps/api/geocode/json?address=";
				let country = "&components=country:CL";
				let googleKey = "&key=AIzaSyDdZ6PVKhfCJCw2rt23cHautMx2DONNmzk";
				console.log("store.encomiendas", store.encomiendas);
				for (let i = 0; i < store.encomiendas.length; i++) {
					console.log(
						" /////   destinationAddress en encomiendas: /////" + store.encomiendas[i].originAddress
					);
					// Remove , and " "
					let initialString = store.encomiendas[i].originAddress.replace(/ /g, "+");
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
					fetch(store.encomiendasUrl[i])
						.then(response => response.json())
						.then(result => {
							console.log(result);
							setStore({
								encomiendasCoords: [store.encomiendasCoords, result.results[0].geometry.location]
							});
							// Remove undefined values && flatten array
							var filtered = store.encomiendasCoords.filter(e => e !== undefined);
							setStore({ encomiendasCoords: filtered.flat() });
						})
						.catch(error => console.log("error", error));
					console.log("encomiendasCoords flux", store.encomiendasCoords);
				}
			},

			//Traer todos Vendedores desde nuestro api

			//loadAllVendedores: () => {
			//	const store = getStore();
			//	fetch(store.endpoint + "/api/Vendedor")
			//		.then(response => response.json())
			//		.then(result => {
			//			setStore({ allVendedores: result });
			//			console.log("*** allVendedores ***", store.allVendedores);
			//		})
			//		.catch(error => console.log("error", error));
			//},

			//funcion para convertir direccciones a LAT LNG
			addressToLatLong: () => {
				const store = getStore();
				let url = "https://maps.googleapis.com/maps/api/geocode/json?address=";
				let country = "&components=country:CL";
				let googleKey = "&key=AIzaSyDdZ6PVKhfCJCw2rt23cHautMx2DONNmzk";
				//CONCATENATE URL + ADDRESS + APIkey  TO DO GEOCODING

				for (let i = 0; i < store.encomiendas.length; i++) {
					console.log("ALL VENDEDORES DIRECCIONES: " + store.encomiendas[i].destinationAddress);
					// Remove , and " "
					let initialString = store.encomiendas[i].destinationAddress.replace(/ /g, "+");
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

			generateOrder: input => {
				const store = getStore();
				setStore({ order: input });
				console.log("STORE => Order message: ", store.order);
			},
			// estado de encomienda
			encomiendaEstado: index => {
				const store = getStore();
				setStore({ estadoEncomienda: index });
				console.log("store.estadoEncomienda: ", store.estadoEncomienda);

				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					destinationAddress: index.destinationAddress,
					dimensions: index.dimensions,
					estado: true,
					id_package: index.id_package,
					id_seller: index.id_seller,
					id_transport: index.id,
					mensaje: index.mensaje,
					name_seller: null,
					name_transport: null,
					originAddress: index.originAddress,
					phone_seller: null,
					phone_transport: null,
					price: index.price,
					rating: null,
					weight: index.weight,
					zone: null,
					zoneDestino: null
				});

				var requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://3001-teal-horse-roe1rwgk.ws-us17.gitpod.io/api/encomiendas/status/", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;
