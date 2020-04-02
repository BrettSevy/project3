const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: { type: String, required: true },
	password: { type: String, required: true },
	firstName: { type: String },
	lastName: { type: String }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
