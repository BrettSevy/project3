import React from "react";
import "../HomeNav/homenav.css";
/* NavBar -> login, signup or go to current tournament */

function HomeNav() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg">
				<div className="container">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a className="nav-item nav-link" href="/fight">
								Tournament
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-item nav-link" href="/signup">
								Signup
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default HomeNav;
