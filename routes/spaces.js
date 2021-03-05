var express = require("express");
var { User } = require("../database");
var router = express.Router();

router.get("/", async function (req, res, next) {
  var currentUser = req.session.user.username;
  res.render("spaces", { currentUser });
})

module.exports = router;