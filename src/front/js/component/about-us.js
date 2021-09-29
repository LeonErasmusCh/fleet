import React from "react";

export const TeamMembers = () => {
	return (
		<div id="who-we-are" className="m-3 col-3 ">
			<h1 className="text-center p-3">Quienes somos</h1>
			<div className="row d-flex justify-content-around">
				<img src="rigo-baby.jpg" alt="..." className="rounded-circle img-thumbnail m-3" />
				<h5>Hola! Soy ...</h5>
				<p>Fullstack developer 4Geeks...</p>
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
					massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus
				</p>
			</div>
		</div>
	);
};
