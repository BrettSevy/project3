import React, { useState } from 'react';

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
        console.log("whiskey ID --> " + votedWhiskey);
        setVisible(false);
    }

    //Vote, just in case we need it
    function increaseAndLog(voteCount) {
        setvoteCount(voteCount + 1)
        console.log(voteCount)
    }

    return (
        <button className="btn btn-primary btn-md" style={style} onClick={() => { selectedVote(votedWhiskey); increaseAndLog(voteCount); }}>
            VOTE
            {/* <p>{voteCount}</p> */}
        </button >
    );
}

export default Vote;