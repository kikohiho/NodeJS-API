// app.js
var express = require('express');
var app = express();
var db = require('./db'); 

var UserController = require('./User/UserController');
//maps route / to the route /users 
app.use('/users', UserController);

module.exports = app;