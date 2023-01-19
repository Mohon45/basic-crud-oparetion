const express = require("express");
const minionController = require("../controllers/minion.controller");

const router = express.Router();

router.post("/create", minionController.createMinion);
router.get("/", minionController.getMinions);
router.patch("/update/:id", minionController.updateMinion);
router.post("/delete/:id", minionController.deleteMinion);

module.exports = router;
