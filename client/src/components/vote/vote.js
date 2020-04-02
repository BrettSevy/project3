import React, { useState } from 'react';

function Vote(props) {
    const [visible, setVisible] = useState(true);
    const [count, setCount] = useState(0)

    // Imported prop from card-holder
    const votedWhiskey = props.voteWhiskey;

    //Visibility function using hooks
    let style = { display: "block" };
    if (!visible) style.display = "none";

    // //Count increase function, just in case we need it
    // function increaseAndLog(count){
    //     setCount(count + 1)
    //     console.log(count)
    // }

    //Displays ID selected, hides VOTE Button
    function selectedVote() {
        console.log("whiskey ID -->" + votedWhiskey + count);
        setVisible(false);
    }

    return (
        <button className="btn btn-primary btn-md" style={style} onClick={selectedVote}>
            VOTE
        </button>
    );
}

export default Vote;