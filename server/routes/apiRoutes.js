const express = require("express");
const router = express.Router();

const { useApi } = require("../controllers/apiController");
router.get("/", useApi);

module.exports = router;
