var express = require("express");
var { User } = require("../database");
var router = express.Router();

/* GET signin page. */
router.get("/", async function (req, res, next) {
  res.render("signin");
})

router.post('/', function(req, res) {
  var username =  req.body.username;
    var password =  req.body.password;
    
  if (!password || !username) {
      res.status(400).send({
          status: false,
          message: 'Please input in all fields'
      })
  } else {
   
      User.findOne( { where: {username: username } }) 
      .then(function (user) {
           if (!user) {
             res.redirect('/signin');
         } else if (user.password !== password) {
             res.redirect('/signin');
         } else {
         req.session.user = user.dataValues;
            res.redirect('/spaces');
         }
      })
  }
})
 
module.exports = router;
