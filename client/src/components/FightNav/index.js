import React from "react";

function FightNav() {
  function Logout() {
    document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  }

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
          <a class="navbar-brand">Whisket</a>
        </nav>

        <div className="container">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-item nav-link" href="/fight">
                Tournament
              </a>
            </li>
            <li className="nav-item">
              <a onClick={Logout} className="nav-item nav-link " href="/">
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
