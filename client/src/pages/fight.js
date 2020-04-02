import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

// import whiskey list

function Fight() {
	const [whiskeyCount, setWhiskeyCount] = useState();

	function generateInput() {
		let inputArray = [];
		for (let i = 0; i < whiskeyCount; i++) {
			var teamName = (
				<>
					<Form.Label>Whiskey Name</Form.Label>
					<Form.Control type="text" placeholder="" />
				</>
			);

			inputArray.push(teamName);
		}

		return inputArray;
	}

	return (
		<div>
			<Form>
				<Form.Group controlId="tournamentName">
					<Form.Label>Name of your bracket</Form.Label>
					<Form.Control type="text" placeholder="" />
				</Form.Group>
				<Form.Group controlId="selectWhiskeyCount">
					<Form.Label>How many whiskey's do you have?</Form.Label>
					<Form.Control
						as="select"
						custom
						value={whiskeyCount}
						onChange={e =>
							setWhiskeyCount(parseInt(e.target.value))
						}
					>
						{/* <option>0</option> */}
						{/* <option>2</option> */}
						<option>4</option>
						<option>8</option>
						<option>16</option>
						{/* <option>32</option> */}
						{/* <option>64</option> */}
					</Form.Control>
				</Form.Group>
				{generateInput()}
				{/* new input forms comes up based on how many whiskeys they say they have to add in "team names" */}
			</Form>
		</div>
	);
}

export default Fight;
