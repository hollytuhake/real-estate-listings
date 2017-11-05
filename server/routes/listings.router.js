var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListingsSchema = new Schema({ cost: Number, sqft: Number, city: String });
// Listing links us to our collection
// We pass in ListingsSchema
// listings is our collection
var Listing = mongoose.model('Listing', ListingsSchema, 'listings');

router.get('/', function (req, res) {
    Listing.find({}, function (err, foundListings) {
        if (err) {
            console.log('Error', err);
            res.sendStatus(500);
        } else {
            res.send(foundListings);
        }
    });
});

router.post('/', function (req, res) {
    console.log(req.body);
    var listingToAdd = new Listing(req.body);
    listingToAdd.save(function (err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});

module.exports = router;