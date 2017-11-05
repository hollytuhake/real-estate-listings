var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/listings', {
        templateUrl: '../templates/listings.html',
        controller: 'PropertyController as pc'
    }).when('/rentals', {
        templateUrl: '../templates/rentals.html',
        controller: 'PropertyController as pc'
    })
});