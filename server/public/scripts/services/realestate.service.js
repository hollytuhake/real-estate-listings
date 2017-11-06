app.service('RealEstateService', function($http){
    console.log('service created');
    
    var self = this;
    // creating an object so we can bind to this property
    self.results = {data:[]};

    self.refreshListings = function () {
        $http.get('/listings').then(function (response) {
            console.log(response.data);
            self.results.data = response.data;
        }).catch(function (error) {
            console.log('Could not GET data');
        });
    };

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

})