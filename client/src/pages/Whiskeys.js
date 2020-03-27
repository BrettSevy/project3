import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List"
import { Link } from "react-router-dom";


function Whiskeys() {
    // Setting our component's initial state
    const [whiskeys, setWhiskeys] = useState([])
    

    // Load all whiskeys and store them with setWhiskeys
    useEffect(() => {
        loadWhiskeys()
    }, [])

    // Loads all whiskeys and sets them to whiskeys
    function loadWhiskeys() {
        API.getWhiskeys()
            .then(res =>
                setWhiskeys(res.data)
            )
            .catch(err => console.log(err));
    };


    return (
        <div>
            <div>
                <h1>whiskeyList</h1>
            </div>
            {whiskeys.length ? (
                <List>
                    {whiskeys.map(whiskey => (
                        <ListItem key={whiskey._id}>
                            <Link to={"/whiskeys/" + whiskey._id}>
                                <strong>
                                    {whiskey.name} by {whiskey.type}
                                </strong>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            ) : (
                    <h3>No Results to Display</h3>
                )}
        </div>
    );
}


export default Whiskeys;