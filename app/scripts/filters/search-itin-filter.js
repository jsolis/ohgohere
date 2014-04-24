'use strict';

angular.module('ohgohereApp')
  .filter('searchItin', function () {
    return function(input, searchTerm) {
      return _.filter(input, function(itin) {
        var match = false;
        var terms = searchTerm.split(' ');
        _.forEach(terms, function(term) {
          if (itin.location.indexOf(term) > -1 || term.indexOf(itin.location) > -1 ||
              itin.who.indexOf(term) > -1 || term.indexOf(itin.who) > -1 ||
              itin.when.indexOf(term) > -1 || term.indexOf(itin.when) > -1) {
            match = true;
            return false;
          }
          var placeNames = _.flatten(itin.places, 'name');
          _.forEach(placeNames, function(placeName) {
            if (_.contains(placeName, term) || _.contains(term, placeName)) {
              match = true;
              return false;
            }
          });
          var placeWhys = _.flatten(itin.places, 'why');
          _.forEach(placeWhys, function(placeWhy) {
            if (_.contains(placeWhy, term) || _.contains(term, placeWhy)) {
              match = true;
              return false;
            }
          });
        });
        return match;
      });
    };
  });
