const express = require("express");
const router = express.Router();
const getAllUserController = require("../controller/userController");

router.route("/").get(getAllUserController.randomUser);

module.exports = router;
