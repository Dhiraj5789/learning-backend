const express = require("express");
const path = require("path");

const router = express.Router();

const rootDirectory = require("../util/path");

//rootDirectory substitutes __dirname, ..

router.get("/add-product", (req, res, next) => {
  console.log("add products middleware.");
  res.sendFile(path.join(rootDirectory, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
