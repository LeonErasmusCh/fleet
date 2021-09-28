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
						console.log(store.seller);
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
						console.log("ddetailseller", store.detailseller);
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
			}
		}
	};
};

export default getState;
