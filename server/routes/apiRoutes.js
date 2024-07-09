const express = require("express");
const router = express.Router();
const { useApi } = require("../controllers/apiController");

router.post("/auth/login", useApi);

module.exports = router;
