const db = require("../models");
const _ = require( "lodash");


function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


module.exports = {
  findAll: function(req, res) {
    db.Fight
      .find(req.query).populate("Whiskey")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Fight
    
      .findById(req.params.id).populate("Whiskey")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    var values = ["drinkOne", "drinkTwo"]
    var shuffleArr = shuffle(req.body.list)
    var bracket =_.chunk(shuffleArr,2)
    console.log(bracket)
    var newbracket = bracket.map(pair =>{
      console.log(pair)
      return _.zipObject(values, pair)
    })
    newbracket = newbracket.map(obj => {
      obj.bracket = 5;
      obj.drinkOneVotes = [];
       obj.drinkTwoVotes = [];
      return obj;
    })
    console.log(newbracket)
    db.Fight
      .createMany(newbracket) 
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Fight
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Fight
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};