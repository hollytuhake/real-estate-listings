var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/listings', {
        templateUrl: '../templates/listings.html',
        controller: 'ListingsController as lc'
    }).when('/rentals', {
        templateUrl: '../templates/rentals.html',
        controller: 'RentalsController as rc'
    })
});