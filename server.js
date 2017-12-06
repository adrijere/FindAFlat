var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var mongoose = require('mongoose');

mongoose.connect('mongodb://heroku_p5j44gpx:5ge1blr3uhcifhchu4bc49pi7k@ds113906.mlab.com:13906/heroku_p5j44gpx', { useMongoClient: true });
app = express();
app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 5000;
app.listen(port);

console.log('server started '+ port);