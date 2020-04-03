import React from "react";
import Reacket from 'reacket';
import "./Bracket.css";

const matches = require("./Team");

function App() {
    return (
        <div className="container">
            <header className="header">
                <h1>Bracket</h1>
            </header>
            <main>
                <Reacket matches={matches} />
            </main>
        </div>
    );
}

export default App;
