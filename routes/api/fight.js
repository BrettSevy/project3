const router = require("express").Router();
const fightController = require("../../controllers/fightController");


router.route("/")
  .get(fightController.findAll)
  .post(fightController.create);


  
router
  .route("/:id")
  .get(fightController.findById)
  .put(fightController.update)
  .delete(fightController.remove);

module.exports = router;