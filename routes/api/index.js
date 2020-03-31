const router = require("express").Router();
const whiskeyRoutes = require("./whiskeys");
const fightRoutes = require("./fight");

// whiskey routes
router.use("/whiskeys", whiskeyRoutes);
router.use("/fight", fightRoutes);

module.exports = router;