const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  pasword: String,
});

const User = mongoose.model("user", userSchema);

module.exports = User;