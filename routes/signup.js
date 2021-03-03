var express = require("express");
var { User } = require("../database");
var router = express.Router();

/* GET signup page., all requests from /signup will come here */
router.get("/", async function (req, res, next) {
  res.render("signup", { title: "Sign Up" }); // same as erb
});

router.get("/new", async function (req, res, next) {
  res.render("new");
})

module.exports = router;