import React from 'react';
import "../matchup/matchup.css"
import CardHolder from '../../components/card holder/card-holder';
// import Backbutton from '../../components/backbutton/Backbutton';
import FightNav from '../../components/FightNav/index'


function Matchup(props) {
    return (
        <div>
            <FightNav />
            <div className="container-fluid" id="Matchup">
                <CardHolder whiskeyId={props.match.params.id} />
                {/* <Backbutton /> */}
            </div>
        </div>
    )
};
export default Matchup;