var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RentalSchema = new Schema({ rent: Number, sqft: Number, city: String });
// Litings links us to our collection
// We pass in ListingsSchema
// listings is our collection
var Rental = mongoose.model('Rental', RentalSchema, 'rentals');

router.get('/', function (req, res) {
    Listing.find({}, function (err, foundRentals) {
        if (err) {
            console.log('Error', err);
            res.sendStatus(500);
        } else {
            res.send(foundRentals);
        }
    });
});

module.exports = router;