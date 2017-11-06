var mongoose = require('mongoose');
var mongoURI= ''

// Mongo Connection //
var mongoURI = '';
// process.env.MONGODB_URI will only be defined if you
// are running on Heroku
if (process.env.MONGODB_URI != undefined) {
    // use the string value of the environment variable
    mongoURI = process.env.MONGODB_URI;
} else {
    // use the local database server
    mongoURI = 'mongodb://localhost:27017/realestate';
}

mongoose.connection.on('connected', function () {
    console.log('Mongoose is connected');
});

mongoose.connection.on('error', function () {
    console.log('Mongoose failed to connect');
});

mongoose.connect(databaseUrl);

//not rilly necessary
module.exports = mongoose;