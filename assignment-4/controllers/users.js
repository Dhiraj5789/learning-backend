const users = [];

exports.getUsers = (req, res, next) => {
  res.render("users", {
    docTitle: "Users",
    users,
  });
};

exports.postUsers = (req, res, next) => {
  users.push({ name: req.body.userName });
  res.redirect("/users");
};
