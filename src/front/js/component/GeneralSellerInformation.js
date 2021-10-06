import React from "react";
import { Dispatchstatus } from "./dispatchstatus";
import { Dispatchinroute } from "./dispatchinroute";
import { Dispatchpendings } from "./dispatchpendings";

export const GeneralSellerInformation = () => {
	return (
		<div className="container-fluid">
			<Dispatchstatus />
			<Dispatchinroute />
			<Dispatchpendings />
		</div>
	);
};
