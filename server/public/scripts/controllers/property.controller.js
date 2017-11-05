app.controller('PropertyController', ['$http', function ($http) {
    console.log('PropertyController created.');
    var self = this;
    self.newProperty = {};
    self.property = [];
    self.show = false;

    
    self.refreshProperties = function () {
        $http.get('/listings').then(function (response) {
            console.log(response.data);
            self.listings = response.data;
        }).catch(function (error) {
            console.log('Could not GET data');
        });
    };

    self.refreshProperties();

}]);