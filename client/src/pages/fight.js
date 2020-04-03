import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import FightNav from "../components/FightNav/index";


// import whiskey list

function Fight() {
	const [whiskeyState, setWhiskeyState] = useState({
		count: 0,
		options: [],
		selected: [],
	});

	function generateInput() {
		let inputArray = [];
		for (let i = 0; i < whiskeyState.count; i++) {
			var teamName = (
				<>
					<Form.Label key={`label_${i}`}>Whiskey Name</Form.Label>
					<Form.Control id={i + 1} as="select" custom onChange={handleWhiskeySelect}>
						{whiskeyState.options.map(whiskey => (<option id={whiskey.id} key={whiskey.id}>{whiskey.name}</option>))}
					</Form.Control>
				</>
			);

			inputArray.push(teamName);
		}

		return inputArray;
	}

	// Load all whiskeys and store them with setWhiskeys
	useEffect(() => {
		loadWhiskeys()
	}, [])

	// Loads all whiskeys and sets them to whiskeys
	function loadWhiskeys() {
		API.getWhiskeys()
			.then(res => {
				// use map function to return id and name
				var whiskeyList = res.data.map(whiskey => ({
					id: whiskey._id,
					name: whiskey.name
				}))

				setWhiskeyState({
					...whiskeyState,
					options: [{ id: 0, name: "select a whiskey" }, ...whiskeyList]
				})
				return;

			})
			.catch(err => console.log(err));
	};

	function handleWhiskeySelect(e) {
		const w = {
			name: e.target.value,
			id: e.target.selectedOptions[0].id,
			seed: e.target.id
		}

		//remove previous selection for this seed
		var selected = whiskeyState.selected.filter(whiskey => w.seed != whiskey.seed)

		if (w.id != 0) { selected.push(w); }

		setWhiskeyState({
			...whiskeyState,
			selected
		})
	}

	return (
		<div>
			<FightNav />
			<div className="container">
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
						value={whiskeyState.count}
						onChange={e =>
							setWhiskeyState({
								...whiskeyState,
								count: parseInt(e.target.value)
							})
						}
					>
						{/* <option>0</option> */}
						<option>2</option>
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
