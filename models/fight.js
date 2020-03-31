const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const FightSchema = new Schema(
    {
      drinkOne: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Whiskey"
      },
      drinkOneVotes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      }],
      drinkTwo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Whiskey"
      },
      drinkTwoVotes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      }],
      bracket: {
    type: Number, required: true
      }
    }
  );
  
  module.exports = FightSchema;