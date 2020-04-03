import React from "react";
import "../HomeNav/homenav.css";
import "bootstrap/dist/css/bootstrap.min.css";
/* NavBar -> login, signup or go to current tournament */

function HomeNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img
          alt=""
          src="logo192.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />

        <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand">
            Whisket
          </a>
        </nav>

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
