import React from 'react';
import './App.css';
import Whiskeys from "./pages/Whiskeys"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar"
import Main from "./components/main";
import Fight from "./pages/fight"


function App() {
  return (
    <Router>
    <div>
    
        <Navbar></Navbar>
        <Fight></Fight>
        <Whiskeys></Whiskeys>
      
    </div>
    </Router>
  );
}


export default App;
