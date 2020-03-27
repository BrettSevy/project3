const router = require("express").Router();
const whiskeyRoutes = require("./whiskeys");

// whiskey routes
router.use("/whiskeys", whiskeyRoutes);

module.exports = router;