'use strict';

angular.module('ohgohereApp')
  .controller('SingleItinCtrl', ['$scope', 'ItineraryService', '$routeParams', function ($scope, itineraryService, $routeParams) {
    $scope.itinID = $routeParams.itinID;
    $scope.itineraries = itineraryService;
    console.log('itineraries', $scope.itineraries);
  }]);
