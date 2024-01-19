const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("In middleware 1");
  res.send("<h2>Send Users Data</h2>");
  next();
});

app.use("/", (req, res, next) => {
  console.log("In middleware 2");
});

app.listen(3000);
