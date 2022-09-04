const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const getAllUserController = require("../controller/userController");

// router.get("/", async (req, res) => {
//   const response = await fetch(
//     "https://raw.githubusercontent.com/Mahed21/fakeData_ACC_1/main/data.json"
//   );
//   const body = await response.json();

//   res.json(body);
// });
router.route("/").get(getAllUserController.getAllUser);

module.exports = router;
