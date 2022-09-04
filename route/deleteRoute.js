const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const getAllUserController = require("../controller/userController");

router.route("/:id").delete(getAllUserController.deleteTool);

module.exports = router;
