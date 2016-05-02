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
  'progress',
  'ui.bootstrap'
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
      when('/popovers/popover0.html', {
        templateUrl: 'partials/popovers/popover0.html'
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

  changeSystemDate = function() {
    newDate = new Date("05/30/16");
    var UTC = Date.UTC;
    schedVars.myProgress = [
        {date:new Date("5/2/16"),distance:8.2,pace:9.1,activity:'running'},
        {date:new Date("5/3/16"),activity:'rest'},
        {date:new Date("5/4/16"),distance:6.3,pace:8.8,activity:'running'},
        {date:new Date("5/5/16"),activity:'rest'},
        {date:new Date("5/6/16"),distance:8.3,pace:7,activity:'biking'},
        {date:new Date("5/7/16"),distance:9.2,pace:7,activity:'running'},
        {date:new Date("5/8/16"),distance:1,activity:'rowing'},
        {date:new Date("5/9/16"),distance:7.2,pace:8.7,activity:'running'},
        {date:new Date("5/10/16"),activity:'rest'},
        {date:new Date("5/11/16"),distance:6.9,pace:8.6,activity:'running'},
        {date:new Date("5/12/16"),activity:'rest'},
        {date:new Date("5/13/16"),distance:6.4,pace:5.5,activity:'biking'},
        {date:new Date("5/14/16"),distance:8.5,pace:9.2,activity:'running'},
        {date:new Date("5/15/16"),distance:1,activity:'rowing'},
        {date:new Date("5/16/16"),distance:8.8,pace:9.2,activity:'running'},
        {date:new Date("5/17/16"),activity:'rest'},
        {date:new Date("5/18/16"),distance:7.3,pace:7.8,activity:'running'},
        {date:new Date("5/19/16"),activity:'rest'},
        {date:new Date("5/20/16"),distance:4.3,pace:5.2,activity:'biking'},
        {date:new Date("5/21/16"),distance:10.2,pace:8.5,activity:'running'},
        {date:new Date("5/22/16"),distance:1,activity:'rowing'},
        {date:new Date("5/23/16"),distance:7.2,pace:7.4,activity:'running'},
        {date:new Date("5/24/16"),activity:'rest'},
        {date:new Date("5/25/16"),distance:8.8,pace:8,activity:'running'},
        {date:new Date("5/26/16"),activity:'rest'},
        {date:new Date("5/27/16"),distance:7.4,pace:5.6,activity:'biking'},
        {date:new Date("5/28/16"),distance:8.2,pace:8.2,activity:'running'},
        {date:new Date("5/29/16"),distance:1.5,activity:'rowing'}
    ];
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
  };
});