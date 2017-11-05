app.controller('ListingsController', ['$http', function ($http) {
    console.log('ListingsController created.');
    var self = this;
    self.newProperty = {};
    self.property = [];
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

}]);