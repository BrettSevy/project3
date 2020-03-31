import React from 'react';
// import Card from "../card/card";
import "../../pages/matchup.css"

function CardHolder(){
    return(
    <div className="row">
        <div className="col-2">
            </div>
                <div className="col-8">
                    <div className="row justify-content-around">
                        {/* <Card/>
                        <Card/> */}
                        <p>test body</p>
                    </div>
                </div>
            <div className="col-2">
        </div>
    </div>
    )
};

export default CardHolder