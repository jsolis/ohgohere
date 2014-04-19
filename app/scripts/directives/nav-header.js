'use strict';

angular.module('ohgohereApp')
  .directive('navheader', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/nav-header.html',
      //controller: function ($scope) {
        // any api-like $scope functions should go here
      //},
      link: function (scope, element, attrs) {
        scope.activeTab = attrs.activeTab;
      }
    };
  });
