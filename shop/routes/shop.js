const path = require("path");
const express = require("express");

const router = express.Router();

const rootDirectory = require("../util/path");
const adminData = require("./admin");

// we use path.join because the sendFile function takes the absolute path of the system
// __dirname is a global variable that defaults to the file's root folder
// path .join detects OS and builds path respectively \ or /
router.get("/", (req, res, next) => {
  // res.sendFile(path.join(rootDirectory, "views", "shop.html"));
  const products = adminData.products;
  res.render("shop", { products, docTitle: "My Shop" });
});

module.exports = router;
