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


router.post('/new', function(req, res) {
  if (!req.body.email || !req.body.password || !req.body.username) {
      res.status(400).send({
          status: false,
          message: 'Please input in all fields'
      });
  } else {
      User.create({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
 
      }) 
      .then(function (User) {
        if (User) {
          res.status(201).redirect("/signup"); 
        } else { res.status(400).send('Error in insert new record');

        }
      })
        
}
})

module.exports = router;
