var landing = angular.module('landing', []);

landing.factory('userVars', function(){
    return {};
});

landing.factory('schedVars', function(){
    var schedule = [
        {date:new Date(2016,4,1),distance:4,pace:8},
        {date:new Date(2016,4,2),distance:4,pace:8},
        {date:new Date(2016,4,3),distance:4,pace:7},
        {date:new Date(2016,4,4),distance:5,pace:7},
        {date:new Date(2016,4,5),distance:8,pace:7},
        {date:new Date(2016,4,6),distance:9,pace:7},
        {date:new Date(2016,4,7),distance:10,pace:7},
        {date:new Date(2016,4,8),distance:10,pace:7},
        {date:new Date(2016,4,9),distance:11,pace:7},
        {date:new Date(2016,4,10),distance:12,pace:7},
        {date:new Date(2016,4,11),distance:13,pace:7},
        {date:new Date(2016,4,12),distance:14,pace:7},
        {date:new Date(2016,4,13),distance:15,pace:6},
        {date:new Date(2016,4,14),distance:16,pace:6},
        {date:new Date(2016,4,15),distance:17,pace:6},
        {date:new Date(2016,4,16),distance:19,pace:6},
        {date:new Date(2016,4,17),distance:22,pace:6},
        {date:new Date(2016,4,18),distance:22,pace:6},
        {date:new Date(2016,4,19),distance:22,pace:6},
        {date:new Date(2016,4,20),distance:23,pace:6},
        {date:new Date(2016,4,21),distance:24,pace:6},
        {date:new Date(2016,4,22),distance:24,pace:6},
        {date:new Date(2016,4,23),distance:24,pace:6},
        {date:new Date(2016,4,24),distance:24,pace:6},
        {date:new Date(2016,4,25),distance:24,pace:5},
        {date:new Date(2016,4,26),distance:24,pace:5},
        {date:new Date(2016,4,27),distance:24,pace:5},
        {date:new Date(2016,4,28),distance:24,pace:5},
        {date:new Date(2016,4,29),distance:24,pace:5},
        {date:new Date(2016,4,30),distance:24,pace:5},
        {date:new Date(2016,4,31),distance:24,pace:5}
    ]
    return {schedule:schedule};
});

landing.controller('LandingCtrl', ['$scope', '$http',  
  function($scope, $http) {
    
  }]);