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

// router.post("/new", (req, res) => {
//     User.create({
//     username: req.body.username,
//     email: req.body.email,
//     password: req.body.password 
// }).then(function (User) {
//     if (User) {
//         response.send(User);
//     } else {
//         response.status(400).send('Error in insert new record');
//     }
//     res.render("index");
// });
// //res.render("signup")


// })
router.post('/new', function(req, res) {
  if (!req.body.email || !req.body.password) {
      res.status(400).send({
          status: false,
          message: ''
      });
  } else {
      User.create({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
      }).then((User) => res.status(201).send(User)).catch((error) => {
          console.log(error);
          res.status(400).send(error);
          
      });
  }
  res.redirect("/signup"); 
  });

module.exports = router;