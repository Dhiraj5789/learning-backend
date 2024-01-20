const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("add products");
  res
    // .status(200)
    .send(
      "<form action='/admin/add-product' method='POST'><input name='title' type='text' /><button type='submit'>Submit</button></form>"
    );
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
