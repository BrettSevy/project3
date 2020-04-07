
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import { Form, Button, Modal } from "react-bootstrap";



// import whiskey list

function Fight() {
	const [whiskeyState, setWhiskeyState] = useState({
		fightId: "",
		count: 0,
		options: [],
		selected: [],
	});
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


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
		// console.log(whiskeyState.selected);
		//remove previous selection for this seed
		var selected = whiskeyState.selected.filter(whiskey => w.seed != whiskey.seed)

		if (w.id != 0) { selected.push(w); }

		setWhiskeyState({
			...whiskeyState,
			selected
		})
	}

	function handleFormSubmit(e) {
		e.preventDefault()
		var data = whiskeyState.selected.map(id => id.id)
		API.createFight({ list: data })
			.then(function (res) {
				const fightId = res.data[0]._id;
				setWhiskeyState({
					...whiskeyState,
					fightId
				})

				handleShow();
			})


	}

	return (
		
		<div className="card-inner">
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
						<option>0</option>
						<option>2</option>
						<option>4</option>
						<option>8</option>
						<option>16</option>
						{/* <option>32</option> */}
						{/* <option>64</option> */}
					</Form.Control>
				</Form.Group>
				{generateInput()}
				<Button onClick={handleFormSubmit}>submit</Button>
				{/* new input forms comes up based on how many whiskeys they say they have to add in "team names" */}
			</Form>
			<Modal show={show} onHide={handleClose} animation={false}>
				<Modal.Header closeButton>
					<Modal.Title>Your Fight is Ready</Modal.Title>
				</Modal.Header>
				<Modal.Body></Modal.Body>
				<Modal.Footer>
					<Link to={`/matchup/${whiskeyState.fightId}`}>
						<Button variant="primary" onClick={handleClose}>
							Go to Fight!
						</Button>
					</Link>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default Fight;