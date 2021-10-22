import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { TransportDetail } from "./pages/transportDetail";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Seller } from "./pages/seller";
import { DeliveryMap } from "./pages/delivery-map";
import { DashTrans } from "./pages/DashTrans";
import { NavbarDelivery } from "./component/navbar-delivery";
import { NavbarSell } from "./component/ navbarSell";
import { Sidebar } from "./component/sidebar";
import { SellerDetail } from "./pages/sellerDetail";
import { NEWSidebar } from "./component/NewSidebar";
import { Calendario } from "./component/calendario";

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
							<Footer />
						</Route>

						<Route exact path="/seller">
							<NavbarSell />

							<Seller />
							<Footer />
						</Route>
						<Route exact path="/transportdetail">
							<TransportDetail />
						</Route>

						<Route exact path="/sellerdetail">
							<NavbarSell />
							<SellerDetail />
						</Route>
						<Route exact path="/calendario">
							<Calendario />
						</Route>

						<Route exact path="/map">
							{/*<NavbarDelivery />*/}
							<DeliveryMap />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/DashTrans">
							<NavbarSell />
							<DashTrans />
						</Route>
						<Route exact path="/signup">
							<Signup />
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
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
