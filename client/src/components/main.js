import React from "react";
import { Switch, Route } from "react-router-dom";
import Whiskeys from "../pages/Whiskeys";
// import Fight from "../pages/fight";
import SignUp from "../components/signup";


const Main = () => (
    <Switch>
        <Route exact path="/" component={SignUp} />
        <Route path="/whiskeys" component={Whiskeys} />
        {/* <Route path="/fight" component={Fight} /> */}
 
    </Switch>
)

export default Main;