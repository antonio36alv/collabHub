require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var http = require("http");

var db = require("./models");

//need for user auth.
var bodyParser = require("body-parser");
var passport = require("passport");
var flash = require("connect-flash");
var cookieParser = require('cookie-parser');
var session = require('express-session'); 
//https://medium.com/silibrain/using-passport-bcrypt-for-full-stack-app-user-authentication-fe30a013604e

var app = express();
var PORT = process.env.PORT || 3000;

require('./config/passport')(passport); //

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars")

app.use(session({
    key: 'user_sid',
    secret: 'goN6DJJC6E287cC77kkdYuNuAyWnz7Q3iZj8',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));


app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash());


// Routes
require("./routes/apiRoutes")(app, passport);
require("./routes/htmlRoutes")(app, passport);
require("./routes/user-auth-routes")(app, passport);
require("./controllers/accountController")(app, passport);

require("./routes/gitHubRoutes")(app, passport);
var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(function(){
  app.listen(PORT, function(){
      console.log("Listening on localhost:" + PORT);
  })
})

module.exports = app;