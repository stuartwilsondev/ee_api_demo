'use strict';

// Declare app level module which depends on views, and components
angular.module('ee_demo_app', [
  'ngRoute',
  'ee_demo_app.home',
  'ee_demo_app.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
