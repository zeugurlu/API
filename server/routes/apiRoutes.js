const express = require("express");
const router = express.Router();
const { useLoginApi } = require("../controllers/apiController");

router.post("/login", useLoginApi);

module.exports = router;
