'use strict';

angular.module('ohgohereApp')
  .controller('InspireCtrl', function ($scope, $firebase, $location) {
    var itineraries = new Firebase('https://ohgohere.firebaseio.com/itinerary');
    $scope.itineraries = $firebase(itineraries);

    $scope.postItin = function() {
      console.log($scope.itin.location);
      $scope.itin.place2 = $scope.itin.place2 || {};
      $scope.itin.place3 = $scope.itin.place3 || {};

      $scope.itineraries.$add({
        location: $scope.itin.location,
        when: $scope.itin.when,
        who: $scope.itin.who,
        places: [
          {
            name: $scope.itin.place1.name,
            why: $scope.itin.place1.why
          },
          {
            name: $scope.itin.place2.name,
            why: $scope.itin.place2.why
          },
          {
            name: $scope.itin.place3.name,
            why: $scope.itin.place3.why
          }
        ]
      });

      $location.path('/');
    };
  });
