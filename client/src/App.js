import React from 'react';
import './App.css';
import Whiskeys from "./pages/Whiskeys"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
      <h1>
        <Whiskeys></Whiskeys>
      </h1>
    </div>
    </Router>
  );
}


export default App;
