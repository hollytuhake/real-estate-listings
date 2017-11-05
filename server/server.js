var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var listings = require('./routes/listings.router.js');
var rentals = require('./routes/rentals.router.js');
var port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('server/public'));

// Express Routes
app.use('/listings', listings);
app.use('/rentals', rentals);

// Mongoose
var mongoose = require('mongoose');
var databaseUrl = 'mongodb://localhost:27017/realestate';

mongoose.connection.on('connected', function () {
    console.log('Mongoose is connected');
});

mongoose.connection.on('error', function () {
    console.log('Mongoose failed to connect');
});

mongoose.connect(databaseUrl);

// Start server
app.listen(port, function () {
    console.log('Listening on port:', port);
})