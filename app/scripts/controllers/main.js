'use strict';

angular.module('ohgohereApp')
  .controller('MainCtrl', ['$scope', 'ItineraryService', function ($scope, itineraryService) {
    $scope.itineraries = itineraryService;
    console.log('scope itineraries', $scope.itineraries);
  }]);
