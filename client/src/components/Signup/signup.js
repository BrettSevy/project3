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
      document.cookie = "loggedIn=true";
      const data = formObject;
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
      <form className="auth-inner">

        <div className="container text-center ">
          <h2>Sign up to Whisket</h2>
          <h5>It’s quick and easy</h5>
        </div>

        <div className="form-group mt-4">
          <label>Full Name</label>
          <input
            type="text"
            onChange={handleInputChange}
            name="firstname"
            className="form-control"
            placeholder="Enter Name"
          />
        </div>

        {/* <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            onChange={handleInputChange}
            name="lastname"
            className="form-control"
            placeholder="Last name"
          />
        </div> */}

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
          Already registered <a href="/">sign in?</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
