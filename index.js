const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./utils/dbConnect");
const userRouter = require("./route/user.route");
const randomRouter = require("./route/random.route");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
dbConnect();
app.use("/user/all", userRouter);
app.use("/user/random", randomRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
