'use strict';

angular.module('ohgohereApp')
  .filter('singleItin', function () {
    return function(input, itinID) {
      var filtered = _.filter(input, {'$id': itinID});
      return filtered;
    };
  });
