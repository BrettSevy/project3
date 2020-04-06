import Card from "../card/card";
import "../../pages/matchup/matchup.css"
import React, { useState, useEffect } from "react";
import API from "../../utils/API";


function CardHolder(props) {
    // Setting our component's initial state
    const [whiskeys, setWhiskeys] = useState([])
    const [fightID, setfightID] = useState()


    // Load all whiskeys and store them with setWhiskeys
    useEffect(() => {
        loadWhiskeys()
    }, [])

    // Loads all whiskeys and sets them to whiskeys
    function loadWhiskeys() {

        API.getFight(props.whiskeyId).then(res => {
            var fight = res.data
            setfightID(res.data._id)
            setWhiskeys([fight.drinkOne, fight.drinkTwo])
        }).catch(err => console.log(err));
        // API.getWhiskeys()
        //     .then(res =>
        //         setWhiskeys(res.data),
        //     )
        //     .catch(err => console.log(err));
    };


    return (
        <div className="row">
            <div className="col-2">
            </div>
            <div className="col-8">
                <div className="row justify-content-around">
                    {whiskeys.map(whiskey => (
                        <Card whiskey={whiskey} fightID={fightID} />
                    ))}
                </div>
            </div>
            <div className="col-2">
            </div>
        </div>
    )
};

export default CardHolder