const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("hello");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("mongoose connected");
  })
  .catch(() => {
    console.log("something went wrong while connecting to database");
  });

app.listen(port, console.log(`server is running on port ${port}`));
