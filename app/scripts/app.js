'use strict';

angular
  .module('ohgohereApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/inspire', {
        templateUrl: 'views/inspire.html',
        controller: 'InspireCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
