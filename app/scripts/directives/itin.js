'use strict';

angular.module('ohgohereApp')
  .directive('itin', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/itin.html',
      //controller: function ($scope) {
        // any api-like $scope functions should go here
      //},
      scope: {
        itinerary: '=itinerary'
      },
      link: function (scope, element, attrs) {
        scope.itinerary = angular.fromJson(attrs.itinerary);
        console.log('itinID', attrs.itinId);
        console.log('parsed itinerary', scope.itinerary);
      }
    };
  });
