var express = require("express");
var { User } = require("../database");
var { Space } = require("../database");
var router = express.Router();

router.get("/", async function (req, res, next) {
  var currentUser = req.session.user.username;
  
  Space.findAll().then(function (space)  { 
    var space = space.name
    res.render("spaces", { currentUser, space });
       })
         
      })



// const space = await Space.findAll();
//   .then()
//   console.log(space);
//   var name = space.name

// })Project.findAll().then(projects => {
  // projects will be an array of all Project instances
// User.findOne( { where: {username: username } }) 
//       .then(function (user) {
//            if (!user) {
//              res.redirect('/signin');
//          } else if (user.password !== password) {
//              res.redirect('/signin');
//          } else {
//          req.session.user = user.dataValues;
//             res.redirect('/spaces');
//          }
//       })
// Find all users
// const users = await User.findAll();
// console.log(users.every(user => user instanceof User)); // true
// console.log("All users:", JSON.stringify(users, null, 2));
// SELECT * FROM ...

module.exports = router;