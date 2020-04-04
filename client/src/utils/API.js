import axios from "axios";

export default {
	// Gets all whiskeys
	getWhiskeys: function () {
		return axios.get("/api/whiskeys");
	},
	// Gets the whiskey with the given id
	getWhiskey: function (id) {
		return axios.get("/api/whiskeys/" + id);
	},
	// Deletes the whiskey with the given id
	deleteWhiskey: function (id) {
		return axios.delete("/api/whiskeys/" + id);
	},
	// Saves a whiskey to the database
	saveWhiskey: function (whiskeyData) {
		return axios.post("/api/whiskeys", whiskeyData);
	},

	newUser: function (userData) {
		return axios.post("/api/user", userData);
	},

	getUser: function (userData) {
		return axios.post("/api/user/login", userData);
	},

	findFight: function (fightData) {
		return axios.get("/api/fight", fightData);
	},

	createFight: function (fightData) {
		return axios.post("/api/fight", fightData);
	},

	getFight: function (id) {
		return axios.get("/api/fight/", + id);
	},

	updateFight: function (id) {
		// updateFight: function (id, drinkChoice) {

		console.log('in the API');
		console.log(id)
		return axios.put("/api/fight/" + id);

		// return axios.put("/api/fight/" + id, drinkChoice);
	},

	deleteFight: function (id) {
		return axios.delete("/api/fight/", + id);
	}
}
