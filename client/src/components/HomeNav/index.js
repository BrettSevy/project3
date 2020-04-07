import React from "react";
import "../HomeNav/homenav.css";
import "bootstrap/dist/css/bootstrap.min.css";
/* NavBar -> login, signup or go to current tournament */

function HomeNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-default">
        <img
          alt=""
          src="logo192.png"
          width="30"
          height="30"
          className="d-inline-block align-top animated infinite pulse delay-2s"
        />

        <nav class="navbar navbar-default">
          <a class="navbar-brand">Whisket</a>
        </nav>

        <div className="container">
          <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link" href="/fight">
              Tournament
            </a>
            <a className="nav-item nav-link" href="/signup">
              Sign Up
            </a>
          </div>

          {/* <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-item nav-link" href="/fight">
                Tournament
              </a>
            </li>
          </ul> */}

          {/* <div className="container">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-item nav-link" href="/fight">
                Tournament
              </a>
            </li>
          </ul> */}

          {/* <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-item nav-link" href="/signup">
                Sign Up
              </a>
            </li>
          </ul> */}
        </div>
      </nav>
    </div>
  );
}

export default HomeNav;
