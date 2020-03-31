import React from "react";
import "./style.css"


function Nav() {
return(
    <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
            <img src=" " width="30" height="30" alt="" />
            Test
        </a>
        <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">USERNAME</a>
            </li>
            {/* <li className="nav-item">
                <a className="nav-link" href="#">BRACKETS WON: 0</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">VOTES CORRECT: 0</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">VOTES WRONG: 0</a>
            </li> */}
            </ul>
        <button type="button" className="btn btn-primary btn-md">LOGOUT</button>
        </div>
    </nav>
    )
}


export default Nav;