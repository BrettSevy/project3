import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function Signup() {
	const [formObject, setFormObject] = useState({});
	function handleInputChange(event) {
		const { name, value } = event.target;
		setFormObject({ ...formObject, [name]: value });
	}
	function handleFormSubmit(event) {
		event.preventDefault();
		if (formObject.email && formObject.password) {
			const data = formObject;
			//Using Concurrently to run react server and server.js server on different ports, then trying to send
			//Fetch post to the backend server. Problem would be solved if there were an easy way to run both the
			//React server and backend server on the same port, or make them the same server so the route in server.js
			//can be caught.
			//WHen running front end, back-end wasn't running, so just using fetch on /api/registration did not work.
			//Attempted to run both servers and send to another localhost, except fetch didn't like that

			API.newUser(data)
				.then(response => {
					console.log("Success:", response);
					console.log(response.data);
				})
				.catch(error => {
					console.error("Error:", error);
				});
		}
	}
	return (
		<div className="container">
			<form>
				<h3>Sign Up</h3>

				<div className="form-group">
					<label>First name</label>
					<input
						type="text"
						onChange={handleInputChange}
						name="firstname"
						className="form-control"
						placeholder="First name"
					/>
				</div>

				<div className="form-group">
					<label>Last name</label>
					<input
						type="text"
						onChange={handleInputChange}
						name="lastname"
						className="form-control"
						placeholder="Last name"
					/>
				</div>

				<div className="form-group">
					<label>Email address</label>
					<input
						type="email"
						onChange={handleInputChange}
						name="email"
						className="form-control"
						placeholder="Enter email"
					/>
				</div>

				<div className="form-group">
					<label>Password</label>
					<input
						type="password"
						onChange={handleInputChange}
						name="password"
						className="form-control"
						placeholder="Enter password"
					/>
				</div>

				<button
					type="submit"
					disabled={!(formObject.email && formObject.password)}
					onClick={handleFormSubmit}
					className="btn btn-primary btn-block"
				>
					Sign Up
				</button>
				<p className="forgot-password text-right">
					Already registered <a href="#">sign in?</a>
				</p>
			</form>
		</div>
	);
}

export default Signup;
