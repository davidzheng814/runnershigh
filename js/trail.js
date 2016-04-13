var trail = angular.module('trail', [
    
]);

trail.factory('trailVars', function(){
    return {
        trails:[
        {name:'Trail 1', distance:5, id:"1"},{name: 'Trail 2',distance:6.2, id:"2"},{name: 'Trail 3',distance:6.4, id:"3"},
        {name:'Trail 4', distance:6.5, id:"4"},{name: 'Trail 5',distance:6.7, id:"5"},{name: 'Trail 6',distance:6.9, id:"6"},
        {name:'Trail 7', distance:7.2, id:"7"},{name: 'Trail 8',distance:7.5, id:"8"},{name: 'Trail 9',distance:7.8, id:"9"},
        {name:'Trail 10', distance:7.9, id:"10"},{name: 'Trail 11',distance:8.2, id:"11"},{name: 'Trail 12',distance:8.5, id:"12"}
        ], 
        idToPos:{
            "1":0, "2":1, "3":2, "4":3, "5":4, "6":5, "7":6, "8":7, "9":8, "10":9, "11":10, "12":11
        }
    };
});

trail.controller('TrailCtrl', ['$scope', '$http', 'userVars', 'schedVars', 'trailVars', 
  function($scope, $http, userVars, schedVars, trailVars) {
    trail = $scope;
    $scope.currDayInfo = {
        distance:6.3,
        currTrail:"2"
    } // TODO
    $scope.trailVars = trailVars;
    $scope.currTrail = $scope.currDayInfo.currTrail;
    $scope.selectedTrail = $scope.currTrail;
    $scope.map = { 
        center: { 
            latitude: 42.3736, longitude: -71.1097 
        }, 
        zoom: 14
    };

    $scope.newValue = function(newValue){
        $scope.selectedTrail = newValue;
    }

    $scope.save = function(){
        $scope.currDayInfo.currTrail = $scope.selectedTrail;
        window.location.href="#main"
    }
}]);
