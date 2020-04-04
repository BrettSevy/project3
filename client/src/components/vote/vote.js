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

    //Displays ID selected, hides VOTE Button
    function selectedVote(votedWhiskey) {
        setVisible(false);
    }

    //Vote, just in case we need it
    function increaseAndLog(voteCount) {
        setvoteCount(voteCount + 1)
    }

    function handleClick() {
        API.updateFight(votedWhiskey);
        // prop.fightID
        selectedVote(votedWhiskey);
        increaseAndLog(voteCount);
    }

    return (
        <button className="btn btn-primary btn-md" style={style} onClick={handleClick}>
            {/* <button className="btn btn-primary btn-md" onClick={() => { selectedVote(votedWhiskey); increaseAndLog(voteCount); }}> */}
            VOTE
            {/* <p>{voteCount}</p> */}
        </button >
    );
}

export default Vote;