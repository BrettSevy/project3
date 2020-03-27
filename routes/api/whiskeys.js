const router = require("express").Router();
const whiskeysController = require("../../controllers/whiskeysController");


router.route("/")
  .get(whiskeysController.findAll)
  .post(whiskeysController.create);

// Matches with "/api/whiskey/:id"
router
  .route("/:id")
  .get(whiskeysController.findById)
  .put(whiskeysController.update)
  .delete(whiskeysController.remove);

module.exports = router;