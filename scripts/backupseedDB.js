const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/whiskeylist"
);


const whiskeySeed = [
    {
      "name": "2 Gingers Irish Whiskey",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "66 Gilead Crimson Rye",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "66 Gilead The Wild Oak",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "8 Seconds",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Aberfeldy 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberfeldy 16yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberfeldy 18yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberfeldy 21yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour 10yo",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour 12yo Double Cask Matured",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour 12yo Non-Chill-Filtered",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour 16yo Double Cask Matured",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour 18yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (all batches)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 30)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 32)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 33)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 34)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 35)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 36)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 37)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 38)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 39)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 40)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 42)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 45)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 46)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 47)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 48)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 49)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 50)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 52)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 53)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 54)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 56)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 57)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 58)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 59)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 60)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour A'Bunadh (Batch 61)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aberlour Casg Annamh",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Alberta Premium",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Alberta Premium 20yo",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Alberta Premium Cask Strength Rye",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Alberta Premium Dark Horse",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Alberta Rye Dark Batch",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Alberta Springs 10yo",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Amrut 100 Peated",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Bengal Tiger PX Single Cask (Canada)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Bourbon Single Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Cask Strength",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Double Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Fusion",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Greedy Angels (8yo and 10yo)",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Herald",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Indian Single Malt",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Intermediate Sherry",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Kadhambam",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Madeira Cask Finish (Batch 1)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Naarangi",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Peated",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Peated Cask Strength",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Portonova",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Portpipe Peated Single Cask #2712 (2013)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Portpipe Peated Single Cask #2712 (2016)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Portpipe Peated Single Cask #2713 (2013)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Portpipe Peated Single Cask #4668 (2017)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Portpipe Peated Single Cask (all casks)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut PX Sherry Single Cask (all casks)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut PX Sherry Single Cask 2696 (LCBO)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut PX Sherry Single Cask 2701",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut PX Sherry Single Cask 2702",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut PX Sherry Single Cask 3516 (SAQ)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Rye",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "India",
      "type": "Rye"
    },
    {
      "name": "Amrut Spectrum (all batches)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Spectrum (Batch 1)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Spectrum 004 (Batch 2)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Two Continents",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Amrut Virgin Oak Single Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Ancient Age 10yo Kentucky Straight Bourbon",
      "cost": "$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Ancient Age Kentucky Straight Bourbon",
      "cost": "$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "AnCnoc 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "AnCnoc 16yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "AnCnoc 18yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "AnCnoc 1975",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "AnCnoc 2000",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "AnCnoc 22yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "AnCnoc Cutter",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "AnCnoc Flaughter",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "AnCnoc Peter Arkle (all releases)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "AnCnoc Rutter",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Angel’s Envy Rye (Rum-finished)",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Angel's Envy Bourbon (Port-finished)",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Angel's Envy Cask Strength",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Ardbeg 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ardbeg 17yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ardbeg 19yo Traigh Bhan",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ardbeg 21yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ardbeg 23yo Twenty Something",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ardbeg Alligator",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ardbeg An Oa",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ardbeg Ardbog",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ardbeg Auriverdes",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ardbeg Corryvreckan",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ardbeg Dark Cove",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ardbeg Drum",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ardbeg Galileo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ardbeg Grooves",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ardbeg Kelpie",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ardbeg Perpetuum",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ardbeg Supernova 2014",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ardbeg Supernova 2015",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ardbeg Uigeadail",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ardmore Traditional Cask",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt 12yo Cask Strength (all editions)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt 14yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt 17yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt 21st Anniversary Edition",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt Amarone Cask Finish",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt Bourbon Single Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt Lochranza Reserve",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt Machrie Moor Cask Strength",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt Machrie Moor Peated (all editions)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt Madeira Wine Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt Napoleon Cognac Finish",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt Orkney Bere Barley",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt Pomerol Bordeaux Cask Finish",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt Port Cask Finish",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt Robert Burns Single Malt",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt Sassicaia Wine Cask Finish",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt Sauternes Finish",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt Sherry Cask Finish",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt Sherry Single Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt The Devil’s Punch Bowl (all chapters)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Arran Malt Tokaji Aszu Wine Finish",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Auchentoshan 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Auchentoshan 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Auchentoshan 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Auchentoshan 21yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Auchentoshan American Oak",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Auchentoshan Bartender's Malt",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Auchentoshan Classic",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Auchentoshan Three Wood",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Auchentoshan Valinch",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Auchentoshan Virgin Oak",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Auchroisk 10yo (F&F)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aultmore 12yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aultmore 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aultmore 21yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Aultmore 25yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bain's Cape Mountain Whisky",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "South Africa",
      "type": "Grain"
    },
    {
      "name": "Baker’s 7yo Small Batch Bourbon",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Balblair 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Balblair 12yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Balblair 15yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Balblair 16yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Balblair 1989",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Balblair 1990 Second Release",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Balblair 2000",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Balcones Baby Blue",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Whiskey"
    },
    {
      "name": "Balcones Texas Single Malt Whisky",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "USA",
      "type": "Malt"
    },
    {
      "name": "Ballantine's 17yo",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Ballantine's Finest",
      "cost": "$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Balvenie 12yo Doublewood",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Balvenie 12yo Single Barrel",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Balvenie 12yo Triple Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Balvenie 14yo Carribean Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Balvenie 14yo Peat Week",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Balvenie 15yo Single Barrel (Cask)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Balvenie 16yo Triple Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Balvenie 17yo Doublewood",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Balvenie 21yo Port Wood",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Balvenie 25yo Single Barrel",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Balvenie TUN 1401 (all batches)",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Balvenie TUN 1509 (all batches)",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bank Note 5yo Blended Scotch",
      "cost": "$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Barrell 15yo Craft Spirits Bourbon (Batch 001)",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "",
      "country": "USA",
      "type": "Blend"
    },
    {
      "name": "Barrell Bourbon (all Batches)",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barrell Bourbon Batch 002",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barrell Bourbon Batch 004",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barrell Bourbon Batch 005",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barrell Bourbon Batch 006",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barrell Bourbon Batch 007",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barrell Bourbon Batch 008",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barrell Bourbon Batch 009",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barrell Bourbon Batch 011",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barrell Bourbon Batch 013",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barrell Bourbon Batch 015",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barrell Bourbon Batch 016",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barrell Bourbon Batch 018",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barrell Bourbon Batch 019",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barrell Bourbon New Years (all Batches)",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barrell Bourbon New Years Batch 2017",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barrell Bourbon New Years Batch 2018",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barrell Dovetail Whiskey (all Batches)",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "",
      "country": "USA",
      "type": "Blend"
    },
    {
      "name": "Barrell Infinity Barrel Project (all releases)",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "",
      "country": "USA",
      "type": "Blend"
    },
    {
      "name": "Barrell Rye (all Batches)",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Barrell Rye Batch 002",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Barrell Single Barrel (all barrels)",
      "cost": "",
      "class": "Bourbon-like",
      "cluster": "",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barrell Whiskey (all Batches)",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "",
      "country": "USA",
      "type": "Blend"
    },
    {
      "name": "Barrell Whiskey Batch 001",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "",
      "country": "USA",
      "type": "Blend"
    },
    {
      "name": "Barrell Whiskey Batch 002",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "",
      "country": "USA",
      "type": "Blend"
    },
    {
      "name": "Barrell Whiskey Batch 004",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "",
      "country": "USA",
      "type": "Blend"
    },
    {
      "name": "Barrell Whiskey Batch 005",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "",
      "country": "USA",
      "type": "Blend"
    },
    {
      "name": "Barton 1792 Full Proof Bourbon",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barton 1792 High Rye Bourbon",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barton 1792 Port Finished Bourbon",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barton 1792 Single Barrel Bourbon",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barton 1792 Small Batch Bourbon",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Barton 1792 Sweet Wheat Bourbon",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Basil Hayden’s Kentucky Bourbon",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Bearface Triple Oak 7yo",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Rye"
    },
    {
      "name": "Bell's Original Scotch Whisky",
      "cost": "$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Ben Nevis 10yo (all editions)",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ben Nevis 10yo (old label, pre-2017)",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ben Nevis 10yo (post-2017)",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ben Nevis 10yo Cask Strength",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ben Nevis 18yo The Maltman",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ben Nevis Celebrated Traditional (NAS)",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach 10yo Curiositas",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach 12yo Horizons",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach 12yo Matured in Sherry Wood",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach 15yo Sauternes Finish",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach 15yo Tawny Port Finish",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach 17yo Septendecim Peated",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach 17yo Solstice 1st Peated Port Finish",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach 17yo Solstice 2nd Peated Port Finish",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach 17yo Solstice Peated Port (both editions)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach 18yo Albariza Pedro Ximenez Peated",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach 18yo Dunder",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach 18yo Latada",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach 20yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach 21yo Authenticus Peated",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach 21yo Tawny Port Finish",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach 25yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach 25yo Authenticus Peated",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach 35yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach Birnie Moss",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach Cask Strength",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach Heart of Speyside",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "BenRiach Peated Quarter Casks",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Benrinnes 15yo F&F",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Benromach 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Benromach 10yo Cask Strength (100 proof)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Benromach 15yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Benromach 5yo",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Benromach Organic",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Benromach Peat Smoke",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Benromach Sassicaia",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Benromach Traditional",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bernheim Original Straight Wheat 7yo Small Batch",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Wheat"
    },
    {
      "name": "Bib & Tucker 6yo Bourbon",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Big Peat (Douglas Laing)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Big Peat Christmas Edition (all editions)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Black Bottle (after 2013 re-launch)",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Black Bottle (pre-2013)",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Black Bull 12yo",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Black Bull 40yo",
      "cost": "$$$$$+",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Black Velvet 3yo",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Black Velvet Deluxe",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Black Velvet Reserve 8yo",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Bladnoch 10yo (F&F)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bladnoch 12yo Sherry Cask (Sheep label)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bladnoch 15yo Adela",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bladnoch 16yo (Signatory)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bladnoch 1993-2009 (G&M)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bladnoch 19yo (Cow label)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bladnoch 9yo Lightly Peated",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bladnoch Samsara",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bladnoch Vintage 1992-2007 (Signatory)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Blair Athol 12yo (F&F)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Blandnoch Pure Scot",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Blanton's Gold Kentucky Straight Bourbon",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Blanton's Original Bourbon Single Barrel",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Blanton's Special Reserve Single Barrel (Green label)",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Blanton's Straight from the Barrel Bourbon",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Booker's Rye",
      "cost": "$$$$$+",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Booker's Small Batch Straight Bourbon",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Bowmore 10yo Devil's Cask (all batches)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bowmore 10yo Tempest",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bowmore 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bowmore 12yo Enigma",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bowmore 15yo Darkest",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bowmore 15yo Laimrig",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bowmore 15yo Mariner",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bowmore 17yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bowmore 17yo White Sands",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bowmore 18yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bowmore 25yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bowmore Black Rock",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bowmore Gold Reef",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bowmore Legend",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bowmore Mizunara Cask Finish",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bowmore No.1",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bowmore Small Batch",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bowmore Springtide",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bowmore Vault Edition First Release",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Box (High Coast) Dalvve",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Box (High Coast) Dalvve Sherry Influence",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Box (High Coast) Early Days (batches 01/02)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Box (High Coast) PX - Pedro Ximénez Finish",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Box (High Coast) Quercus I Robur",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Box (High Coast) Quercus III Petraea",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Box (High Coast) The 2nd Step Collection 02",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Box (High Coast) The 2nd Step Collection 03",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Box (High Coast) The Festival 2014",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Box (High Coast) The Festival 2016",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Box (High Coast) The Messenger",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Brora 21yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Brora 30yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Brora 35yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich 21yo Cuvée 382 La Berenice",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich 21yo Cuvée 407 PX",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich 21yo Cuvée 640 Eroica",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich 8yo Laddie Eight",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Black Art 1989",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Black Art 2.x 1989",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Black Art 3.x 1989",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Black Art 4.x 1990",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Black Art 5.x 1992",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Black Art 6.x 1990",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Classic Laddie Scottish Barley",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Infinity Third Edition",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Islay Barley (all vintages)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Laddie Classic (Edition 01)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Laddie Eight 8yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Laddie Sixteen 16yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Laddie Ten 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Laddie Ten 10yo (Second Edition)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Laddie Twenty Two 22yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Octomore 10",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Octomore 10 (Second Edition)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Octomore 10.1",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Octomore 6.1",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Octomore 6.2",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Octomore 6.3",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Octomore 7.1",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Octomore 7.2",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Octomore 7.3",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Octomore 7.4",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Octomore 8.1",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Octomore 8.2",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Octomore 8.3",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Octomore 8.4",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Octomore 9.1",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Octomore 9.3",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Port Charlotte 10yo Heavily Peated (First Edition)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Port Charlotte 10yo Heavily Peated (Second Edition)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Port Charlotte 2007 CC:01",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Port Charlotte 2009 MC:01",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Port Charlotte 2010 MRC:01",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Port Charlotte An Turas Mor",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Port Charlotte Islay Barley Heavily Peated",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Port Charlotte PC10 (Second Edition)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Port Charlotte PC10 Tro Na Linntean",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Port Charlotte PC11 Eorna Na H-Alba",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Port Charlotte PC12 Oileanach Furachail",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Port Charlotte Scottish Barley Heavily Peated",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Port Charlotte The Peat Project",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Rocks",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich Sherry Classic",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich The Organic (all editions)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich The Organic (Mid Coul, Coulmore, Mains of Tullibardine Farms)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich The Organic 2003",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich The Organic 2009",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bruichladdich The Organic 2010",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Buchanan's 12yo Deluxe Blended",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Buchanan's 18yo Special Reserve Blended",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Buchanan's Master Blended",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Buchanan's Red Seal Blended",
      "cost": "$$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Buffalo Trace Bourbon",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Buffalo Trace Experimental Collection 12yo floor #1 (rye, 2014)",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Buffalo Trace Experimental Collection 12yo floor #1 (wheat, 2015)",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Buffalo Trace Experimental Collection 12yo floor #5 (rye, 2014)",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Bulleit 10yo",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Bulleit Bourbon",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Bulleit Bourbon Barrel Strength",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Bulleit Rye",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Bunnahabhain 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bunnahabhain 14yo 2003 Pedro Ximenez Finish",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bunnahabhain 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bunnahabhain 25yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bunnahabhain 40yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bunnahabhain Ceòbanach",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bunnahabhain Cruach Mhona",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bunnahabhain Darach Ur",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bunnahabhain Eirigh Na Greine",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bunnahabhain Moine (all bottlings)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bunnahabhain Stiuireadair",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bunnahabhain Toiteach",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bunnahabhain Toiteach A Dha",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Bushmills 10yo Single Malt",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Bushmills 12yo Single Malt",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Bushmills 16yo Single Malt",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Bushmills 21yo Single Malt",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Bushmills Black Bush",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Bushmills Original Blended",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Bushmills Red Bush",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Bushmills Sherry Cask Reserve",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Canada Gold",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Canadian Club (Premium)",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Canadian Club 100% Rye",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Rye"
    },
    {
      "name": "Canadian Club 20yo",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Canadian Club 30yo",
      "cost": "$$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Canadian Club 40yo",
      "cost": "$$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Canadian Club 41yo Chronicles No. 1",
      "cost": "$$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Canadian Club 42yo Chronicles No. 2 The Dock Man",
      "cost": "$$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Canadian Club Barley Batch",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Canadian Club Classic 12yo (Small Batch)",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Canadian Club Reserve 10yo",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Canadian Club Reserve 9yo",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Canadian Club Sherry Cask",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Canadian Mist",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Canadian Mist Black Diamond",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Canadian Rockies 17yo",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Canadian Rockies 21yo (40%)",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Canadian Rockies 21yo (46%, new label)",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Canadian Rockies 21yo (46%, old label)",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Canadian Rockies 21yo (all editions)",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Canadian Rockies 35yo",
      "cost": "$$$$$+",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Caol Ila 12yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Caol Ila 15yo Unpeated 2018",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Caol Ila 17yo Unpeated 2015",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Caol Ila 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Caol Ila 18yo Unpeated 2017",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Caol Ila 25yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Caol Ila 30yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Caol Ila 35yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Caol Ila Distiller's Edition (all editions)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Cardhu 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Cardhu Amber Rock",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Caribou Crossing Single Barrel",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Catto's 12yo",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Catto's Rare Old",
      "cost": "$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Centennial 10yo",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Century Reserve 21yo",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Century Reserve Lot 15/25",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Chivas Regal 12yo",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Chivas Regal 18yo",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Chivas Regal 25yo",
      "cost": "$$$$$+",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Chivas Regal Mizunara",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Chivas Regal Ultis",
      "cost": "$$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Chivas Royal Salute 21yo",
      "cost": "$$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Clynelish 14yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Collingwood",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Collingwood 21yo",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Colonel E.H. Taylor Four Grain",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Colonel E.H. Taylor Single Barrel",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Colonel E.H. Taylor Small Batch (BiB)",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Colonel E.H. Taylor Straight Rye",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Colonel EH. Taylor Barrel Proof",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Compass Box 3yo Deluxe",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Affinity",
      "cost": "$$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Compass Box Asyla",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Compass Box Delilah's",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Compass Box Delilah's XXV",
      "cost": "$$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Compass Box Double Single",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Compass Box Double Single (all editions)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Compass Box Eleuthera",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Enlightenment",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Flaming Heart (all editions)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Flaming Heart 2008 2nd Edition",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Flaming Heart 2010 3rd Edition - 10th Anniversary",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Flaming Heart 2012 4th Edition",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Flaming Heart 2015 5th Edition - 15th Anniversary",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Flaming Heart 2018 6th Edition",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Great King St Artist's Blend",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Compass Box Great King St Glasgow Blend",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Compass Box Hedonism",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Compass Box Hedonism Quindecimus",
      "cost": "$$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Compass Box Hedonism The Muse",
      "cost": "$$$$$+",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Compass Box Juveniles",
      "cost": "$$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Compass Box Lady Luck",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Last Vatted Malt",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Monster 2004",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box No Name",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box No Name (all editions)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box No Name No. 2",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Oak Cross",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Orangerie",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Compass Box Peat Monster (all editions)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Peat Monster 2005",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Peat Monster 2008 Reserve Edition",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Peat Monster 2010",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Peat Monster 2012",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Peat Monster 2014 - 10th Anniversary",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Peat Monster 2015",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Peat Monster 2015 Cask Strength",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Phenomenology",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Rivals",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Compass Box Spice Tree",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box Spice Tree Extravaganza",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box The Circle",
      "cost": "$$$$$+",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Compass Box The Circus",
      "cost": "$$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Compass Box The General",
      "cost": "$$$$$+",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Compass Box The Lost Blend",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box The Story of the Spaniard",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Compass Box This is Not a Luxury Whisky",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Connemara Peated Single Malt",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Connemara Turf Mor",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Copperworks American Single Malt",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "USA",
      "type": "Malt"
    },
    {
      "name": "Corner Creek Reserve Bourbon",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Coyote Ugly",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Cragganmore 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Cragganmore 25yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Cragganmore NAS (Special Release 2016)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Craigellachie 13yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Craigellachie 14yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Craigellachie 17yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Craigellachie 23yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Crown Royal",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Crown Royal Black",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Crown Royal Blender's Select",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Crown Royal Bourbon Mash (Blender's Mash)",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Crown Royal Hand Selected Barrel",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Crown Royal Limited Edition",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Crown Royal Monarch 75th Anniversary",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Crown Royal Noble Collection Blender's Mash 13yo",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Crown Royal Noble Collection Cornerstone Blend",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Crown Royal Noble Collection French Oak Cask Finished",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Crown Royal Noble Collection Wine Barrel Finished",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Crown Royal Northern Harvest Rye",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Crown Royal Reserve",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Crown Royal XO",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Cutty Sark",
      "cost": "$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Cutty Sark Prohibition",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Cutty Sark Storm",
      "cost": "$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Dalmore 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Dalmore 15yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Dalmore 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Dalmore Cigar Malt",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Dalmore Cigar Malt Reserve",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Dalmore Gran Reserva",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Dalmore King Alexander III",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Dalmore Port Wood Reserve",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Dalmore Valour",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Dalwhinnie 15yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Dalwhinnie Distillers Edition",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Danfield's 21yo",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Deanston 10yo PX Finish",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Deanston 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Deanston 18yo (Bourbon Finish)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Deanston 2008 Bordeaux Red Wine Cask Matured",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Deanston Virgin Oak",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Deveron 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Deveron 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Deveron 18yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Dewar's 12yo",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Dewar's White Label",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Dun Bheagan Islay (all vintage editions)",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Dun Bheagan Islay 1999",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Dun Bheagan Islay 2009",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Eagle Rare 10yo",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Eagle Rare 17yo",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Edradour 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Edradour Ballechin 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Elements of Islay \"Peat",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Elijah Craig 12yo",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Elijah Craig 18yo",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Elijah Craig 21yo",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Elijah Craig Barrel Proof",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Elijah Craig Small Batch (NAS)",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Ellington Reserve 8yo",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Elmer T. Lee Single Barrel Bourbon",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Evan Williams (Black Label)",
      "cost": "$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Evan Williams 1783 Small Batch",
      "cost": "$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Evan Williams Bottled in Bond (White label)",
      "cost": "$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Evan Williams Single Barrel",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Ezra B 12yo Single Barrel",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Ezra Brooks 7yo Old Ezra 101",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Ezra Brooks Black Label",
      "cost": "$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Ezra Brooks Rye",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Famous Grouse",
      "cost": "$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Famous Grouse Gold Reserve 12yo",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Famous Grouse Smoky Black (Black Grouse)",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Famous Jubilee",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Fettercairn Fior",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "FEW Bourbon",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "FEW Rye Whisky",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "FEW Single Malt",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "USA",
      "type": "Malt"
    },
    {
      "name": "Finlaggan Old Reserve",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Forty Creek 22yo",
      "cost": "$$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Forty Creek Barrel Select",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Forty Creek Confederation Oak (All Batches)",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Forty Creek Confederation Oak (Batch A, B)",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Forty Creek Confederation Oak (Batch C, D)",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Forty Creek Confederation Oak (Batch E, F)",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Forty Creek Confederation Oak (Batch G, H, I)",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Forty Creek Copper Pot Reserve",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Forty Creek Double Barrel Reserve",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Forty Creek Evolution",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Forty Creek Founder's Reserve",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Forty Creek Heart of Gold",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Forty Creek Heritage 2017",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Forty Creek Port Wood Reserve 2011/2012",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Forty Creek Three Grain Harmony",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Forty Creek Unity",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Four Roses (Yellow Label)",
      "cost": "$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Four Roses Single Barrel Bourbon",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Four Roses Small Batch Bourbon",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Four Roses Small Batch Limited Edition",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Game of Thrones House Baratheon Royal Lochnagar 12 ans",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Game of Thrones House Greyjoy Talisker Select Reserve",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Game of Thrones House Lannister Lagavulin 9yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Game of Thrones House Stark Dalwhinnie Winter’s Frost",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Game of Thrones House Targaryen Cardhu Gold Reserve",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Game of Thrones House Tully Singleton Glendullan Select",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Game of Thrones House Tyrell Clynelish Reserve",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Game of Thrones The Night’s Watch Oban Bay Reserve",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "George Dickel No.12",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "George Dickel Rye",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "George T Stagg",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Gibson's Bold 8yo",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Gibson's Finest 12yo",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Gibson's Finest Rare 18yo",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Gibson's Finest Sterling",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Glen Breton 10yo Rare",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Glen Breton 14yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Glen Breton 15yo Battle of the Glen",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Glen Breton 21yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Glen Breton Ice 10yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Glen Breton Ice 12yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Glen Breton Ice 17yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Glen Deveron 10yo (Macduff)",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Elgin 12yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Garioch 12yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Garioch 15yo Renaissance Chapter 1",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Garioch 15yo Wine Cask Matured",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Garioch 16yo Renaissance Chapter 2",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Garioch 1991",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Garioch 1994",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Garioch 1995",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Garioch 1997",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Garioch 1998 Wine Cask Matured",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Garioch 1999 Sherry Cask Matured",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Garioch Founder's Reserve",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Garioch Virgin Oak",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Grant 10yo",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Grant 10yo (G&M)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Grant 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Grant 16yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Grant 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Grant 25yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Grant Five Decades",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Grant The Major's Reserve",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Moray 10yo Chardonnay Cask",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Moray 12yo",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Moray 12yo Chenin Blanc",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Moray 16yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Moray 16yo Chenin Blanc",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Moray Classic",
      "cost": "$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Moray Classic Peated",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Moray Classic Port Cask finish",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Moray Classic Sherry Cask finish",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Scotia 12yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Scotia 14yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Scotia 15yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Scotia 18yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Scotia 21yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Scotia 25yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Scotia Double Cask",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glen Spey 12yo (F&F)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenburgie 10yo (Gordon & MacPhail)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glencadam 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glencadam 12yo Port Wood Finish",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glencadam 14yo Oloroso Sherry Cask Finish",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glencadam 15yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glencadam 21yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glencadam 25yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glencadam 30yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glencadam Origin 1825 (NAS)",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glendalough 13yo Single Malt",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Glendalough 7yo Single Malt",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Glendalough Double Barrel",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Grain"
    },
    {
      "name": "GlenDronach 12yo Original",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach 12yo Sauternes Cask Finish",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach 14yo Sauternes Cask Finish",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach 14yo Virgin Oak",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach 15yo Revival",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach 15yo Tawny Port Finish",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach 18yo Allardice",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach 18yo Marsala Finish",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach 18yo Tawny Port Finish",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach 19yo Madeira Finish",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach 21yo Parliament",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach 8yo The Hielan",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach Cask Strength (all batches)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach Cask Strength (batch 1)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach Cask Strength (batch 2)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach Cask Strength (batch 3)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach Cask Strength (batch 4)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach Cask Strength (batch 5)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach Cask Strength (batch 6)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach Cask Strength (batch 7)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach Peated",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach Peated Port Wood",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach vintage 19yo Single Cask (all vintages)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "GlenDronach vintage 20yo Single Cask (all vintages)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfarclas 105",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfarclas 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfarclas 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfarclas 15yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfarclas 17yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfarclas 1968-2000 54.2% (OB, Old Stock Reserve, Ceramic)",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfarclas 21yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfarclas 25yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfarclas 40yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich 12yo Caoran Reserve",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich 14yo Bourbon Barrel Reserve",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich 14yo Rich Oak",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich 15yo Distillery Edition",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich 15yo Solera",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich 1963 Original Malt",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich 19yo Age of Discovery (Bourbon Cask)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich 19yo Age of Discovery (Madeira Cask)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich 21yo Gran Reserva",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich 26yo Excellence",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich 30yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich Cask of Dreams",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich Fire & Cane Experimental Series No. 4",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich IPA Cask Finish Experimental Series No. 1",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich Malt Master's Edition",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich Project XX Experimental Series No. 2",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich Reserve Cask",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich Select Cask",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich Snow Phoenix",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich Vintage Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenfiddich Winter Storm 21yo Experimental Series No. 3",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenglassaugh 26yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenglassaugh Evolution",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenglassaugh Octaves Classic",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenglassaugh Octaves Peated",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenglassaugh Revival",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenglassaugh Torfa",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glengoyne 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glengoyne 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glengoyne 12yo Cask Strength",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glengoyne 15yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glengoyne 17yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glengoyne 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glengoyne 21yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glengoyne 25yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glengoyne 40yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glengoyne Cask Strength (all batches)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glengoyne Cask Strength (batch 1)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glengoyne Cask Strength (batch 2)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glengoyne Cask Strength (batch 3)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glengoyne Cask Strength (batch 4)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glengoyne Cask Strength (batch 7)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glengoyne Teapot Dram (all batches)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenkinchie 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenkinchie Distiller's Edition (all editions)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenlivet 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenlivet 15yo French Oak",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenlivet 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenlivet 21yo Archive (all batches)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenlivet Alpha",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenlivet Cipher",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenlivet Founder's Reserve",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenlivet Nadurra 16yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenlivet Nadurra Cask Strength (NAS)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenlivet Nadurra First Fill (White Oak)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenlivet Nadurra Oloroso",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenlivet Nadurra Peated Cask Finish",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenlivet XXV 25yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenlossie 10yo (F&F)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenmorangie 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenmorangie 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenmorangie A Midwinter Night’s Dram",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenmorangie Astar",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenmorangie Bacalta",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenmorangie Companta",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenmorangie Dornoch",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenmorangie Duthac",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenmorangie Ealanta",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenmorangie Lasanta",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenmorangie Milsean",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenmorangie Nectar d'Or",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenmorangie Quinta Ruban",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenmorangie Signet",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenmorangie Spios Private Edition No 9",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenmorangie The Taghta",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenmorangie The Tarlogan",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenmorangie The Tayne",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenmorangie Tusail",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenrothes 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenrothes 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenrothes 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenrothes 25yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenrothes Alba Reserve",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenrothes Bourbon Cask Reserve",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenrothes Elders' Reserve",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenrothes Manse Reserve",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenrothes Minister's Reserve",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenrothes Peated Cask Reserve",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenrothes Robur Reserve",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenrothes Select Reserve",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenrothes Sherry Cask Reserve",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenrothes Vintage 1995 (all bottlings)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenrothes Vintage 1998 (2014)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenrothes Vintage 2001 (all bottlings)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenrothes Vintage Reserve (NAS)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenrothes Whisky Maker's Cut",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glentauchers 1991 18yo (Gordon & MacPhail)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Glenturret 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Gooderham & Worts 17yo Little Trinity Three Grain (2017)",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Gooderham & Worts 19yo 49 Wellington (2019)",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Gooderham & Worts Eleven Souls Four Grain (2018)",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Gooderham & Worts Four Grain",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Gouden Carolus Single Malt",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Belgium",
      "type": "Malt"
    },
    {
      "name": "Grand Macnish",
      "cost": "$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Grant's 12yo",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Grant's 18yo",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Grant's Blended Sherry Cask",
      "cost": "$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Grant's Family Reserve Blended",
      "cost": "$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Green Spot",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Green Spot Chateau Leoville Barton",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Green Spot Chateau Montelena",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Hakushu 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Hakushu 12yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Hakushu 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Hakushu Distiller's Reserve",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Hakushu NAS",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Hakushu Sherry Cask",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Hakushu Single Malt Heavily Peated",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Hankey Bannister 12yo Regency",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Hankey Bannister 21yo Partner's Reserve",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Hankey Bannister Heritage",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Hankey Bannister Original",
      "cost": "$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Hazelburn 12yo (Springbank)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Hazelburn 8yo (Springbank)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Heaven Hill 6yo BiB",
      "cost": "$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Heaven Hill 7yo BiB",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Heaven Hill Old Syle Bourbon (white label)",
      "cost": "$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Heaven Hill Select Stock Barrel",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Heaven Hill Trybox Series New Make",
      "cost": "$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Henry McKenna 10yo Single Barrel BiB",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Henry McKenna Straight Bourbon",
      "cost": "$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Hibiki 12yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Japan",
      "type": "Blend"
    },
    {
      "name": "Hibiki 17yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Japan",
      "type": "Blend"
    },
    {
      "name": "Hibiki 21yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Japan",
      "type": "Blend"
    },
    {
      "name": "Hibiki Harmony",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Japan",
      "type": "Blend"
    },
    {
      "name": "Hibiki Harmony Master's Select",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Japan",
      "type": "Blend"
    },
    {
      "name": "High West American Prairie",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "High West Bourye",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Blend"
    },
    {
      "name": "High West Campfire",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "USA",
      "type": "Blend"
    },
    {
      "name": "High West Double Rye (all bottlings)",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "High West Double Rye (new recipe, post-2018)",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "High West Double Rye (pre-2018)",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "High West Double Rye Campfire Barrel",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "High West Double Rye Manhattan Barrel",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "High West Midwinter Night’s Dram Rye",
      "cost": "$$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "High West Rendezvous Rye (all bottlings)",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "High West Rendezvous Rye (pre-2018)",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "High West Rocky Mountain Rye 16yo",
      "cost": "$$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "High West Rocky Mountain Rye 21yo",
      "cost": "$$$$$+",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "High West Son of Bourye",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Blend"
    },
    {
      "name": "High West Yippee Ki-Yay",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Highland Park 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park 10yo Viking Scars",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park 12yo (all reviews)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park 12yo (reviews 2014-2017)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park 12yo (reviews pre-2014)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park 12yo Saint Magnus",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park 12yo Viking Honour (post-2017)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park 15yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park 15yo Fire",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park 15yo Freya",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park 15yo Loki",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park 16yo Odin",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park 16yo Thor",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park 17yo Ice",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park 17yo The Dark",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park 17yo The Light",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park 21yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park 25yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park 30yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park 40yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park Dark Origins",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park Einar",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park Full Volume",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park Harald",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park Magnus (2017)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park Sigurd",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park Svein",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park Valknut",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Park Valkyrie",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Highland Queen",
      "cost": "$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Highwood Ninety 5yo",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Highwood Ninety Rye 20yo",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Hiram Walker Special Old Rye",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Ichiro's Malt & Grain World Blended",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Japan",
      "type": "Blend"
    },
    {
      "name": "Ichiro's Malt Chichibu On The Way",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Ichiro's Malt Chichibu The First",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Ichiro's Malt Chichibu The Floor Malted",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Ichiro's Malt Chichibu The Peated",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Ichiro's Malt Double Distilleries",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Ichiro's Malt Mizunara Wood Reserve (MWR)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Ichiro's Malt The Joker",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Ileach Peated Islay",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ileach Peated Islay Cask Strength",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Inchgower 14yo (F&F)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Islay Mist 8yo",
      "cost": "$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "J&B Rare",
      "cost": "$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "J.P. Wiser's 15yo",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "J.P. Wiser's 18yo",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "J.P. Wiser's 23yo Cask Strength Blend (2019)",
      "cost": "$$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Rye"
    },
    {
      "name": "J.P. Wiser's 35yo (2017)",
      "cost": "$$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Rye"
    },
    {
      "name": "J.P. Wiser's 35yo (2018)",
      "cost": "$$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Rye"
    },
    {
      "name": "J.P. Wiser's Alumni Series Darryl Sitter 10yo",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Rye"
    },
    {
      "name": "J.P. Wiser's Alumni Series Dave Keon 14yo",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Rye"
    },
    {
      "name": "J.P. Wiser's Alumni Series Guy Lafleur 10yo",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "J.P. Wiser's Alumni Series Lanny MacDonald 9yo",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "J.P. Wiser's Alumni Series Larry Robinson 6yo",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Rye"
    },
    {
      "name": "J.P. Wiser's Alumni Series Mark Messier 11yo",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Rye"
    },
    {
      "name": "J.P. Wiser's Alumni Series Paul Coffey 7yo",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Rye"
    },
    {
      "name": "J.P. Wiser's Alumni Series Wendel Clark 11yo",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Rye"
    },
    {
      "name": "J.P. Wiser's Alumni Series Yvan Cournoyer 12yo",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Rye"
    },
    {
      "name": "J.P. Wiser's Canada 2018",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Rye"
    },
    {
      "name": "J.P. Wiser's Deluxe",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "J.P. Wiser's Dissertation",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "J.P. Wiser's Double Still Rye",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "J.P. Wiser's Hopped",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "J.P. Wiser's Last Barrels",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "J.P. Wiser's Legacy",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "J.P. Wiser's One Fifty",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "J.P. Wiser's Red Letter",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "J.P. Wiser's Rye",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "J.P. Wiser's Seasoned Oak 19yo",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "J.P. Wiser's Small Batch",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "J.P. Wiser's Special Blend",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "J.P. Wiser's Triple Barrel Rye",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "J.P. Wiser's Union 52",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Jack Daniel's 150th Anniversary",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Jack Daniel's Gentleman Jack",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Jack Daniel's Master Distiller (all series)",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Jack Daniel's No. 27 Gold Double Barrelled",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Jack Daniel's Old No. 7",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Jack Daniel's Rested Tennessee Rye (Batch 1/2)",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Jack Daniel's Single Barrel",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Jack Daniel's Single Barrel Rye",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Jameson 12yo Special Reserve",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Jameson 18yo Limited Reserve",
      "cost": "$$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Jameson Blender's Dog Irish Whiskey",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Jameson Bold Irish Whiskey",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Jameson Caskmates Stout Edition",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Jameson Cooper's Croze Irish Whiskey",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Jameson Crested Irish Whiskey",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Jameson Distiller's Safe Irish Whiskey",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Jameson Gold Reserve",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Jameson Irish Whiskey",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Jameson Lively Irish Whiskey",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Jameson Round Irish Whiskey",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Jameson Select Reserve (Black Barrel)",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Jameson Signature Reserve",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Jefferson's 18yo Presidential Select",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Jefferson's Ocean",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Jefferson's Ocean Aged at Sea",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Jefferson's Reserve Very Old Kentucky Straight Bourbon",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Jefferson's Straight Rye 10yo",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Jefferson's Very Small Batch Bourbon",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Jim Beam 12yo Signature Craft",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Jim Beam Black Label",
      "cost": "$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Jim Beam Bonded",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Jim Beam Devil's Cut",
      "cost": "$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Jim Beam Distillers Masterpiece PX Sherry Cask Finish",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Jim Beam Distillers Series",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Jim Beam Double Oak",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Jim Beam Pre-Prohibition Rye",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Jim Beam Red Stag (Black Cherry)",
      "cost": "$",
      "class": "Bourbon-like",
      "cluster": "",
      "country": "USA",
      "type": "Flavoured"
    },
    {
      "name": "Jim Beam Rye",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Jim Beam Single Barrel",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Jim Beam White Label",
      "cost": "$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "John Barr Reserve (Black Label)",
      "cost": "$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Johnnie Walker 10yo Rye Cask Finish",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Johnnie Walker 12yo Black Label",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Johnnie Walker 15yo Green Label",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Johnnie Walker Blue Label",
      "cost": "$$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Johnnie Walker Double Black",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Johnnie Walker Explorer’s Club The Adventurer",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Johnnie Walker Explorer’s Club The Gold Route",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Johnnie Walker Explorer’s Club The Royal Route",
      "cost": "$$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Johnnie Walker Explorer’s Club The Spice Road",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Johnnie Walker Gold Label Reserve",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Johnnie Walker Platinum Label",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Johnnie Walker Red Label",
      "cost": "$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Johnnie Walker White Walker (Game of Thrones)",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Jura 10yo Origin",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Jura 12yo Elixir",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Jura 16yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Jura 16yo Diurach's Own",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Jura 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Jura 21yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Jura 21yo 200th Anniversary",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Jura Brooklyn",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Jura Prophecy",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Jura Seven Wood",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Jura Superstition",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Jura Turas Mara",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kakubin Yellow Label (Suntory Whisky)",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Japan",
      "type": "Blend"
    },
    {
      "name": "Kanosuke New Born 2018 8mo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Karuizawa 1990 Sherry Butt",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Karuizawa Asama Vintages 1999-2000",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Kavalan Brandy Oak",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Taiwan",
      "type": "Malt"
    },
    {
      "name": "Kavalan Concertmaster Port Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Taiwan",
      "type": "Malt"
    },
    {
      "name": "Kavalan Distillery Reserve Peaty Cask",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Taiwan",
      "type": "Malt"
    },
    {
      "name": "Kavalan Distillery Reserve Rum Cask",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Taiwan",
      "type": "Malt"
    },
    {
      "name": "Kavalan ex-Bourbon Oak",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Taiwan",
      "type": "Malt"
    },
    {
      "name": "Kavalan King Car Conductor",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Taiwan",
      "type": "Malt"
    },
    {
      "name": "Kavalan Podium",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Taiwan",
      "type": "Malt"
    },
    {
      "name": "Kavalan Sherry Oak",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Taiwan",
      "type": "Malt"
    },
    {
      "name": "Kavalan Single Malt Whisky",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Taiwan",
      "type": "Malt"
    },
    {
      "name": "Kavalan Solist Amontillado Cask",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Taiwan",
      "type": "Malt"
    },
    {
      "name": "Kavalan Solist Ex-Bourbon",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Taiwan",
      "type": "Malt"
    },
    {
      "name": "Kavalan Solist Fino Sherry Cask",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Taiwan",
      "type": "Malt"
    },
    {
      "name": "Kavalan Solist Manzanilla Cask",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Taiwan",
      "type": "Malt"
    },
    {
      "name": "Kavalan Solist Moscatel Cask",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kavalan Solist Port Cask",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kavalan Solist PX Cask",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Taiwan",
      "type": "Malt"
    },
    {
      "name": "Kavalan Solist Sherry Cask",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Taiwan",
      "type": "Malt"
    },
    {
      "name": "Kavalan Solist Vinho Barrique",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Taiwan",
      "type": "Malt"
    },
    {
      "name": "Kilbeggan 8yo Single Grain (Greenore)",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Grain"
    },
    {
      "name": "Kilbeggan Irish Reserve Malt Whiskey",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Kilchoman 100% Islay (all editions)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kilchoman 2007 Vintage",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kilchoman 2008 Vintage",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kilchoman 2009 Vintage",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kilchoman Bourbon Single Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kilchoman Coull Point",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kilchoman Loch Gorm",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kilchoman Machir Bay (all vintages)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kilchoman Madeira Cask Matured",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kilchoman Original Cask Strength",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kilchoman Port Cask Matured",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kilchoman PX Sherry Finish",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kilchoman Sanaig",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kilchoman Sauternes Cask Matured",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kilchoman Sherry Single Cask",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kilchoman Spring 2011 Release",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kilchoman Winter 2010 Release",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kilkerran 12yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kilkerran 8yo Cask Strength",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kilkerran Work in Progress",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kilkerran Work in Progress Bourbon Wood",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kilkerran Work in Progress Sherry Wood",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kininvie 17yo (all batches)",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kininvie 23yo (all batches)",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Kirin 18yo (Fuji Sanroku)",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Kirin 50% Blend (Fuji Gotemba)",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Japan",
      "type": "Blend"
    },
    {
      "name": "Knappogue Castle 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Knappogue Castle 14yo Twin Wood",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Knappogue Castle 16yo Twin Wood",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Knappogue Castle Vintage",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Knob Creek Single Barrel Reserve Bourbon",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Knob Creek Small Batch 9yo Bourbon",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Knob Creek Small Batch Straight Rye Whiskey",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Knockando 12yo (All Vintages)",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Koval Single Barrel Bourbon",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Koval Single Barrel Four Grain",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Grain"
    },
    {
      "name": "Koval Single Barrel Millet Whiskey",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Grain"
    },
    {
      "name": "Koval Single Barrel Rye",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Lagavulin 11yo Offerman Edition",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Lagavulin 12yo Cask Strength",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Lagavulin 16yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Lagavulin 8yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Lagavulin Distiller's Edition (All Vintages)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Laphroaig 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Laphroaig 10yo Cask Strength (all batches)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Laphroaig 15yo (200th Anniversary)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Laphroaig 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Laphroaig 21yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Laphroaig 25yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Laphroaig 27yo 57.4% 1980-2007 (OB, 5 Oloroso Casks, 972 Bts)",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Laphroaig An Cuan Mor",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Laphroaig Cairdeas 2013 Port Wood",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Laphroaig Cairdeas 2014 Amontillado",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Laphroaig Cairdeas 2015",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Laphroaig Cairdeas 2016 Madeira",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Laphroaig Cairdeas 2017",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Laphroaig Cairdeas 2018 Fino",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Laphroaig Cairdeas 2019 Triple Wood Cask Strength",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Laphroaig Lore",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Laphroaig PX Triple Matured",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Laphroaig QA Cask",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Laphroaig Quarter Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Laphroaig Select",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Laphroaig Triple Wood",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Larceny Small Batch Bourbon",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Ledaig 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ledaig 13yo Amontillado Cask Finish",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ledaig 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ledaig 1996",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ledaig 19yo 1998 Pedro Ximénez Finish",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ledaig 19yo Marsala Finish",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ledaig 42yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ledaig 42yo Dusgadh",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Legent Bourbon",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Linkwood 12yo (F&F)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Lismore 21yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Little Book (all Chapters)",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "USA",
      "type": "Blend"
    },
    {
      "name": "Little Book Chapter 1 The Easy",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "USA",
      "type": "Blend"
    },
    {
      "name": "Little Book Chapter 2 Noe Simple Task",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "USA",
      "type": "Blend"
    },
    {
      "name": "Little Book Chapter 3 The Road Home",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "USA",
      "type": "Blend"
    },
    {
      "name": "Loch Lomond NAS",
      "cost": "$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Lohin McKinnon Barley and Rye Lightly Peated",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Lohin McKinnon Choclolate Malt",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Lohin McKinnon Peated",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Lohin McKinnon Single Malt",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Lohin McKinnon Wine Barrel Finished (Black Sage)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Longmorn 15yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Longmorn 16yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Longmorn Distiller's Choice",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Longrow 10yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Longrow 10yo Tokaji Finish",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Longrow 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Longrow 7yo Gaja Barolo Finish",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Longrow CV",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Longrow Peated",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Longrow Red 11yo Australian Shiraz",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Longrow Red 11yo Cabernet Sauvignon",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Longrow Red 11yo Port Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Longrow Red 12yo Pinot Noir Finish",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Longrow Red 14yo Burgundy Wood",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Lot 40",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Rye"
    },
    {
      "name": "Lot 40 Cask Strength (Single Cask)",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Rye"
    },
    {
      "name": "Lot 40 Cask Strength 11yo (2018)",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Rye"
    },
    {
      "name": "Lot 40 Cask Strength 12yo (2017)",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Rye"
    },
    {
      "name": "Lot 40 Cask Strength Third Edition (2019)",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Rye"
    },
    {
      "name": "Macallan 10yo Fine Oak",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan 10yo Sherry Oak",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan 10yo Sherry Oak Cask Strength",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan 12yo Double Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan 12yo Fine Oak",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan 12yo Sherry Oak",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan 15yo Fine Oak",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan 17yo Fine Oak",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan 18yo Fine Oak",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan 18yo Sherry Oak",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan 21yo Fine Oak",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan 25yo Fine Oak",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan 25yo Sherry Oak",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan 30yo Fine Oak",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan Amber",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan Cask Strength",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan Classic Cut (all editions)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan Edition No. 1",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan Edition No. 2",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan Edition No. 3",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan Edition No. 4",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan Edition No. 5",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan Gold",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan Gold Double Cask",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan Rare Cask (all batches)",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan Reflexion",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan Ruby",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan Select Oak",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan Sienna",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Macallan Whisky Maker's Edition",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Mackinlay's Shackleton Blended Malt",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Mackinlay's Shackleton Rare Old Highland Malt (both limited editions)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Mackinlay's Shackleton Rare Old Highland Malt Discovery edition",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Mackinlay's Shackleton Rare Old Highland Malt Journey edition",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Blomstertid",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Iskristall",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Mack",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Midnattssol",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Midvinter",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Moment Glöd",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Moment Jakt",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Moment Jord",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Moment Källa",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Moment Malström (Maelstrom)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Moment Rimfrost",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Moment Solsken",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Moment Urberg",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Preludium 03",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Reserve Single Cask (various casks)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Skordetid",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Special 01",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Special 02",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Special 03",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Special 04",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Special 05",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Special 07",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Special 08",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Special 09",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Special 10",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Svensk Ek",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Svensk Rök",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Ten Years 10yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra The First Edition (Den Första Utgåvan)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra The Swedish Whisky (Brukswhisky)",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Vinterdrom",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Mackmyra Vit Hund",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Maker's Mark",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Maker's Mark 46",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Maker's Mark Cask Strength",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Mannochmore 12yo (F&F)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Mars Iwai Tradition",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Japan",
      "type": "Blend"
    },
    {
      "name": "Mars Kogamatake The Revival 2011",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Mars Maltage Cosmo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Masterson's Straight Barley 10yo",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Barley"
    },
    {
      "name": "Masterson's Straight Rye 10yo",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Rye"
    },
    {
      "name": "Masterson's Straight Wheat 12yo",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Wheat"
    },
    {
      "name": "Matsui Mizunara Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Matsui Sakura Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "McClelland's Highland Single Malt",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "McClelland's Islay Single Malt",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "McClelland's Lowland Single Malt",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "McClelland's Speyside Single Malt",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Mellow Corn BiB",
      "cost": "$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Michter's 10yo Single Barrel Bourbon",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Michter's 10yo Single Barrel Rye",
      "cost": "$$$$$+",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Michter's 20yo Single Barrel Bourbon",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Michter's Barrel Strength Rye",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Michter's Single Barrel Straight Rye",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Michter's Small Batch US*1 Bourbon",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Michter's Sour Mash",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Michter's Toasted Barrel",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Midleton Barry Crockett Legacy",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Midleton Dair Ghaelach",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Midleton Very Rare (all vintages)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Midleton Very Rare 2015",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Midleton Very Rare 2016",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Midleton Very Rare 2017",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Millstone 100 Rye",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Netherlands",
      "type": "Rye"
    },
    {
      "name": "Millstone 12yo Sherry Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Netherlands",
      "type": "Malt"
    },
    {
      "name": "Millstone 8yo French Oak",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Netherlands",
      "type": "Malt"
    },
    {
      "name": "Milstone Peated",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Netherlands",
      "type": "Malt"
    },
    {
      "name": "Miltonduff 10yo (F&F)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Mister Sam Tribute Whisky",
      "cost": "$$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Monkey Shoulder",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Mortlach 12yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Mortlach 15yo (Gordon & MacPhail)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Mortlach 16yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Mortlach 16yo (F&F)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Mortlach 18yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Mortlach Rare Old",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Mortlach Special Strength",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Nikka 12yo Premium Blended",
      "cost": "$$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Japan",
      "type": "Blend"
    },
    {
      "name": "Nikka All Malt",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Nikka Blended",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Japan",
      "type": "Blend"
    },
    {
      "name": "Nikka Coffey Grain",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Japan",
      "type": "Grain"
    },
    {
      "name": "Nikka Coffey Malt",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Nikka Days",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Japan",
      "type": "Blend"
    },
    {
      "name": "Nikka From the Barrel",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Japan",
      "type": "Blend"
    },
    {
      "name": "Nikka Gold & Gold",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Nikka Miyagikyo 10yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Nikka Miyagikyo 12yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Nikka Miyagikyo 15yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Nikka Miyagikyo NAS",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Nikka Pure Malt Black",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Nikka Pure Malt Red",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Nikka Pure Malt White",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Nikka Single Cask Coffey Malt 12yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Nikka Super Nikka",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Japan",
      "type": "Blend"
    },
    {
      "name": "Nikka Taketsuru 12yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Nikka Taketsuru 17yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Nikka Taketsuru 21yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Nikka Taketsuru NAS",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Nikka Yoichi 10yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Nikka Yoichi 12yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Nikka Yoichi 15yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Nikka Yoichi NAS",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Oban 14yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Oban 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Oban 21yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Oban Distillers Edition (all vintages)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Oban Little Bay",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ohishi Brandy Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ohishi Sherry Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Ohishi Sherry Single Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Okanagan Spirits Laird of Fintry (all editions)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Old Ballantruan Peated (Toumintoul)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Old Fitzgerald BiB",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Old Fitzgerald Kentucky Straight Bourbon",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Old Forester",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Old Forester 1870 Original Batch",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Old Forester 1897 BiB",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Old Forester 1920 Prohibition Style",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Old Forester Birthday (all editions)",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Old Forester Signature (100 Proof)",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Old Forester Statesman",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Old Grand-Dad Bourbon (80/86 Proof)",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Old Grand-Dad Bourbon 100 BiB",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Old Grand-Dad Bourbon 114",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Old Overholt",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Old Overholt Bonded",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Old Pulteney 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Old Pulteney 15yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Old Pulteney 17yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Old Pulteney 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Old Pulteney 21yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Old Pulteney 25yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Old Pulteney Huddart",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Old Pulteney Navigator",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Old Rip Van Winkle 10yo",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Old Weller Antique 107",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Orphan Barrel Barterhouse Bourbon 20yo",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Orphan Barrel Entrapment Canadian 25yo",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "P&M Blended Whisky",
      "cost": "$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "France",
      "type": "Blend"
    },
    {
      "name": "Pappy Van Winkle Family Reserve Bourbon 15yo",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Pappy Van Winkle Family Reserve Bourbon 20yo",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Pappy Van Winkle Family Reserve Bourbon 23yo",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Parker’s Heritage 10th 24yo Kentucky Straight Bourbon",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Parker’s Heritage 11th 2017 11yo",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Parker’s Heritage 12th 2018 Finished in Orange Curaçao Barrels",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Parker’s Heritage 13th 2019 8yo Heavy Char Barrels Rye",
      "cost": "$$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Parker’s Heritage 1st",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Parker’s Heritage 2nd 27yo Kentucky Straight Boubon",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Parker’s Heritage 4th 10yo Wheated Mash Bill Bourbon",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Parker’s Heritage 5th 10yo Cognac Barrel Finished",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Parker’s Heritage 6th Blend of Mashbills",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Parker’s Heritage 7th 10yo Promise of Hope",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Parker’s Heritage 8th 13yo Wheat Whiskey",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Parker’s Heritage 9th 8yo Malt Whiskey",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Passport Blended Scotch",
      "cost": "$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Paul John Bold",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Paul John Brilliance",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Paul John Classic Select Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Paul John Edited",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Paul John Peated Select Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Paul John Single Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "India",
      "type": "Malt"
    },
    {
      "name": "Penderyn Aur Cymru",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Wales",
      "type": "Malt"
    },
    {
      "name": "Penderyn Celt",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Wales",
      "type": "Malt"
    },
    {
      "name": "Penderyn Legend",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Wales",
      "type": "Malt"
    },
    {
      "name": "Penderyn Madeira",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Wales",
      "type": "Malt"
    },
    {
      "name": "Penderyn Myth",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Wales",
      "type": "Malt"
    },
    {
      "name": "Penderyn Peated",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Wales",
      "type": "Malt"
    },
    {
      "name": "Penderyn Portwood",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Wales",
      "type": "Malt"
    },
    {
      "name": "Penderyn Sherrywood",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Wales",
      "type": "Malt"
    },
    {
      "name": "Pendleton (Let'er Buck)",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Pendleton 1910",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Pendleton Midnight",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Pig's Nose 5yo Blended Malt",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Pike Creek 10yo Port-finished",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Pike Creek 10yo Rum-finished",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Pike Creek 21yo Double Barrel European Oak Cask (2018)",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Pike Creek 21yo Double Barrel Speyside Cask Finish (2017)",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Pike Creek 21yo Finished in Oloroso Sherry Casks (2019)",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Pikesville Straight Rye",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Port Ellen (all OB releases)",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Port Ellen 10th release 31yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Port Ellen 11th release 32yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Port Ellen 12th release 32yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Port Ellen 14th release 35yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Port Ellen 15th release 32yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Port Ellen 16th release 37yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Port Ellen 17th release 37yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Port Ellen 2nd release 24yo 54.3%",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Port Ellen 2nd release 24yo 59.35%",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Port Ellen 3rd release 24yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Port Ellen 4th release 25yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Port Ellen 6th release 27yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Port Ellen 7th release 28yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Port Ellen 8th release 29yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Port Ellen 9th release 30yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Port Ellen Douglas Laing McGibbon's Provenance John Milroy 23yo (all editions)",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Potter's Special Old",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Powers 12yo John's Lane",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Powers 12yo Reserve",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Powers Gold Label",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Powers Signature Release",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Powers Three Swallow",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Prichard’s Rye",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Proof Whisky",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Rebel Yell Kentucky Bourbon",
      "cost": "$",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Red Spot 15yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Redbreast 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Redbreast 12yo Cask Strength",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Redbreast 15yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Redbreast 21yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Redbreast All Sherry Single Cask 1999",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Redbreast Lustau Edition",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Redbreast Mano a Lámh",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Redemption High Rye Bourbon",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Rich and Rare",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Rich and Rare Reserve",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Rittenhouse Rye 100 Proof",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Royal Brackla 12yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Royal Brackla 16yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Royal Brackla 21yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Royal Canadian Small Batch",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Royal Lochnagar 12yo",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Russell's Reserve 6yo Rye",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Russell's Reserve Single Barrel",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Russell's Reserve Small Batch 10yo Bourbon",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Santis Alpstein (all editions)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Switzerland",
      "type": "Malt"
    },
    {
      "name": "Santis Cask Strength Peated",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Switzerland",
      "type": "Malt"
    },
    {
      "name": "Santis Edition Dreifaltigkeit",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Switzerland",
      "type": "Malt"
    },
    {
      "name": "Santis Edition Dreifaltigkeit / Cask Strength Peated",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Switzerland",
      "type": "Malt"
    },
    {
      "name": "Santis Edition Säntis",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Switzerland",
      "type": "Malt"
    },
    {
      "name": "Santis Edition Sigel",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Switzerland",
      "type": "Malt"
    },
    {
      "name": "Sazerac 18yo",
      "cost": "$$$$$+",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Sazerac Straight Rye",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Scallywag",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Scallywag 13yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Scallywag Cask Strength (all batches)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Scapa 16yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Scapa Skiren",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Schenley Golden Wedding",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Seagram's Canadian 83",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Seagram's VO",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Sheep Dip 1999 Amoroso Blended Malt",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Sheep Dip Blended Malt",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Sheep Dip Old Hebridean 1990 Blended Malt",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Shelter Point Artisanal Cask Strength Whisky",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Shelter Point Artisanal Single Malt Whisky",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Shelter Point Classic Single Cask (KWM) Single Malt Whisky",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Shelter Point French Oak Double Barreled",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Shelter Point Montfort Lot 141 Reserve",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Silk Tassel",
      "cost": "$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Singleton of Dufftown 12yo",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Singleton of Dufftown 15yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Singleton of Dufftown 18yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Singleton of Dufftown Spey Cascade",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Singleton of Dufftown Tailfire",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Singleton of Dufftown Unité",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Singleton of Glen Ord 12yo",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Singleton of Glen Ord 15yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Singleton of Glen Ord 18yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Singleton of Glen Ord Signature",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Singleton of Glendullan 12yo",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Singleton of Glendullan 15yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Smogen 8yo (4,8-10/2011)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Smogen Primör",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Smogen Sherry Project 1:1",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Smogen Sherry Project 1:2",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Smogen Sherry Project 1:3",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Smogen Sherry Project 1:4",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Smogen Single Cask (all editions)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Smogen Single Cask 4yo 20/2011",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Smogen Single Cask 4yo 7/2011",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Smooth Ambler Contradiction Bourbon",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Smooth Ambler Old Scout 10yo Bourbon",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Smooth Ambler Old Scout 7yo Bourbon",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Smooth Ambler Old Scout 7yo Rye",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Smooth Ambler Old Scout Single Barrel Bourbon",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Smooth Ambler Old Scout Single Barrel Rye",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Smooth Ambler Old Scout Yearling Bourbon",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Speyburn 10yo",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Speyside 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Speyside 12yo",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Spirit of Hven Sankt Claus",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Spirit of Hven Seven Stars No. 1 Dubhe",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Spirit of Hven Seven Stars No. 2 Merak",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Spirit of Hven Seven Stars No. 3 Phecda",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Spirit of Hven Seven Stars No. 5 Alioth",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Spirit of Hven Tycho’s Star",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Spirit of Hven Urania",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Sweden",
      "type": "Malt"
    },
    {
      "name": "Springbank 10yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Springbank 11yo Local Barley",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Springbank 12yo Cask Strength",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Springbank 12yo Green",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Springbank 13yo Green",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Springbank 15yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Springbank 16yo Local Barley",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Springbank 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Springbank 21yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Springbank CV",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "St George's Chapter 6 (unpeated)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "England",
      "type": "Malt"
    },
    {
      "name": "St George's Chapter 9 (peated)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "England",
      "type": "Malt"
    },
    {
      "name": "Stagg Jr (all batches)",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Stagg Jr (batches 1-2)",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Stagg Jr (batches 3+)",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Stagg Jr batch 1 (134.4 proof)",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Stagg Jr batch 10 (126.4 proof)",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Stagg Jr batch 11 (127.9 proof)",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Stagg Jr batch 2 (128.7 proof)",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Stagg Jr batch 3 (132.1 proof)",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Stagg Jr batch 4 (132.2 proof)",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Stagg Jr batch 5 (129.7 proof)",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Stagg Jr batch 7 (129.5 proof)",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Stagg Jr batch 9 (116.8 proof)",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Stagg Jr batch 9 (131.9 proof)",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R1",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Stalk & Barrel 11+1 Canadian whisky",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Stalk & Barrel Blue Blend",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Stalk & Barrel Red Blend",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Stalk & Barrel Rye",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Stalk & Barrel Rye (Cask Strength)",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Stalk & Barrel Single Malt (All Casks)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Storas 21yo Rare Cask Reserves Blended",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Stranahan's Colorado Whiskey",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Strathisla 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Strathmill 12yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Strathmill 25yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Stronachie 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Stronachie 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Stronachie 18yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Sullivans Cove American Oak",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Tasmania",
      "type": "Malt"
    },
    {
      "name": "Sullivans Cove Bourbon Cask Strength",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Tasmania",
      "type": "Malt"
    },
    {
      "name": "Sullivans Cove Double Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Tasmania",
      "type": "Malt"
    },
    {
      "name": "Sullivans Cove French Oak",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Tasmania",
      "type": "Malt"
    },
    {
      "name": "Sullivans Cove Port Cask Strength",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Tasmania",
      "type": "Malt"
    },
    {
      "name": "Suntory Old Whisky",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Japan",
      "type": "Blend"
    },
    {
      "name": "Suntory The Chita Single Grain",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Japan",
      "type": "Blend"
    },
    {
      "name": "Suntory Toki",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Japan",
      "type": "Blend"
    },
    {
      "name": "Swiss Highland Classic Single Malt",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Switzerland",
      "type": "Malt"
    },
    {
      "name": "Té Bheag",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Talisker 10yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Talisker 15yo (Special Release 2019)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Talisker 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Talisker 25yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Talisker 30yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Talisker 35yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Talisker 57 North",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Talisker 8yo (Special Release 2018)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Talisker Dark Storm",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Talisker Distiller's Edition (all editions)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Talisker Port Ruighe",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Talisker Skye",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Talisker Storm",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tamdhu 10yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tamdhu 30yo (MacPhail Collection 2009)",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tamdhu Batch Strength (all batches)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tamnavulin 12yo",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Teacher's Highland Cream",
      "cost": "$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Teaninich 10yo (F&F)",
      "cost": "",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Teeling Poitin",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Teeling Silver Reserve 21yo Sauternes Finish",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Teeling Single Grain (Wine Cask Finish)",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Grain"
    },
    {
      "name": "Teeling Single Malt",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Teeling Small Batch (Rum Cask Finish)",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Teerenpeli 10yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Finland",
      "type": "Malt"
    },
    {
      "name": "Teerenpeli 8yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Finland",
      "type": "Malt"
    },
    {
      "name": "Teerenpeli Distiller’s Choice AURA",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Finland",
      "type": "Malt"
    },
    {
      "name": "Teerenpeli Distiller’s Choice KARHI",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Finland",
      "type": "Malt"
    },
    {
      "name": "Teerenpeli Distiller’s Choice RASI",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Finland",
      "type": "Malt"
    },
    {
      "name": "Teerenpeli Distiller's Choice KASKI",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Finland",
      "type": "Malt"
    },
    {
      "name": "Teerenpeli Suomi 100 Juhlaviski",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Finland",
      "type": "Malt"
    },
    {
      "name": "Templeton Rye",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "The Irishman Cask Strength",
      "cost": "$$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "The Irishman Founder’s Reserve",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "The Irishman Original Clan Irish Whiskey",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "The Irishman Single Malt (NAS)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "The Quiet Man 8yo Single Malt",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "The Quiet Man Traditional Irish Whiskey",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Thomas H. Handy Sazerac",
      "cost": "$$$$$+",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Three Ships 10yo",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "South Africa",
      "type": "Blend"
    },
    {
      "name": "Three Ships 5yo",
      "cost": "$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "South Africa",
      "type": "Blend"
    },
    {
      "name": "Timorous Beastie",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Timorous Beastie 10yo",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Timorous Beastie 12yo Cask Strength",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Timorous Beastie 18yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Timorous Beastie 21yo Sherry Edition",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Timorous Beastie 40yo Cask Strength",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tincup American Whiskey",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Tobermory 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "F",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tobermory 12yo Bourbon-matured",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tobermory 15yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tomatin 12yo",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tomatin 14yo Portwood",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tomatin 15yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tomatin 18yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tomatin 40yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tomatin Cask Strength",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tomatin Cu Bocan",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tomatin Cu Bocan 1989 Limited Edition",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tomatin Cu Bocan 2005 Limited Edition",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tomatin Cu Bocan Sherry Edition",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tomatin Cu Bocan Virgin Oak Edition",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tomatin Decades",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tomatin Legacy",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tomatin Oloroso Sherry 1995",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tomintoul 10yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tomintoul 12yo Oloroso Sherry",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tomintoul 16yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tomintoul 25yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tomintoul Peaty Tang",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tormore 12yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tormore 14yo",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tullamore Dew 10yo Single Malt",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Tullamore Dew 14yo Single Malt",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Tullamore Dew Original Blended",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Tullamore Dew Special Reserve 12yo",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Tullibardine 1993 Port",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tullibardine 1993 Sauternes",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tullibardine 20yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tullibardine 225 Sauternes Finish",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tullibardine 228 Burgundy Finish",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tullibardine 25yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Tullibardine 500 Sherry Finish",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tullibardine Aged Oak Edition",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tullibardine Sovereign",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Tullibardine Vintage 1993",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Twelve Barrels",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Two Brewers Cask Strength (all releases)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Two Brewers Classic (all releases)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Two Brewers Innovative (all releases)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Two Brewers Peated (all releases)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Two Brewers Release 01 Classic",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Two Brewers Release 02 Special Finishes",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Two Brewers Release 03 Peated",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Two Brewers Release 04 Special Finishes",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Two Brewers Release 05 Innovative",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Two Brewers Release 06 Classic",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Two Brewers Release 07 Peated",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Two Brewers Release 08 Innovative",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Two Brewers Release 09 Special Finishes",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Two Brewers Release 10 Cask Strength",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Two Brewers Release 12 Peated",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Two Brewers Release 13 Classic",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Two Brewers Release 14 Innovative",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Two Brewers Release 16 Classic",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Two Brewers Special Finishes (all releases)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Canada",
      "type": "Malt"
    },
    {
      "name": "Tyrconnell 10yo Madeira Cask Finish",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Tyrconnell 10yo Port Cask Finish",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Tyrconnell 10yo Sherry Cask Finish",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Tyrconnell Single Malt Irish Whiskey",
      "cost": "$$",
      "class": "SingleMalt-like",
      "cluster": "H",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Van Winkle Family Reserve Rye 13yo",
      "cost": "$$$$$+",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Van Winkle Special Reserve 12yo Lot B",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Very Old Barton 6yo",
      "cost": "$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Very Old Barton 6yo BiB",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Virginia Black",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "W.L. Weller 12yo",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "W.L. Weller Special Reserve",
      "cost": "$",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Wayne Gretzky No. 99 Ice Cask",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Wayne Gretzky No. 99 Ninety Nine Proof",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Wayne Gretzky No. 99 Red Cask",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Wemyss Malts Kiln Embers",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "J",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Wemyss Malts Peat Chimney",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Wemyss Malts Smooth Gentleman",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Wemyss Malts The Hive",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Wemyss Malts The Rockpool",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Wemyss Malts The Spice King",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Wemyss Malts Velvet Fig",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "West Cork Original Bourbon Cask",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Westland American Single Malt (American Oak)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "USA",
      "type": "Malt"
    },
    {
      "name": "Westland Garryana",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "USA",
      "type": "Malt"
    },
    {
      "name": "Westland Peat Week",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "USA",
      "type": "Malt"
    },
    {
      "name": "Westland Peated",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "I",
      "country": "USA",
      "type": "Malt"
    },
    {
      "name": "Westland Sherry Wood",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "B",
      "country": "USA",
      "type": "Malt"
    },
    {
      "name": "Westland Single Cask",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "USA",
      "type": "Malt"
    },
    {
      "name": "Westland Winter 2016",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "USA",
      "type": "Malt"
    },
    {
      "name": "Whisky",
      "cost": "Cost",
      "class": "Class",
      "cluster": "Cluster",
      "country": "Country",
      "type": "Type"
    },
    {
      "name": "Whistlepig 10yo",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "Whistlepig The Boss Hog",
      "cost": "$$$$$",
      "class": "Rye-like",
      "cluster": "",
      "country": "Canada",
      "type": "Blend"
    },
    {
      "name": "White Oak Akashi 14yo",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "White Oak Akashi 5yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "White Oak Akashi Blended",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Japan",
      "type": "Blend"
    },
    {
      "name": "White Oak Akashi Single Malt (NAS)",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Whyte & Mackay 13yo",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Whyte & Mackay 30yo",
      "cost": "$$$$$+",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Whyte & Mackay Blended Triple Matured",
      "cost": "$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Whyte & Mackay Special Blended",
      "cost": "$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Scotland",
      "type": "Blend"
    },
    {
      "name": "Wild Turkey 101 Bourbon",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Wild Turkey 101 Rye",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Wild Turkey 14yo Tradition",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Wild Turkey 15yo American Spirit",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Wild Turkey 17yo Master's Keep",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Wild Turkey 81 Bourbon",
      "cost": "$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Wild Turkey 81 Rye",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Wild Turkey Diamond Anniversary",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Wild Turkey Forgiven",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Wild Turkey Kentucky Spirit Single Barrel",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Wild Turkey Longbranch",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Wild Turkey Master's Keep Cornerstone Rye",
      "cost": "$$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Wild Turkey Master's Keep Decades",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Wild Turkey Master's Keep Revival",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Wild Turkey Rare Breed",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Willett Family Estate 11yo Bourbon",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Willett Family Estate 13yo Bourbon",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Willett Family Estate 14yo Bourbon",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Willett Family Estate 17yo Bourbon",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Willett Family Estate 22yo Bourbon",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Willett Family Estate 24yo Bourbon",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Willett Family Estate 25yo Rye",
      "cost": "$$$$$+",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Willett Family Estate 2yo Rye",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Willett Family Estate 3yo Rye",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Willett Family Estate 4yo Rye",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Willett Family Estate 5yo Bourbon",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Willett Family Estate 5yo Rye",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Willett Family Estate 6yo Rye",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Willett Family Estate 7yo Bourbon",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Willett Family Estate 7yo Rye",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Willett Family Estate 8yo Bourbon",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Willett Family Estate 9yo Bourbon",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Willett Family Estate Bourbon (all ages)",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Willett Family Estate Rye (all ages)",
      "cost": "$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Willett Family Estate Rye XCF 1.0",
      "cost": "$$$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Willett Pot Still Reserve",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "William Heavenhill BiB",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "William Larue Weller",
      "cost": "$$$$$+",
      "class": "Bourbon-like",
      "cluster": "R0",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Wolfburn (NAS)",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Scotland",
      "type": "Malt"
    },
    {
      "name": "Woodford Reserve Distiller's Select",
      "cost": "$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Woodford Reserve Double Oaked",
      "cost": "$$$$",
      "class": "Bourbon-like",
      "cluster": "R2",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Woodford Reserve Straight Rye",
      "cost": "$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Writers Tears Pot Still Cask Strength",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Writers Tears Pot Still Irish Whiskey",
      "cost": "$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Writers Tears Red Head Single Malt",
      "cost": "$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Ireland",
      "type": "Malt"
    },
    {
      "name": "Yamazaki 12yo",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Yamazaki 18yo",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "C",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Yamazaki Bourbon Barrel",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Yamazaki Distiller's Reserve",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Yamazaki Limited Edition 2015",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Yamazaki Limited Edition 2016",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Yamazaki Mizunara",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "E",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Yamazaki NAS",
      "cost": "$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Yamazaki Puncheon",
      "cost": "$$$$$",
      "class": "SingleMalt-like",
      "cluster": "G",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Yamazaki Sherry Cask (all vintages)",
      "cost": "$$$$$+",
      "class": "SingleMalt-like",
      "cluster": "A",
      "country": "Japan",
      "type": "Malt"
    },
    {
      "name": "Yamazakura 16yo Blended Whisky",
      "cost": "$$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Japan",
      "type": "Blend"
    },
    {
      "name": "Yamazakura Blended Whisky",
      "cost": "$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Japan",
      "type": "Blend"
    },
    {
      "name": "Yellow Rose Straight Rye",
      "cost": "$$$",
      "class": "Rye-like",
      "cluster": "R4",
      "country": "USA",
      "type": "Rye"
    },
    {
      "name": "Yellow Spot 12yo",
      "cost": "$$$$",
      "class": "Scotch-like",
      "cluster": "",
      "country": "Ireland",
      "type": "Blend"
    },
    {
      "name": "Yellowstone 2015 Limited Edition",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Yellowstone 2016 Limited Edition",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Yellowstone 2018 Limited Edition",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Yellowstone Limited Edition (all vintages)",
      "cost": "$$$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    },
    {
      "name": "Yellowstone Select",
      "cost": "$$$",
      "class": "Bourbon-like",
      "cluster": "R3",
      "country": "USA",
      "type": "Bourbon"
    }
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