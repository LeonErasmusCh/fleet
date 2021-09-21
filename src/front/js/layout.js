import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Login } from "./pages/login";
import { Signin } from "./pages/signin";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Test } from "./pages/test";
import { RepartidorMapa } from "./pages/vista-reparto-mapa";
import { DashTrans } from "./pages/DashTrans";
import { NavbarRepartidor } from "./component/navbar-repartidor";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Navbar />
							<Home />
						</Route>
						<Route exact path="/test">
							<Test />
						</Route>
						<Route exact path="/map">
							<NavbarRepartidor />
							<RepartidorMapa />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/DashTransport">
							<DashTrans />
						</Route>
						<Route exact path="/signin">
							<Signin />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
