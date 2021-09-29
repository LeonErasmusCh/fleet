import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { HeroSection } from "../component/landing-hero";
import { TeamMembers } from "../component/about-us";
import { Contacts } from "../component/contacts";
import { FrequentlyAsked } from "../component/frequently-asked";
import { Allseller } from "../component/allseller";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<HeroSection />
			<div className="row">
				<TeamMembers />
				<TeamMembers />
				<TeamMembers />
				<TeamMembers />
				<TeamMembers />
			</div>

			<Contacts />
			<FrequentlyAsked />
			<Allseller />
		</div>
	);
};
