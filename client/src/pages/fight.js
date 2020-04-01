import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import FightNav from "../components/FightNav/index";
// import { Form } from "/bootstrap";

function Fight() {
	return (
		<div>
			<FightNav />
			<div className="container">
				<form>
					<div className="form-group">
						<label for="bracketname">Name of your tournement</label>
						<input
							type="name"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder=""
						/>
					</div>
					<div className="form-group">
						<label for="exampleFormControlSelect1">
							How many whiskeys do you have?
						</label>
						<select
							className="form-control"
							id="exampleFormControlInput1"
						>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Fight;
