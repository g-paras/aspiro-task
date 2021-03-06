import React from 'react';
import './Header.css';


export default function Header() {
	return (
		<nav className="navbar navbar-expand-lg ">
			<div className="container-fluid">
				<b><a className="navbar-brand" href="#jadoo" style={{ fontSize: "2em", marginLeft: "50px" }}>Jadoo</a></b>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav">
						<a class="nav-link" aria-current="page" href="#destinations">Destinations</a>
						<a class="nav-link" href="#hotels">Hotels</a>
						<a class="nav-link" href="#flights">Flights</a>
						<a class="nav-link" href="#bookings">Bookings</a>
						<button type="button" class="btn btn-light">Login</button>
						<button type="button" class="btn btn-light">Signup</button>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#en" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								EN
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a className="dropdown-item" href="#english">English </a></li>
								<li><a className="dropdown-item" href="#hindi">Hindi</a></li>
							</ul>
						</li>
					</div>
				</div>
			</div>
		</nav>
	);
}

