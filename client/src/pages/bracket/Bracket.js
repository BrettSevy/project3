import React from "react";
import Reacket from "reacket";
import "./Bracket.css";
import FightNav from "../../components/FightNav/index";
const matches = require("./Team");

function App() {
  return (
    <div>
      <FightNav />
      <div className="container">
        <header className="header">
          <h1>Bracket</h1>
        </header>
        <main>
          <Reacket matches={matches} />
        </main>
      </div>
    </div>
  );
}
export default App;
