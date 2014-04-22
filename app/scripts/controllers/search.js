'use strict';

angular.module('ohgohereApp')
  .controller('SearchCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.doSearch = function() {
      $location.path('/search/' + $scope.search);
    };
  }]);
