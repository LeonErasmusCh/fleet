import React from "react";

export const Contacts = () => {
	return (
		<div id="contacts" className="p-5 bg-light">
			<div className="container p-5">
				<h1 className="text-center p-3 m-5 text-secondary">Contactanos</h1>
				<form>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Correo</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="johndoe@gmail.com"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlTextarea1">Mensaje...</label>
						<textarea
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="7"
							placeholder="Hola, necesito ...."
						/>
					</div>

					<button type="submit" className="btn btn-primary">
						Enviar
					</button>
				</form>
			</div>
		</div>
	);
};
