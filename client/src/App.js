import React from "react";
import "./App.css";
import Whiskeys from "./pages/Whiskeys";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
// import Main from "./components/main";
import Fight from "./pages/Fight";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

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
						<Fight />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
