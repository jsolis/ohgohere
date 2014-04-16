'use strict';

angular.module('ohgohereApp')
  .controller('MainCtrl', function ($scope, $firebase) {
    var itineraries = new Firebase('https://ohgohere.firebaseio.com/itinerary');
    $scope.itineraries = $firebase(itineraries);
    console.log('scope itineraries', $scope.itineraries);
  });
