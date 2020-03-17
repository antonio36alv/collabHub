require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var passport     = require('passport');
var flash        = require('connect-flash');
var cookieParser = require('cookie-parser');
var session      = require('express-session'); 

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"))
// var db = require("./models");    @HACER

require('./config/passport')(passport); //