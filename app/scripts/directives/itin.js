'use strict';

angular.module('ohgohereApp')
  .directive('itin', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/itin.html',
      scope: {
        itinerary: '='
      }
    };
  });
