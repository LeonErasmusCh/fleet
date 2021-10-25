import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { SellerMessage } from "../component/sellerMessage";
import PropTypes from "prop-types";
import { SellerDetailComponent } from "./sellerdetailcomponent";
import "../../styles/home.scss";

export const ModalExample = props => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div>
			<Button color="danger" onClick={toggle}>
				Solicitar
			</Button>

			<Modal isOpen={modal} fade={false} toggle={toggle} size="lg">
				<div
					style={{
						display: "block",
						width: 700,
						padding: 30
					}}
				/>
				<ModalHeader toggle={toggle}>Solicitud pedido</ModalHeader>
				<ModalBody size="lg">
					<Map/>
				</ModalBody>
			</Modal>
		</div>
	);
};
ModalExample.propTypes = {
	datosVendedor: PropTypes.object,
	size: PropTypes.string
};
