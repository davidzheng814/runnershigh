var progress = angular.module('progress', []);

progress.controller('ProgressCtrl', ['$scope', '$http', 'userVars', 'schedVars', 'highchartsNG',
  function($scope, $http, userVars, schedVars, highchartsNG) {
    $scope.schedule = schedVars.schedule;

    function lastSunday(d) {
      d.setDate(d.getDate() - d.getDay());
      return d.getTime();
    }
    $scope.goalMileages = {}, $scope.goalPaces = {};
    for (i = 0; i < $scope.schedule.length; ++i) {
      var nearest = parseInt(lastSunday($scope.schedule[i].date));
      if(nearest in $scope.goalMileages) {
        $scope.goalMileages[nearest] = Math.max($scope.schedule[i].distance, $scope.goalMileages[nearest]);
        $scope.goalPaces[nearest] = Math.min($scope.schedule[i].pace, $scope.goalPaces[nearest]);
      } else {
        $scope.goalMileages[nearest] = $scope.schedule[i].distance;
        $scope.goalPaces[nearest] = $scope.schedule[i].pace;
      }
    }

    var newGoalMileages = [], newGoalPaces = [];
    for(time in $scope.goalMileages){
      time = parseInt(time);
      newGoalMileages.push([time, $scope.goalMileages[time]]);
    }
    for(time in $scope.goalPaces) {
      time = parseInt(time);
      newGoalPaces.push([time, $scope.goalPaces[time]]);
    }
    $scope.goalMileages = newGoalMileages, $scope.goalPaces = newGoalPaces;
    $scope.goalMileages.sort(function(a, b){return a[0] - b[0]});
    $scope.goalPaces.sort(function(a, b){return a[0] - b[0]});
    $scope.optionsConfig = {
        options: {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'My Progress'
            },
            subtitle: {
                text: 'Click and drag to zoom in'
            },
            xAxis: {
              type:'datetime'
            },
            yAxis: [{
                labels: {
                  format: '{value} mi'
                },
                title: {
                    text: 'Max Mileage'
                },
            }, { 
                opposite: true, 
                labels: {
                  formatter: function(){
                    return Math.floor(this.value) + ":" + Math.round(60*(this.value - Math.floor(this.value))) + ' min/mi'
                  }
                },
                title: {
                    text: 'Min Pace'
                }
            }, ],
        },
        series: [{
          name: 'Max Mileage',
          type: 'line',
          yAxis: 0,
          data: $scope.goalMileages
        }, {
          name: 'Min Pace', 
          type: 'line', 
          yAxis: 1,
          data: $scope.goalPaces
        }]
    };
}]);

/*
  - date
  - pace (in min/mi)
  - distance (in mi)
  - trailId
  - activity
  schedVars.activities: ["running", "biking", "swimming", "rowing", "rest"]

*/