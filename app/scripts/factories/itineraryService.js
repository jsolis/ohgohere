'use strict';

angular.module('ohgohereApp')
  .factory('ItineraryService', ['$firebase', function($firebase) {
    var ref = new Firebase('https://ohgohere.firebaseio.com/itinerary');
    return $firebase(ref);
  }]);