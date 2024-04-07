const express = require("express");

const router = express.Router();

router.post("", computeController.analyse); //* add plugin to db

module.exports = router;
