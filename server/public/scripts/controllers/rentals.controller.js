app.controller('RentalsController', ['$http', function ($http) {
    console.log('RentalsController created.');
    var self = this;
    self.newProperty = {};
    self.property = [];
    self.show = false;

    self.refreshRentals = function (getRoute) {
        console.log('in refresh rentals');
        $http.get('/rentals').then(function (response) {
            console.log(response.data);
            self.rentals = response.data;
        }).catch(function (error) {
            console.log('Could not GET data');
        });
    };

    self.refreshRentals();

}]);