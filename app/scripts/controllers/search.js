'use strict';

angular.module('ohgohereApp')
  .controller('SearchCtrl', ['$scope', '$location', 'ItineraryService', function ($scope, $location, ItineraryService) {
    $scope.itineraries = ItineraryService;
    $scope.doSearch = function() {
      $location.path('/search/' + $scope.search);
    };
  }]);
