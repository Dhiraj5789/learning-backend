const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const productsController = require("./controllers/users");

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.render("index", {
    docTitle: "My Space",
  });
});
app.get("/users", productsController.getUsers);
app.post("/add-user", productsController.postUsers);

app.listen(3000);
