var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require('express-session');

var indexRouter = require("./routes/index");// 21
var signUpRouter = require("./routes/signup");//22
var signInRouter = require("./routes/signin");
var spacesRouter = require("./routes/spaces");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
  key: 'user_sid',
  secret: 'somerandonstuffs',
  resave: false,
  saveUninitialized: false,
  cookie: {
      expires: 600000
  }
}));
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
      res.clearCookie('user_sid');        
  }
  next();
});
var sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
    next();
  } else {
    res.redirect('/signin');
  }    
};

app.use("/", indexRouter);
app.use("/signup", signUpRouter); // finds sign up route
app.use("/signin", signInRouter);
app.use("/spaces", sessionChecker, spacesRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  if (req.app.get("env") === "development" || req.app.get("env") === "test") {
    res.locals.error = err;
  } else {
    res.locals.error = {};
  }

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
