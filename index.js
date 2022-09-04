const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./utils/dbConnect");
const userRouter = require("./route/user.route");
const randomRouter = require("./route/random.route");
const saveRouter = require("./route/save.route");
const updateRouter = require("./route/patch.route");
const deleteRouter = require("./route/deleteRoute");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
dbConnect();
app.use("/GET/user/all", userRouter);
app.use("/GET/user/random", randomRouter);
app.use("/POST/user/save", saveRouter);
app.use("/PATCH/user/update", updateRouter);
app.use("/DELETE/user/delete", deleteRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
