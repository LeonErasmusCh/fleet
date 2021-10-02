import React from "react";
import { Sidebar } from "../component/sidebar";
import { SellerMessage } from "../component/sellerMessage";
import { Link, useParams } from "react-router-dom";

export const TransportDetail = () => {
	return (
		<div className="container-fluid row">
			<div className="col col-2">
				<Sidebar />
			</div>
			<div className="col col-10 mt-5">
				<SellerMessage />
			</div>
			<Link to="/">
				<button>Go back</button>
			</Link>
		</div>
	);
};
