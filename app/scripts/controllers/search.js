'use strict';

angular.module('ohgohereApp')
  .controller('SearchCtrl', ['$scope', '$location', 'ItineraryService', '$routeParams',
    function ($scope, $location, ItineraryService, $routeParams) {
    $scope.itineraries = ItineraryService;
    $scope.searchTerm = $routeParams.searchTerm;
    $scope.doSearch = function() {
      $location.path('/search/' + $scope.search);
    };
  }]);
