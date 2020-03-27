const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const whiskeySchema = new Schema({
  name: { type: String, required: true },
  cost: String,
  class: String,
  cluster: String,
  country: String,
  type: String
});

const Whiskey = mongoose.model("Whiskey", whiskeySchema);

module.exports = Whiskey;