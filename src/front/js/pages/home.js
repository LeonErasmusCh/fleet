import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { HeroSection } from "../component/landing-hero";
import { TeamMembers } from "../component/about-us";
import { Contacts } from "../component/contacts";
import { FrequentlyAsked } from "../component/frequently-asked";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<HeroSection />
			<FrequentlyAsked />
			<Contacts />

			<h2 className="text-center text-secondary m-5">Quienes Somos</h2>
			<div className="container">
				<div className="row d-flex justify-content-around ">
					<TeamMembers name=" Constanza" />
					<TeamMembers name=" Leon" />
					<TeamMembers name=" Alondra" />
					<TeamMembers name=" Sebastian" />
					<TeamMembers name=" Renato" />
				</div>
			</div>
		</div>
	);
};
