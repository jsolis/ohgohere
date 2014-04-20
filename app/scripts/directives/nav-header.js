'use strict';

angular.module('ohgohereApp')
  .directive('navheader', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/nav-header.html',
      link: function (scope, element, attrs) {
        scope.activeTab = attrs.activeTab;
      }
    };
  });
