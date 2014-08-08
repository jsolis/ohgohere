'use strict';

angular
  .module('ohgohereApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/inspire', {
        templateUrl: 'views/inspire.html',
        controller: 'InspireCtrl'
      })
      .when('/search/:searchTerm', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/itin/:itinID', {
        templateUrl: 'views/single-itin.html',
        controller: 'SingleItinCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
