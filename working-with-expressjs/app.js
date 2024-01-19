const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("Always Rujnning");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In Add Product middleware");
  res.send("<h1>Add Product Page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello from express</h1>");
});

app.listen(3000);
