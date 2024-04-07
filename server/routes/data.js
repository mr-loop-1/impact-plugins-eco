const express = require("express");

const router = express.Router();

router.get("/plugins", dataController.getPlugins); //* get list of plugins - paginated
router.get("/all", dataController.getData); //! To be changed in V2

router.post("/plugins", dataController.addPlugin); //* add plugin to db

module.exports = router;
