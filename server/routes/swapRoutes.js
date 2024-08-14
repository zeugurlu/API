const express = require("express");
const router = express.Router();
const { getCabinetList } = require("../controllers/swapController");

router.post("/lists", getCabinetList);

module.exports = router;
