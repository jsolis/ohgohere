'use strict';

angular.module('ohgohereApp')
  .filter('searchItin', function () {
    return function(input, searchTerm) {
      var filtered = _.filter(input, {'location': searchTerm});
      return filtered;
    };
  });
