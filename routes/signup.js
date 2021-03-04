var express = require("express");
var { User } = require("../database");
var router = express.Router();

/* GET signup page., all requests from /signup will come here */
router.get("/", async function (req, res, next) {
  res.render("signup", { title: "Sign Up" });
});

router.get("/new", async function (req, res, next) {
  res.render("new");
})

router.post("/new", (req, res) => {
  const fname = request.body.fname
  const lname = request.body.lname
  return Users.create({
    First_Name: fname,
    Last_Name: lname,
}).then(function (users) {
    if (Users) {
        response.send(Users);
    } else {
        response.status(400).send('Error in insert new record');
    }
    res.render("index");
});
})

module.exports = router;