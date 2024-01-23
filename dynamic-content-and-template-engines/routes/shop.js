const path = require("path");
const express = require("express");

const router = express.Router();

const adminData = require("./admin");

const rootDirectory = require("../util/path");

// we use path.join because the sendFile function takes the absolute path of the system
// __dirname is a global variable that defaults to the file's root folder
// path .join detects OS and builds path respectively \ or /
router.get("/", (req, res, next) => {
  console.log(adminData.products);
  res.sendFile(path.join(rootDirectory, "views", "shop.html"));
});

module.exports = router;
