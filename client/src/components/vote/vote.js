import React, { useState } from 'react';
import API from "../../utils/API";

function Vote(props) {
    const [visible, setVisible] = useState(true);
    const [voteCount, setvoteCount] = useState(1)

    // Imported prop from card-holder
    const votedWhiskey = props.voteWhiskey;



    //Visibility function using hooks
    let style = { display: "block" };
    if (!visible) style.display = "none";


    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
    }

    //Displays ID selected, hides VOTE Button
    function selectedVote(votedWhiskey) {
        setVisible(false);
    }

    //Vote, just in case we need it
    function increaseAndLog(voteCount) {
        API.getFight().then()
        setvoteCount(voteCount + 1)
    }

    function handleClick() {
        API.updateFight(props.fightID, votedWhiskey, getCookie("userid"));
        // prop.fightID
        selectedVote(votedWhiskey);
        increaseAndLog(voteCount);
    }

    return (
        <button className="btn btn-primary btn-md" style={style} onClick={handleClick}>
            {/* // <button className="btn btn-primary btn-md" onClick={() => { selectedVote(votedWhiskey); increaseAndLog(voteCount); }}> */}
            VOTE
            <p>{voteCount}</p>
        </button >
    );
}

export default Vote;