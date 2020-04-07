import React, { useState, useEffect } from 'react';
import API from "../../utils/API";

function Vote(props) {
    const [visible, setVisible] = useState(true);
    const [fightData, setfightData] = useState([])

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
    // function increaseAndLog(voteCount) {
    //     API.getFight(props.fightID).then()
    //     setvoteCount(voteCount + 1)
    // }
    useEffect(() => {
        API.getFight(props.fightID).then(({ data }) => {
            console.log(data)
            if (votedWhiskey === data.drinkOne._id.toString()) { console.log("drinkOne"); setfightData(data.drinkOneVotes) }
            else {
                console.log("drinkOne"); setfightData(data.drinkTwoVotes)
            }
        })
    }, [])

    function handleClick() {
        API.updateFight(props.fightID, votedWhiskey, getCookie("userid"));
        // prop.fightID
        selectedVote(votedWhiskey);
        // increaseAndLog(voteCount);
        window.location.reload();
    }

    return (
        <div>
            <button className="btn btn-primary btn-md" style={style} onClick={handleClick}>
                {/* // <button className="btn btn-primary btn-md" onClick={() => { selectedVote(votedWhiskey); increaseAndLog(voteCount); }}> */}
                VOTE
            </button>
            <p>Vote Count: {fightData.length}</p>
        </div>
    );
}

export default Vote;