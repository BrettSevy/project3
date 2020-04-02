import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function Login() {
	const [formObject, setFormObject] = useState({});
	function handleInputChange(event) {
		const { name, value } = event.target;
		setFormObject({ ...formObject, [name]: value });
	}

	function handleFormSubmit(event) {
		const data = formObject;
		console.log("FORMOBJECT DATA:", data);

		event.preventDefault();
		if (formObject.email && formObject.password) {
			document.cookie = "loggedIn=true";
			API.getUser(data)
				.then(response => {
					if (response.data.email) {
						window.location.replace("/fight");
					} else {
						alert("incorrect!");
					}
					console.log("Success:", response);
					console.log(response.data);
				})
				.catch(error => {
					console.error("Error:", error);
				});
			// .then(data => {
			// 	console.log(data);
			// 	if (data.err) {
			// 		window.location.replace("/");
			// 	} else {
			// 		window.location.replace("/fight");
			// 	}
			// });
		}
	}
	return (
		<div className="container">
			<form>
				<h3>Sign In</h3>

				<div className="form-group">
					<label>Email address</label>
					<input
						name="email"
						onChange={handleInputChange}
						type="email"
						className="form-control"
						placeholder="Enter email"
					/>
				</div>

				<div className="form-group">
					<label>Password</label>
					<input
						name="password"
						onChange={handleInputChange}
						type="password"
						className="form-control"
						placeholder="Enter password"
					/>
				</div>

				<div className="form-group">
					<div className="custom-control custom-checkbox">
						<input
							type="checkbox"
							className="custom-control-input"
							id="customCheck1"
						/>
						<label
							className="custom-control-label"
							htmlFor="customCheck1"
						>
							Remember me
						</label>
					</div>
				</div>

				<button
					type="submit"
					disabled={!(formObject.email && formObject.password)}
					onClick={handleFormSubmit}
					className="btn btn-primary btn-block"
				>
					Submit
				</button>
				<p className="forgot-password text-right">
					Forgot <a href="#">password?</a>
				</p>
			</form>
		</div>
	);
}

export default Login;
