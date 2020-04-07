import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List"
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";



function Fights() {
    // Setting our component's initial state
    const [fights, setFights] = useState({
        fightId: ""

    })


    // Load all whiskeys and store them with setWhiskeys
    useEffect(() => {
        loadFights()
    }, [])

    // Loads all whiskeys and sets them to whiskeys
    function loadFights() {
        API.getFights()
            .then(res => {
                console.log(res);
                setFights(res.data)

            })
            .catch(err => console.log(err));
    };


    return (
        <div className="card-inner">
            <div >
                <h1>Fight List</h1>
                <h5>Find your current bracket or join new a one.</h5>
                <hr></hr>
            </div>
            {fights.length ? (
                <List>
                    {fights.map(fight => (
                        <ListItem key={fight._id}>
                            <Link to={"/matchup/" + fight._id}>
                                <strong>
                                    {fight.name} by {fight._id}
                                </strong>
                            </Link>

                            {/* <Link to={`/matchup/${useState.fightId}`}>
                                <Button variant="primary" >
                                    Go to Fight!
						</Button>
                            </Link> */}
                        </ListItem>
                    ))}
                </List>
            ) : (
                    <h3>No Results to Display</h3>
                )}
        </div>
    );
}


export default Fights;