const express = require("express");
const router = express.Router();
const { leerUrls } = require("../controllers/homeControllers");


router.get("/", leerUrls)

module.exports = router;