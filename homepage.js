var express = require('express');
var app = express();

app.get('/', function(req, res, next) {
    res.render('homepage/homepage.ejs');
});

module.exports = app;


// #rgb(213 167 218)  #rgb(198 14 218) #rgb(67 231 67)