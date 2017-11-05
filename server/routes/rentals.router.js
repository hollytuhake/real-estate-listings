var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RentalsSchema = new Schema({ rent: Number, sqft: Number, city: String });
// Rentals links us to our collection
// We pass in RentalSchema
// rentals is our collection
var Rental = mongoose.model('Rental', RentalsSchema, 'rentals');
console.log('in rentals router');

router.get('/', function (req, res) {
    Rental.find({}, function (err, foundRentals) {
        if (err) {
            console.log('Error', err);
            res.sendStatus(500);
        } else {
            res.send(foundRentals);
        }
    });
});

router.post('/', function (req, res) {
    console.log(req.body);
    var rentalToAdd = new Rental(req.body);
    rentalToAdd.save(function (err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});


module.exports = router;