import React from 'react';
import "../../pages/matchup/matchup.css"
import Vote from "../vote/vote"

function Card(props) {
  const whiskey = props.whiskey;
  const whiskeyVote = props.whiskey._id;

  return (
    <div className="card mb-3" style={{ width: 300, height: '30%' }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={whiskey.image} className="card-img" alt={whiskey.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{whiskey.name}</h5>
            <p className="card-text">{whiskey.type}</p>
            <p className="card-text">{whiskey.country}</p>
            <Vote voteWhiskey={whiskeyVote} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Card;