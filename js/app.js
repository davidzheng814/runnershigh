var app = angular.module('app', [
  'ngRoute',
  'landing',
  'create',
  'ui.date'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/landing.html',
        controller: 'LandingCtrl'
      }).
      when('/create/general', {
        templateUrl: 'partials/create-general.html',
        controller: 'CreateGeneralCtrl'
      }).
      when('/create/programs', {
        templateUrl: 'partials/create-programs.html',
        controller: 'CreateProgramsCtrl'
      }).
      when('/create/details', {
        templateUrl: 'partials/create-details.html',
        controller: 'CreateDetailsCtrl'
      }).
      when('/create/finished', {
        templateUrl: 'partials/create-finished.html',
        controller: 'CreateFinishedCtrl'
      }).
      when('/main', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      }).
      when('/trail', {
        templateUrl: 'partials/trail.html',
        controller: 'TrailCtrl'
      }).
      when('/progress', {
        templateUrl: 'partials/progress.html',
        controller: 'ProgressCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);