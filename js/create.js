var create = angular.module('create', ['nya.bootstrap.select']);

create.factory('createVars', function(){
  var selectedDays = [];
  var currentPace = "";
  var achievedPace = "";
  var startDate = "";
  var raceDate = "";
  var mileage = 0;
  var mileages = [" <5 miles"," 5-10 miles"," 10-15 miles"," >15 miles"];
  return {selectedDays:selectedDays,currentPace:currentPace,achievedPace:achievedPace,startDate:startDate,raceDate:raceDate,mileage:mileage};
});

create.controller('CreateGeneralCtrl', ['$scope', '$http', 'createVars', 'schedVars', 
  function($scope, $http, createVars, schedVars) {
    // console.log(createVars);
    $scope.days = schedVars.days;
    $scope.mileages = createVars.mileages;
    $scope.selectedDays = createVars.selectedDays;
    $scope.currentPace=createVars.currentPace;
    $scope.achievedPace=createVars.achievedPace;
    $scope.startDate=createVars.startDate;
    $scope.raceDate=createVars.raceDate;
    $scope.mileage=createVars.mileage;
    create = $scope;
    
    $scope.update = function() {
      // console.log($scope);
      createVars.currentPace = $scope.currentPace;
      createVars.achievedPace = $scope.achievedPace;
      createVars.startDate = $scope.startDate;
      createVars.raceDate = $scope.raceDate;
      createVars.selectedDays = $scope.selectedDays;
      createVars.mileage = $scope.mileage;
      // console.log(createVars);
      window.location.href = "#create/programs";
      console.log(createVars);
    }

    $scope.selectDay = function(day) {
      if ($scope.selectedDays.indexOf(day) > -1) {
        var index = $scope.selectedDays.indexOf(day);
        $scope.selectedDays.splice(index, 1);
      }
      else {
        $scope.selectedDays.push(day);
      }
    }

    $scope.restrictDate = function(startDate) {
      var date = new Date(startDate);
      if (date) {
        date.setDate(date.getDate() + 1);
      }
      $('#racedate').datepicker('option', 'defaultDate', date);
      $('#racedate').datepicker('option', 'minDate', date);
    }

    $scope.isSelectedDay = function(day) {
      return ($scope.selectedDays.indexOf(day) > -1) 
    }
  }]);

create.controller('CreateProgramsCtrl', ['$scope', '$routeParams', 'createVars', 
  function($scope, $routeParams, createVars) {
    $scope.programs = {
      "waitz" : {
        "name" : "Waitz",
        "difficulty" : 4,
        "description" : ["Running every day",
                         "Alternate easy and hard runs",
                         "Builds long run to 20 miles",
                         "No cross-training"]
      },
      "first" : {
        "name" : "FIRST",
        "difficulty" : 3,
        "description" : ["1 rest day",
                         "Alternate running and cross-training",
                         "Builds long run to 20 miles"]
      },
      "active" : {
        "name" : "ACTIVE",
        "difficulty" : 2,
        "description" : ["2 rest days",
                         "Builds running up throughout the week",
                         "Builds long run to 23 miles",
                         "No cross-training"]
      },
      "deathrun" : {
        "name" : "Death Run",
        "difficulty" : 5,
        "description" : ["Running every day",
                         "Run 15+ miles every day",
                         "Builds long run to 30 miles",
                         "No cross-training"]
      }
    };
    $scope.own = {
        "name" : "Own",
        "difficulty" : 0,
        "description" : []
      };
    $scope.range = new Array(5);

    $scope.back = function() {
      console.log(createVars);
      window.location.href = "#create/general";
      console.log(createVars);
    }

    $scope.update = function() {
      if ($scope.program===undefined) {
        $("#no-continue")[0].style.display = "block";
      }
      else {
        createVars.program = $scope.program;
        window.location.href = "#create/details";
      }
    }

    $scope.selectProgram = function(program) {
      $scope.program = program;
      for (var key in $scope.programs) {
        $(document.getElementsByName($scope.programs[key].name)).removeClass("ui-selected");
        $(document.getElementsByName($scope.own.name)).removeClass("ui-selected");
    };
      $(document.getElementsByName(program.name)).addClass("ui-selected");
    }

    $scope.createProgram = function() {
      $scope.program = $scope.own;
      for (var key in $scope.programs) {
        $(document.getElementsByName($scope.programs[key].name)).removeClass("ui-selected");
    };
      $(document.getElementsByName($scope.program.name)).addClass("ui-selected");
    }
  }]);

create.controller('CreateDetailsCtrl', ['$scope', '$routeParams', 'createVars', 'schedVars', 
  function($scope, $routeParams, createVars, schedVars) {
    create = $scope;
    $scope.days = schedVars.days;
    createVars.myActivities = {Sunday:'rest', Monday:'rest', Tuesday:'rest', Wednesday:'running', 
                               Thursday:'running',Friday:'running', Saturday:'running'};
    $scope.myActivities = createVars.myActivities;
    $scope.activities = schedVars.activities;
    $scope.schedule = schedVars.schedule;
    $scope.scheduleByWeek = [];

    $scope.showWeek = function(week){
      week.show = !week.show;
    }

    function lastSunday(day) {
      d = new Date(day);
      d.setDate(d.getDate() - d.getDay());
      return d;
    }
    Date.prototype.equals = function(pDate) {
      return (
        this.getFullYear() === pDate.getFullYear() &&
        this.getMonth() === pDate.getMonth() &&
        this.getDate() === pDate.getDate()
      );
    }

    var currLastSunday = null;
    var ind = -1;
    for(i = 0; i < $scope.schedule.length; ++i) {
      lastSunday_ = lastSunday($scope.schedule[i].date);
      if(currLastSunday == null || !currLastSunday.equals(lastSunday_)) {
        currLastSunday = lastSunday_;
        $scope.scheduleByWeek.push({date:currLastSunday,sched:[],show:false});
        ++ind;
      }
      $scope.scheduleByWeek[ind].sched.push($scope.schedule[i]);
    }

    $scope.goalMileages = [], $scope.goalPaces = [];
    $scope.updateChart = function (oldValue, newValue) {
      $scope.goalMileages.length = 0, $scope.goalPaces.length = 0;
      for (i = 0; i < $scope.schedule.length; ++i) {
        if($scope.schedule[i].activity != 'running') continue;
        $scope.goalMileages.push([$scope.schedule[i].date.getTime(), $scope.schedule[i].distance]);
        $scope.goalPaces.push([$scope.schedule[i].date.getTime(), $scope.schedule[i].pace]);
      }
    };
    $scope.$watch(function(){
      return $scope.schedule;
    }, $scope.updateChart, true);

    $scope.changed = function(day) {
      if(day.activity == 'rest') {
        delete day['pace'], delete day["distance"];
      } else if(day.activity == 'rowing' || day.activity=='swimming') {
        delete day['pace'];
        if(!('distance' in day)) {
          day.distance = 0;
        }
      } else {
        if(!('distance' in day)) {
          day.distance = 0;
        }
        if(!('pace' in day)) {
          day.pace = 0;
        }
      }
      if (day.activity == 'rowing') {
        var val = parseInt($('#rowing-dist-'+day.date.getTime()).val());
        if(isNaN(val)) {
          $('#rowing-dist-'+day.date.getTime()).val(day.distance);
        } else {
          day.distance = val;
        }
      } else if (day.activity == 'swimming') {
        var val = parseInt($('#swimming-dist-'+day.date.getTime()).val());
        if(isNaN(val)) {
          $('#swimming-dist-'+day.date.getTime()).val(day.distance);
        } else {
          day.distance = val;
        }
      } else if (day.activity == 'biking') {
        var val = parseInt($('#biking-dist-'+day.date.getTime()).val());
        if(isNaN(val)) {
          $('#biking-dist-'+day.date.getTime()).val(day.distance);
        } else {
          day.distance = val;
        }

        val = $('#biking-pace-'+day.date.getTime()).val();
        val = parseInt(val.split(':')[0]) + parseInt(val.split(':')[1])/60;
        if(isNaN(val)) {
          var seconds = ("0" + Math.round((day.pace - Math.floor(day.pace))*60)).slice(-2);
          $('#biking-pace-'+day.date.getTime()).val(Math.floor(day.pace)+':'+seconds);
        } else {
          day.pace = val;
        }
      } else if (day.activity == 'running') {
        var val = parseInt($('#running-dist-'+day.date.getTime()).val());
        if(isNaN(val)) {
          $('#running-dist-'+day.date.getTime()).val(day.distance);
        } else {
          day.distance = val;
        }

        val = $('#running-pace-'+day.date.getTime()).val();
        val = parseInt(val.split(':')[0]) + parseInt(val.split(':')[1])/60;
        if(isNaN(val)) {
          var seconds = ("0" + Math.round((day.pace - Math.floor(day.pace))*60)).slice(-2);
          $('#running-pace-'+day.date.getTime()).val(Math.floor(day.pace)+':'+seconds);
        } else {
          day.pace = val;
        }
      }
    };

    $scope.optionsConfig = {
      options: {
          chart: {
              zoomType: 'x'
          },
          title: {
              text: ''
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
                  }
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
      }]
    };
  }]);

create.controller('CreateFinishedCtrl', ['$scope', '$routeParams', 'createVars', 'trailVars', 'schedVars',
  function($scope, $routeParams, createVars, trailVars, schedVars) {

  }]);

create.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

create.filter('weekRange', function(){
  return function(date) {
    var text = (date.getMonth()+1)+'/'+date.getDate();
    return text;
  }
});

create.filter('maxMileage', function(){
  return function(sched) {
    var maxMileage = 0;
    for(i = 0; i < sched.length; ++i) {
      if(sched[i].activity != 'running') continue;
      maxMileage = Math.max(sched[i].distance,maxMileage);
    }
    return maxMileage+' mi';
  }
});

create.filter('formatMinPace', function(){
  return function(sched){
    var minPace = 100;
    for(i = 0; i < sched.length; ++i) {
      if(sched[i].activity != 'running') continue;
      minPace = Math.min(sched[i].pace,minPace);
    }
    var seconds = ("0" + Math.round((minPace - Math.floor(minPace))*60)).slice(-2);
    return Math.floor(minPace)+':'+seconds;
  }
});

create.filter('formatPace', function(){
  return function(pace){
    var seconds = ("0" + Math.round((pace - Math.floor(pace))*60)).slice(-2);
    return Math.floor(pace)+':'+seconds;
  }
});


create.filter('formatDate', function(){
  return function(date) {
    var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return day[date.getDay()] + ' ' + (date.getMonth()+1)+'/'+date.getDate();
  }
})