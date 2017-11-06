app.controller('ListingsController', function (RealEstateService) {
    console.log('ListingsController created.');
    var self = this;
    self.newListing = {};
    self.listing = [];


    self.results = RealEstateService.results;

    self.addListing = function(listingToAdd){
        RealEstateService.addListing(listingToAdd);
    }

    RealEstateService.refreshListings();

    self.showAdd = function () {
        self.show = !self.show;
    }
});