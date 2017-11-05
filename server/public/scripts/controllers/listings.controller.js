app.controller('ListingsController', ['$http', function ($http) {
    console.log('ListingsController created.');
    var self = this;
    self.newListing = {};
    self.listing = [];
    self.show = false;

    self.refreshListings = function (getRoute) {
        $http.get('/listings').then(function (response) {
            console.log(response.data);
            self.listings = response.data;
        }).catch(function (error) {
            console.log('Could not GET data');
        });
    };

    self.refreshListings();

    self.addListing = function (listingToAdd) {
        console.log(listingToAdd);
        console.log('in addListing');
        $http.post('/listings', listingToAdd).then(function (response) {
            console.log('Added Listing');
            swal("Excellent!", "Your listing has been added.", "success");
        }).catch(function (err) {
            console.log('Add Listing Failed!');
        })
        self.refreshListings();
    }

    self.showAdd = function(){
        self.show = !self.show;
    }

}]);