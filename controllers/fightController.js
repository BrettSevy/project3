const db = require("../models");
const _ = require("lodash");
const mongoose = require("mongoose");


function shuffle(a) {
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


module.exports = {
  findAll: function (req, res) {
    db.Fight
      .find(req.query).populate("Whiskey")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Fight
      .findById(req.params.id)
      .populate("drinkOne")
      .populate("drinkTwo")
      .then(dbModel => {
        // console.log(req.params.id)
        // console.log(dbModel)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    var values = ["drinkOne", "drinkTwo"]
    var shuffleArr = shuffle(req.body.list)
    var bracket = _.chunk(shuffleArr, 2)
    // console.log(bracket)
    var newbracket = bracket.map(pair => {
      // console.log(pair)
      return _.zipObject(values, pair)
    })
    newbracket = newbracket.map(obj => {
      obj.round = 1;
      obj.drinkOneVotes = [];
      obj.drinkTwoVotes = [];
      return obj;
    })
    console.log(newbracket)
    db.Fight
      .insertMany(newbracket)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: async function (req, res) {
    //console.log(req.params.id)
    //get actual user from schema
    try {
      var fightData = await db.Fight.findById(req.params.id)
      console.log(req.body)
      console.log(fightData)
      var ifuser = await fightData.drinkOneVotes.toString().split(",").includes(req.body.userid)
      console.log(ifuser)
      var ifuser2 = await fightData.drinkTwoVotes.toString().split(",").includes(req.body.userid)
      if (ifuser || ifuser2) {

        res.send("User has already voted!")
      }
      else if (req.body.drinkChoice === fightData.drinkOne.toString()) {
        var dbModel = await
          db.Fight
            .findByIdAndUpdate({ _id: req.params.id }, { $push: { drinkOneVotes: req.body.userid } })
        res.json(dbModel)
      } else if (req.body.drinkChoice === fightData.drinkTwo.toString()) {
        var dbModel = await
          db.Fight
            .findByIdAndUpdate({ _id: req.params.id }, { $push: { drinkTwoVotes: req.body.userid } })
        res.json(dbModel)
      }
      // create a Vote that has a whiskey ID associated with it
      // to see how many votes a whiskey has, sum all the votes with that whiskeys/user ID
    } catch (err) {
      res.json(err)
    }
  },
  remove: function (req, res) {
    db.Fight
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};