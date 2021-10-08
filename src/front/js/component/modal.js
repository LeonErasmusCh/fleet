import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { SellerMessage } from "../component/sellerMessage";
import PropTypes from "prop-types";

export const ModalExample = props => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div>
			<Button color="danger" onClick={toggle}>
				Solicitar
			</Button>
			<Modal isOpen={modal} fade={false} toggle={toggle}>
				<ModalHeader toggle={toggle}>Modal title</ModalHeader>
				<ModalBody>
					<SellerMessage datosVendedor={props.datosVendedor} />
				</ModalBody>
			</Modal>
		</div>
	);
};
ModalExample.propTypes = {
	datosVendedor: PropTypes.object
};
