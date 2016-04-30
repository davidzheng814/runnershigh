var app = angular.module('app', [
  'ngRoute',
  'landing',
  'create',
  'ui.date',
  'uiGmapgoogle-maps',
  'mwl.calendar',
  'highcharts-ng',
  'main',
  'trail',
  'progress'
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
      when('/main/day', {
        templateUrl: 'partials/day.html',
        controller: 'DayCtrl'
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

app.config(['uiGmapGoogleMapApiProvider', function (GoogleMapApi) {
  GoogleMapApi.configure({
    key: 'AIzaSyBJ6A5DTkT18KY8DbvMkpqyWWm8wFUdCcY',
    libraries: 'weather,geometry,visualization'
  });
}])

app.config(['highchartsNGProvider', function (highchartsNGProvider) {
    highchartsNGProvider.lazyLoad();// will load hightcharts (and standalone framework if jquery is not present) from code.hightcharts.com
}]);

app.run(function($rootScope) {
  bind = Function.bind;
  unbind = bind.bind(bind);

  instantiate = function(constructor, args) {
      return new (unbind(constructor, null).apply(null, args));
  }

  changeSystemDate = function(newDate) {
    var UTC = Date.UTC;
    Date = function (Date) {
      MyDate.prototype = Date.prototype;

      return MyDate;

      function MyDate() {
          var date = instantiate(Date, arguments);
          var args = arguments.length;

          if (args == 0) {
            date.setDate(newDate.getDate());
            date.setMonth(newDate.getMonth());
          }
          return date;
      }
    }(Date);
    Date.UTC = UTC;
  }
});