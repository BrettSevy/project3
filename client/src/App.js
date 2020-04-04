import React from "react";
import "./App.css";
import Whiskeys from "./pages/Whiskeys";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
// import Main from "./components/main";
import Fight from "./pages/fight";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Bracket from "./pages/bracket/Bracket";
import Matchup from "./pages/matchup/Matchup";


//added matchup page, will need to be routed with a unique ID in each unique matchup

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/signup">
						<Signup />
					</Route>
					<Route exact path="/fight">
						{document.cookie.match(/^.*loggedIn=true.*$/) ? (
							<Fight />
						) : (
								<h1>Sign in</h1>
							)}
					</Route>
					<Route exact path="/bracket">
						<Bracket />
					</Route>
					<Route exact path="/matchup">
						<Matchup />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
