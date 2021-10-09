import React from "react";
import "../../styles/home.scss";

export const OtherSidebar = () => {
	return (
		<div>
			<nav className="navbar navbar-inverse navbar-global navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						<button
							type="button"
							className="navbar-toggle collapsed"
							data-toggle="collapse"
							data-target="#navbar"
							aria-expanded="false"
							aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar" />
							<span className="icon-bar" />
							<span className="icon-bar" />
						</button>
						<a className="navbar-brand" href="#">
							Santhosh Vertical Nav Project
						</a>
					</div>
					<div id="navbar" className="collapse navbar-collapse">
						<ul className="nav navbar-nav navbar-user navbar-right">
							<li>
								<a href="#">
									<span className="glyphicon glyphicon-user" /> Santhosh Giridara
								</a>
							</li>
							<li>
								<a href="#about">
									<span className="glyphicon glyphicon-log-out" /> Logout
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<nav className="navbar-primary">
				<a href="#" className="btn-expand-collapse">
					<span className="glyphicon glyphicon-menu-left" />
				</a>
				<ul className="navbar-primary-menu">
					<li>
						<a href="#">
							<span className="glyphicon glyphicon-list-alt" />
							<span className="nav-label">Dashboard</span>
						</a>
						<a href="#">
							<span className="glyphicon glyphicon-envelope" />
							<span className="nav-label">Profile</span>
						</a>
						<a href="#">
							<span className="glyphicon glyphicon-cog" />
							<span className="nav-label">Settings</span>
						</a>
						<a href="#">
							<span className="glyphicon glyphicon-film" />
							<span className="nav-label">Notification</span>
						</a>
						<a href="#">
							<span className="glyphicon glyphicon-calendar" />
							<span className="nav-label">Monitor</span>
						</a>
					</li>
				</ul>
			</nav>
			<div className="main-content">
				<h1> I am the main content </h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem sint assumenda quae aliquid
					voluptatibus quia, ea, ad natus magni repellat earum, culpa iure tempore. Enim dolor eaque minima
					voluptas ducimus?
				</p>
			</div>
		</div>
	);
};
