import React from 'react';
import "../matchup/matchup.css"
import CardHolder from '../../components/card holder/card-holder';
import Backbutton from '../../components/backbutton/Backbutton';
import FightNav from '../../components/FightNav/index'


function Matchup() {
    return (
        <div>
            <FightNav />
            <div className="container-fluid" id="Matchup">
                <CardHolder />
                <Backbutton />
            </div>
        </div>
    )
};
export default Matchup;