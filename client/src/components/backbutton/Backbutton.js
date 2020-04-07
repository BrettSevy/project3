import React from 'react';

function Backbutton() {
    return (
        //Back button just goes to home page, needs to be rerouted to bracket page
        <button type="button" className="btn btn-primary btn-sm" onClick={window.location.replace ("/fights")}>BACK</button>
    )
}
export default Backbutton;