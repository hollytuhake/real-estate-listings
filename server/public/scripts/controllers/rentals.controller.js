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

    self.addRental = function (rentalToAdd) {
        console.log(rentalToAdd);
        console.log('in addRental');
        $http.post('/rentals', rentalToAdd).then(function (response) {
            console.log('Added Rental');
        }).catch(function (err) {
            console.log('Add Rental Failed!');
        })
        self.refreshRentals();
    }

}]);