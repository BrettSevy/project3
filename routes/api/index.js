const router = require("express").Router();
const whiskeyRoutes = require("./whiskeys");
const fightRoutes = require("./fight");
const userRoutes = require("./user");

// whiskey routes
router.use("/whiskeys", whiskeyRoutes);
router.use("/fight", fightRoutes);
router.use("/user", userRoutes);

module.exports = router;
