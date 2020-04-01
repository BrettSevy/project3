const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/whiskeylist"
);

const whiskeySeed = [
    {
      "name": "Jack Daniel's Gentleman Jack",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon",
      "image": "https://static.whiskybase.com/storage/whiskies/3/7/904/167067-big.jpg",
      "imagesmall": "https://static.whiskybase.com/storage/whiskies/3/7/904/167067-small.png"
    },
    {
      "name": "Monkey Shoulder",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt",
      "image": "https://static.whiskybase.com/storage/whiskies/1/5/2207/256632-big.jpg",
      "imagesmall": "https://static.whiskybase.com/storage/whiskies/6/8/836/106903-small.png"
    },
    {
      "name": "Jack Daniel's 150th Anniversary",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon",
      "image": "https://static.whiskybase.com/storage/whiskies/9/0/269/140723-big.jpg",
      "imagesmall": "https://static.whiskybase.com/storage/whiskies/9/0/269/140723-small.png"
    },
    {
      "name": "Elijah Craig 12yo",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon",
      "image": "https://static.whiskybase.com/storage/whiskies/1/1/0848/190508-big.jpg",
      "imagesmall": "https://static.whiskybase.com/storage/whiskies/1/1/0848/190508-small.png"
    },
    {
      "name": "Wild Turkey Longbranch",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon",
      "image": "https://static.whiskybase.com/storage/whiskies/1/1/9442/238185-big.jpg",
      "imagesmall": "https://static.whiskybase.com/storage/whiskies/1/1/9442/238185-small.png"
    },
    {
      "name": "Wild Turkey 101 Bourbon",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon",
      "image": "https://static.whiskybase.com/storage/whiskies/1/0/9697/178856-big.jpg",
      "imagesmall": "https://static.whiskybase.com/storage/whiskies/1/0/9697/178856-small.png"
    },
    {
      "name": "Four Roses Small Batch Bourbon",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon",
      "image": "https://static.whiskybase.com/storage/whiskies/1/8/816/67848-big.jpg",
      "imagesmall": "https://static.whiskybase.com/storage/whiskies/1/8/816/67848-small.png"
    },
    {
      "name": "Stranahan's Colorado Whiskey",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon",
      "image": "https://static.whiskybase.com/storage/whiskies/5/6/078/87991-big.jpg",
      "imagesmall": "https://static.whiskybase.com/storage/whiskies/5/6/078/87991-small.png"
    },
    {
      "name": "Balcones Baby Blue",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Whiskey",
      "image": "https://static.whiskybase.com/storage/whiskies/4/5/286/79903-big.jpg",
      "imagesmall": "https://static.whiskybase.com/storage/whiskies/4/5/286/79903-small.png"
    },
    {
      "name": "Balcones Texas Single Malt Whisky",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "USA",
      "type": "Malt",
      "image": "https://static.whiskybase.com/storage/whiskies/1/4/7011/248864-big.jpg",
      "imagesmall": "https://static.whiskybase.com/storage/whiskies/1/4/7011/248864-small.png"
    },
    {
      "name": "Knob Creek Small Batch 9yo Bourbon",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon",
      "image": "https://static.whiskybase.com/storage/whiskies/1/4/4274/242482-big.jpg",
      "imagesmall": "https://static.whiskybase.com/storage/whiskies/1/4/4274/242482-small.png"
    },
    {
      "name": "Knob Creek Small Batch Straight Rye Whiskey",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye",
      "image": "https://static.whiskybase.com/storage/whiskies/6/5/807/230503-big.jpg",
      "imagesmall": "https://static.whiskybase.com/storage/whiskies/6/5/807/230503-small.png"
    },
    {
      "name": "FEW Rye Whisky",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye",
      "image": "https://static.whiskybase.com/storage/whiskies/3/5/754/87961-big.jpg",
      "imagesmall": "https://static.whiskybase.com/storage/whiskies/3/5/754/87961-small.png"
    },
    {
      "name": "Jameson Irish Whiskey",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend",
      "image": "https://static.whiskybase.com/storage/whiskies/1/4/7127/249088-big.jpg",
      "imagesmall": "https://static.whiskybase.com/storage/whiskies/1/4/7127/249088-small.png"
    },
    {
      "name": "Knappogue Castle 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Ireland",
      "type": "Malt",
      "image": "https://static.whiskybase.com/storage/whiskies/2/7/925/72255-big.jpg",
      "imagesmall": "https://static.whiskybase.com/storage/whiskies/2/7/925/72255-small.png"
    },
    {
    "name": "Bushmills 16yo Single Malt",
    "cost": "$$$$",
    "class": "SingleMalt-like",
    "cluster": "B",
    "country": "Ireland",
    "type": "Malt",
    "image": "https://static.whiskybase.com/storage/whiskies/1/2/2862/215285-big.jpg",
    "imagesmall": "https://static.whiskybase.com/storage/whiskies/1/2/2862/215285-small.png"
  },
  {
    "name": "Bushmills Original Blended",
    "cost": "$$",
    "class": "Scotch-like",
    "cluster": "",
    "country": "Ireland",
    "type": "Blend",
    "image": "https://static.whiskybase.com/storage/whiskies/1/1/3684/188337-big.jpg",
    "imagesmall": "https://static.whiskybase.com/storage/whiskies/1/1/3684/188337-small.png"
  },
  {
    "name": "Yamazaki 12yo",
    "cost": "$$$$",
    "class": "SingleMalt-like",
    "cluster": "G",
    "country": "Japan",
    "type": "Malt",
    "image": "https://static.whiskybase.com/storage/whiskies/1/1/3973/197843-big.jpg",
    "imagesmall": "https://static.whiskybase.com/storage/whiskies/1/1/3973/197843-small.png"
  },
  {
    "name": "Suntory Toki",
    "cost": "$$$",
    "class": "Scotch-like",
    "cluster": "",
    "country": "Japan",
    "type": "Blend",
    "image": "https://static.whiskybase.com/storage/whiskies/3/6/346/75757-big.jpg",
    "imagesmall": "https://static.whiskybase.com/storage/whiskies/3/6/346/75757-small.png"
  },
  {
    "name": "Nikka Coffey Malt",
    "cost": "$$$$",
    "class": "SingleMalt-like",
    "cluster": "E",
    "country": "Japan",
    "type": "Malt",
    "image": "https://static.whiskybase.com/storage/whiskies/8/4/113/132367-big.jpg",
    "imagesmall": "https://static.whiskybase.com/storage/whiskies/8/4/113/132367-small.png"
  },
  {
    "name": "Johnnie Walker 12yo Black Label",
    "cost": "$$",
    "class": "Scotch-like",
    "cluster": "",
    "country": "Scotland",
    "type": "Blend",
    "image": "https://static.whiskybase.com/storage/whiskies/7/6/462/119309-big.jpg",
    "imagesmall": "https://static.whiskybase.com/storage/whiskies/7/6/462/119309-small.png"
  },
  {
    "name": "Johnnie Walker Gold Label Reserve",
    "cost": "$$$$",
    "class": "Scotch-like",
    "cluster": "",
    "country": "Scotland",
    "type": "Blend",
    "image": "https://static.whiskybase.com/storage/whiskies/5/4/215/97864-big.jpg",
    "imagesmall": "https://static.whiskybase.com/storage/whiskies/5/4/215/97864-small.png"
  },
  {
    "name": "Crown Royal Reserve",
    "cost": "$$$",
    "class": "Rye-like",
    "cluster": "",
    "country": "Canada",
    "type": "Blend",
    "image": "https://static.whiskybase.com/storage/whiskies/3/3/006/185710-big.jpg",
    "imagesmall": "https://static.whiskybase.com/storage/whiskies/3/3/006/185710-small.png"
  },
  {
    "name": "Crown Royal Northern Harvest Rye",
    "cost": "$$",
    "class": "Rye-like",
    "cluster": "",
    "country": "Canada",
    "type": "Blend",
    "image": "https://static.whiskybase.com/storage/whiskies/8/6/493/257260-big.jpg",
    "imagesmall": "https://static.whiskybase.com/storage/whiskies/8/6/493/257260-small.png"
  },
  {
    "name": "Teeling Single Grain (Wine Cask Finish)",
    "cost": "$$$",
    "class": "Scotch-like",
    "cluster": "",
    "country": "Ireland",
    "type": "Grain",
    "image": "https://static.whiskybase.com/storage/whiskies/7/4/972/120279-big.jpg",
    "imagesmall": "https://static.whiskybase.com/storage/whiskies/7/4/972/120279-small.png"
  },
  {
    "name": "Tyrconnell 16-year-old",
    "cost": "$$",
    "class": "SingleMalt-like",
    "cluster": "H",
    "country": "Ireland",
    "type": "Blend",
    "image": "https://static.whiskybase.com/storage/whiskies/1/2/6411/212548-big.jpg",
    "imagesmall": "https://static.whiskybase.com/storage/whiskies/1/2/6411/212548-small.png"
  },
  {
    "name": "Tyrconnell Single Malt Irish Whiskey",
    "cost": "$$",
    "class": "SingleMalt-like",
    "cluster": "H",
    "country": "Ireland",
    "type": "Malt",
    "image": "https://static.whiskybase.com/storage/whiskies/2/8/951/239340-big.jpg",
    "imagesmall": "https://static.whiskybase.com/storage/whiskies/2/8/951/239340-small.png"
  },
  {
    "name": "Macallan 12yo Sherry Oak",
    "cost": "$$$$",
    "class": "SingleMalt-like",
    "cluster": "A",
    "country": "Scotland",
    "type": "Malt",
    "image": "https://static.whiskybase.com/storage/whiskies/1/4/8335/251102-big.jpg",
    "imagesmall": "https://static.whiskybase.com/storage/whiskies/1/4/8335/251102-small.png"
  },
  {
    "name": "Macallan Select Oak",
    "cost": "$$$",
    "class": "SingleMalt-like",
    "cluster": "C",
    "country": "Scotland",
    "type": "Malt",
    "image": "https://static.whiskybase.com/storage/whiskies/1/0/384/118344-big.jpg",
    "imagesmall": "https://static.whiskybase.com/storage/whiskies/1/0/384/118344-small.png"
  },
  {
    "name": "Evan Williams (Black Label)",
    "cost": "$",
    "class": "Bourbon-like",
    "cluster": "R1",
    "country": "USA",
    "type": "Bourbon",
    "image": "https://static.whiskybase.com/storage/whiskies/2/1/506/91309-big.jpg",
    "imagesmall": "https://static.whiskybase.com/storage/whiskies/2/1/506/91309-small.png"
  },
  {
    "name": "Maker's Mark",
    "cost": "$$",
    "class": "Bourbon-like",
    "cluster": "R0",
    "country": "USA",
    "type": "Bourbon",
    "image": "https://static.whiskybase.com/storage/whiskies/1/1/4340/189513-big.jpg",
    "imagesmall": "https://static.whiskybase.com/storage/whiskies/1/1/4340/189513-small.png"
  },
  {
    "name": "Maker's Mark Cask Strength",
    "cost": "$$$$",
    "class": "Bourbon-like",
    "cluster": "R0",
    "country": "USA",
    "type": "Bourbon",
    "image": "https://static.whiskybase.com/storage/whiskies/1/2/4373/251110-big.jpg",
    "imagesmall": "https://static.whiskybase.com/storage/whiskies/1/2/4373/251110-small.png"
  },
  {
    "name": "Ardmore Traditional Cask",
    "cost": "$$$",
    "class": "SingleMalt-like",
    "cluster": "I",
    "country": "Scotland",
    "type": "Malt",
    "image": "https://static.whiskybase.com/storage/whiskies/2/2/873/70230-big.jpg",
    "imagesmall": "https://static.whiskybase.com/storage/whiskies/2/2/873/70230-small.png"
  },
  {
    "name": "Highland Park 08yo",
    "cost": "$$$",
    "class": "SingleMalt-like",
    "cluster": "I",
    "country": "Scotland",
    "type": "Malt",
    "image": "https://static.whiskybase.com/storage/whiskies/1/7/06/56359-big.jpg",
    "imagesmall": "https://static.whiskybase.com/storage/whiskies/1/7/06/56359-small.png"
  },
  {
    "name": "Crown Royal XO",
    "cost": "$$$",
    "class": "Rye-like",
    "cluster": "",
    "country": "Canada",
    "type": "Blend",
    "image": "https://static.whiskybase.com/storage/whiskies/5/3/611/85747-big.jpg",
    "imagesmall": "https://static.whiskybase.com/storage/whiskies/5/3/611/85747-small.png"
  },


  ]

  db.Whiskey
  .remove({})
  .then(() => db.Whiskey.collection.insertMany(whiskeySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });