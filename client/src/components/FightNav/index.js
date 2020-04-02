import React from "react";

function FightNav() {
	function Logout() {
		document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
	}

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
							<a
								onClick={Logout}
								className="nav-item nav-link "
								href="/"
							>
								Logout
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default FightNav;
