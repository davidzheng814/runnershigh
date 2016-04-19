var landing = angular.module('landing', []);

landing.factory('userVars', function(){
    return {};
});

landing.factory('schedVars', function(){
    var schedule = [
        {date:new Date(2016,4,1),distance:4,pace:8,activity:'running'},
        {date:new Date(2016,4,2),distance:4,pace:8,activity:'running'},
        {date:new Date(2016,4,3),distance:4,pace:7,activity:'running'},
        {date:new Date(2016,4,4),activity:'rest'},
        {date:new Date(2016,4,5),distance:8,pace:7,activity:'running'},
        {date:new Date(2016,4,6),distance:9,pace:7,activity:'rest'},
        {date:new Date(2016,4,7),distance:10,pace:7,activity:'running'},
        {date:new Date(2016,4,8),distance:10,pace:7,activity:'running'},
        {date:new Date(2016,4,9),distance:11,pace:7.5,activity:'running'},
        {date:new Date(2016,4,10),distance:12,pace:7,activity:'running'},
        {date:new Date(2016,4,11),distance:13,pace:7.5,activity:'running'},
        {date:new Date(2016,4,12),activity:'rest'},
        {date:new Date(2016,4,13),distance:15,pace:6,activity:'running'},
        {date:new Date(2016,4,14),distance:16,pace:6,activity:'running'},
        {date:new Date(2016,4,15),distance:17,pace:6,activity:'running'},
        {date:new Date(2016,4,16),activity:'rest'},
        {date:new Date(2016,4,17),distance:22,pace:6,activity:'running'},
        {date:new Date(2016,4,18),distance:22,pace:6,activity:'running'},
        {date:new Date(2016,4,19),distance:22,pace:6,activity:'running'},
        {date:new Date(2016,4,20),distance:23,pace:6,activity:'running'},
        {date:new Date(2016,4,21),distance:24,pace:6,activity:'running'},
        {date:new Date(2016,4,22),distance:24,pace:6,activity:'running'},
        {date:new Date(2016,4,23),distance:24,pace:6,activity:'running'},
        {date:new Date(2016,4,24),distance:24,pace:6,activity:'running'},
        {date:new Date(2016,4,25),distance:24,pace:5,activity:'running'},
        {date:new Date(2016,4,26),distance:24,pace:5,activity:'running'},
        {date:new Date(2016,4,27),distance:24,pace:5,activity:'running'},
        {date:new Date(2016,4,28),distance:24,pace:5,activity:'running'},
        {date:new Date(2016,4,29),distance:24,pace:5,activity:'running'},
        {date:new Date(2016,4,30),distance:24,pace:5,activity:'running'},
        {date:new Date(2016,4,31),distance:24,pace:5,activity:'running'}
    ];
    var myProgress = [
        {date:new Date(2016,4,1),distance:4,pace:8.2,activity:'running'},
        {date:new Date(2016,4,2),distance:4,pace:8.5,activity:'running'},
        {date:new Date(2016,4,3),distance:4.5,pace:7,activity:'running'},
        {date:new Date(2016,4,4),activity:'rest'},
        {date:new Date(2016,4,5),distance:8.3,pace:7,activity:'running'},
        {date:new Date(2016,4,6),distance:9.2,pace:7,activity:'rest'},
        {date:new Date(2016,4,7),distance:9.8,pace:7,activity:'running'},
        {date:new Date(2016,4,8),distance:10.2,pace:7,activity:'running'},
    ];
    var activities = ['running', 'swimming', 'biking', 'rowing', 'rest'];
    return {schedule:schedule, activities:activities, myProgress:myProgress};
});

landing.controller('LandingCtrl', ['$scope', '$http',  
  function($scope, $http) {
    
  }]);