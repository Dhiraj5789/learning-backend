const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  console.log("add products");
  res.send(
    "<form action='/product' method='POST'><input name='title' type='text' /><button type='submit'>Submit</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h2>Hello from Express</h2>");
});

app.listen(3000);
