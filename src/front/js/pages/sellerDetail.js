import React from "react";
import { Link, useParams } from "react-router-dom";
import { LeftSidebar } from "../component/left-sidebar";
import { ReceiveMessage } from "../component/receiveMessage";

export const SellerDetail = () => {
	return (
		<>
			<LeftSidebar />
			<ReceiveMessage />
		</>
	);
};
