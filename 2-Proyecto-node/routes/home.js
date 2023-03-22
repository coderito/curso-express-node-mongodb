const express = require("express");
const router = express.Router();
const { leerUrls, agregarUrl } = require("../controllers/homeControllers");


router.get("/", leerUrls);
router.post("/", agregarUrl)

module.exports = router;