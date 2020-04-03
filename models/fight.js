const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FightSchema = new Schema({
	drinkOne: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Whiskey"
	},
	drinkOneVotes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "user"
		}
	],
	drinkTwo: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Whiskey"
	},
	drinkTwoVotes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "user"
		}
	],
	round: {
		type: Number,
		required: true
	}
});

const Fight = mongoose.model("Fight", FightSchema);

module.exports = Fight;
