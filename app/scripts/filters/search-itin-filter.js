'use strict';

angular.module('ohgohereApp')
  .filter('searchItin', function () {
    return function(input, searchTerm) {
      searchTerm = searchTerm.toLowerCase();
      return _.filter(input, function(itin) {
        var match = false;
        var terms = searchTerm.split(' ');
        var location = itin.location.toLowerCase();
        var who = itin.who.toLowerCase();
        var when = itin.when.toLowerCase();
        _.forEach(terms, function(term) {
          if (_.contains(location, term) || _.contains(term, location) ||
              _.contains(who, term) || _.contains(term, who) ||
              _.contains(when, term) || _.contains(term, when)) {
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
