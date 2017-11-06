var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var listings = require('./routes/listings.router.js');
var rentals = require('./routes/rentals.router.js');
var port = process.env.PORT || 5000;
// Mongoose moved to module, once required that code will run
var db = require('./modules/db.js');


// Middleware, need bodyParser before those routes down there, sets it up on all of those.
app.use(bodyParser.json());
app.use(express.static('server/public'));

// Express Routes
app.use('/listings', listings);
app.use('/rentals', rentals);

// Start server
app.listen(port, function () {
    console.log('Listening on port:', port);
})

