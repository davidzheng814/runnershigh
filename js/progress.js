var progress = angular.module('progress', []);

progress.controller('ProgressCtrl', ['$scope', '$http', 'userVars', 'schedVars', 'highchartsNG',
  function($scope, $http, userVars, schedVars, highchartsNG) {
    $scope.schedule = schedVars.schedule;
    $scope.myProgress = schedVars.myProgress;

    $scope.goalMileages = [], $scope.goalPaces = [];
    for (i = 0; i < $scope.schedule.length; ++i) {
      if($scope.schedule[i].activity != 'running') continue;
      $scope.goalMileages.push([$scope.schedule[i].date.getTime(), $scope.schedule[i].distance]);
      $scope.goalPaces.push([$scope.schedule[i].date.getTime(), $scope.schedule[i].pace]);
    }

    $scope.myMileages = [], $scope.myPaces = [];
    for (i = 0; i < $scope.myProgress.length; ++i) {
      if($scope.myProgress[i].activity != 'running') continue;
      $scope.myMileages.push([$scope.myProgress[i].date.getTime(), $scope.myProgress[i].distance]);
      $scope.myPaces.push([$scope.myProgress[i].date.getTime(), $scope.myProgress[i].pace]);
    }
    
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
              type:'datetime',
              dateTimeLabelFormats:{
                day: '%m/%d',
                week: '%m/%d', 
                month: '%m/%d'
              },
              startOnTick:true,
              endOnTick:true
            },
            yAxis: [{
              labels: {
                format: '{value} mi',
                reserveSpace:true,
                style: {
                  color:'#5454FF'
                }
              },
              title: {
                text: 'Mileage',
                style: {
                  'font-size':'20px',
                  color:'#5454FF'
                }
              }
            }, { 
                opposite: true, 
                labels: {
                  formatter: function(){
                    return Math.floor(this.value) + ":" + ("0" + Math.round(60*(this.value - Math.floor(this.value)))).slice(-2) + ' min/mi'
                  },
                  reserveSpace:true,
                  style: {
                    color:'#388948'
                  }
                },
                title: {
                    text: 'Pace',
                    style: {
                      'font-size':'20px',
                      color:'#388948'
                    } // 7CB5EC
                }
            }],
            tooltip: {
              shared:true,
              xDateFormat: '%m/%d/%Y',
              backgroundColor: 'rgba(255, 255, 255, 0.95)'
            }
        },
        series: [{
          name: 'Goal Mileage',
          type: 'line',
          yAxis: 0,
          data: $scope.goalMileages,
          color:'#7CB5EC',
          tooltip: {
            valueSuffix:' mi'
          }
        }, {
          name: 'My Mileage', 
          type: 'line', 
          yAxis: 0,
          data: $scope.myMileages,
          color:'#0053A6',
          lineWidth:3,
          tooltip: {
            valueSuffix:' mi'
          }
        }, {
          name: 'Goal Pace', 
          type: 'line', 
          yAxis: 1,
          data: $scope.goalPaces,
          color:'#65D470',
          tooltip: {
            pointFormatter: function(){
              var value = this.y;
              var yFormat = Math.floor(value) + ":" + ("0" + Math.round(60*(value - Math.floor(value)))).slice(-2);
              var color = "#65D470";
              return '<span style="color:'+color+'">\u25CF</span> Goal Pace: <b>'+yFormat+' min/mi</b><br/>';
            }
          }
        }, {
          name: 'My Pace', 
          type: 'line', 
          yAxis: 1,
          data: $scope.myPaces,
          color:'#016B0C',
          lineWidth:3,
          tooltip: {
            pointFormatter: function(){
              var value = this.y;
              var yFormat = Math.floor(value) + ":" + ("0" + Math.round(60*(value - Math.floor(value)))).slice(-2);
              var color = "#016B0C";
              return '<span style="color:'+color+'">\u25CF</span> My Pace: <b>'+yFormat+' min/mi</b><br/>';
            }
          }
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