var create = angular.module('create', ['nya.bootstrap.select']);

create.factory('createVars', function(){
  var createVars = {
    selectedDays:[], currentPace:"", achievedPace:"", startDate:new Date(0, 0, 0), raceDate:new Date(0, 0, 0),
    mileage:"", mileages:[" <5 miles"," 5-10 miles"," 10-15 miles"," 15-20 miles"," 20-26 miles"," >26 miles"]
  };
  var programs = [{
    activities:['running', 'running', 'running', 'running', 'running', 'running', 'running'],
    sched:{
      running:[
        {distance:6,pace:8.5},
        {distance:7,pace:8},
        {distance:8,pace:8},
        {distance:9,pace:7.5},
        {distance:10,pace:7},
        {distance:11,pace:7},
        {distance:12,pace:7.5},
        {distance:13,pace:8},
        {distance:13,pace:7.5},
        {distance:15,pace:7.5},
        {distance:17,pace:7.5},
        {distance:17,pace:7.5},
        {distance:20,pace:7.5},
        {distance:20,pace:7.5},
        {distance:20,pace:7.5},
        {distance:20,pace:7.5},
        {distance:20,pace:7.5},
        {distance:20,pace:7.5},
        {distance:20,pace:7.5},
        {distance:20,pace:7.5},
        {distance:20,pace:7.5},
        {distance:20,pace:7.5},
        {distance:20,pace:7.5},
        {distance:20,pace:7.5},
        {distance:20,pace:7.5},
        {distance:20,pace:7.5}],
      biking:[
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0}],
      rowing:[
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0}],
      swimming:[
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0}]
    }}, {
    activities:['running', 'biking', 'running', 'biking', 'running', 'biking'],
    sched:{
      running:[
        {distance:6,pace:9},
        {distance:7,pace:8.5},
        {distance:8,pace:8.5},
        {distance:9,pace:8},
        {distance:10,pace:7.5},
        {distance:11,pace:7.5},
        {distance:12,pace:8},
        {distance:13,pace:8.5},
        {distance:13,pace:8},
        {distance:15,pace:8},
        {distance:17,pace:8},
        {distance:17,pace:8},
        {distance:20,pace:8},
        {distance:20,pace:8},
        {distance:20,pace:8},
        {distance:20,pace:8},
        {distance:20,pace:8},
        {distance:20,pace:8},
        {distance:20,pace:8},
        {distance:20,pace:8},
        {distance:20,pace:8},
        {distance:20,pace:8},
        {distance:20,pace:8},
        {distance:20,pace:8},
        {distance:20,pace:8},
        {distance:20,pace:8}],
      biking:[
        {distance:5,pace:6},
        {distance:5,pace:6},
        {distance:5,pace:5.5},
        {distance:5,pace:5.5},
        {distance:7,pace:5.5},
        {distance:7,pace:5.5},
        {distance:7,pace:5},
        {distance:7,pace:5},
        {distance:9,pace:5.5},
        {distance:9,pace:5.5},
        {distance:9,pace:5},
        {distance:10,pace:5.5},
        {distance:10,pace:5},
        {distance:10,pace:5},
        {distance:10,pace:5},
        {distance:10,pace:5},
        {distance:10,pace:5},
        {distance:10,pace:5},
        {distance:10,pace:5},
        {distance:10,pace:5},
        {distance:10,pace:5},
        {distance:10,pace:5},
        {distance:10,pace:5},
        {distance:10,pace:5},
        {distance:10,pace:5},
        {distance:10,pace:5}],
      rowing:[
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0}],
      swimming:[
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0}]
    }}, {
    activities:['running', 'running', 'running', 'running', 'running'],
    sched:{
      running:[
        {distance:4,pace:9},
        {distance:6,pace:8.5},
        {distance:8,pace:8.5},
        {distance:10,pace:8.5},
        {distance:12,pace:8.5},
        {distance:13,pace:8.5},
        {distance:13,pace:8},
        {distance:15,pace:8.5},
        {distance:17,pace:8.5},
        {distance:19,pace:8.5},
        {distance:20,pace:8.5},
        {distance:22,pace:8.5},
        {distance:23,pace:8.5},
        {distance:23,pace:8.5},
        {distance:23,pace:8.5},
        {distance:23,pace:8.5},
        {distance:23,pace:8.5},
        {distance:23,pace:8.5},
        {distance:23,pace:8.5},
        {distance:23,pace:8.5},
        {distance:23,pace:8.5},
        {distance:23,pace:8.5},
        {distance:23,pace:8.5},
        {distance:23,pace:8.5},
        {distance:23,pace:8.5},
        {distance:23,pace:8.5}],
      biking:[
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0}],
      rowing:[
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0}],
      swimming:[
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0}]
    }}, {
    activities:['running', 'running', 'running', 'running', 'running', 'running', 'running'],
    sched:{
      running:[
        {distance:15,pace:6},
        {distance:17,pace:6.5},
        {distance:19,pace:6.5},
        {distance:20,pace:6},
        {distance:20,pace:5.5},
        {distance:23,pace:6},
        {distance:23,pace:5.5},
        {distance:25,pace:6},
        {distance:27,pace:6},
        {distance:29,pace:6},
        {distance:30,pace:6},
        {distance:25,pace:5.5},
        {distance:30,pace:5.5},
        {distance:30,pace:5.5},
        {distance:30,pace:5.5},
        {distance:30,pace:5.5},
        {distance:30,pace:5.5},
        {distance:30,pace:5.5},
        {distance:30,pace:5.5},
        {distance:30,pace:5.5},
        {distance:30,pace:5.5},
        {distance:30,pace:5.5},
        {distance:30,pace:5.5},
        {distance:30,pace:5.5},
        {distance:30,pace:5.5},
        {distance:30,pace:5.5}],
      biking:[
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0},
        {distance:0,pace:0}],
      rowing:[
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0}],
      swimming:[
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0},
        {distance:0}]
    }
  }];
  createVars.programId = -1;
  createVars.isNewProgram = false;
  var createSchedule = function(schedule){
    createVars.isNewProgram = false;
    var toLongDay = {Sun:'Sunday', Mon:'Monday', Tues:'Tuesday', Wed:'Wednesday', Thurs:'Thursday', Fri:'Friday', Sat:'Saturday'};
    createVars.trainingDays = [];
    for(day of createVars.selectedDays) {
      createVars.trainingDays.push(toLongDay[day]);
    }
    schedule.length = 0;
    var program = programs[createVars.programId];
    createVars.myActivities = {Sunday:'rest', Monday:'rest', Tuesday:'rest', Wednesday:'rest', Thursday:'rest', Friday:'rest', Saturday:'rest'};
    for(i = 0; i < createVars.trainingDays.length; ++i) {
      createVars.myActivities[createVars.trainingDays[i]] = program.activities[i];
    }
    var date = new Date(createVars.startDate);
    var toDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var counter = 0;
    function lastSunday(day) {
      d = new Date(day);
      d.setDate(d.getDate() - d.getDay());
      return d;
    }
    var lastSun = lastSunday(date);
    while (date.getTime() <= createVars.raceDate.getTime()) {
      var day = toDay[date.getDay()];
      var activity = createVars.myActivities[day];
      if(activity == 'running' || activity == 'biking') {
        schedule.push({date:new Date(date), activity:activity, 
          distance:program.sched[activity][counter].distance,
          pace:program.sched[activity][counter].pace});
      } else if (activity == 'swimming' || activity == 'rowing') {
        schedule.push({date:new Date(date), activity:activity, distance:program.sched[activity][counter]});
      } else {
        schedule.push({date:new Date(date), activity:activity});
      }
      date.setDate(date.getDate() + 1);
      if(lastSunday(date).getTime() != lastSun.getTime()) {
        lastSun = lastSunday(date);
        ++counter;
      }
    }
  }
  createVars.programs = programs, createVars.createSchedule = createSchedule;
  window.createVars = createVars;
  return createVars;
});

create.controller('CreateGeneralCtrl', ['$scope', '$http', 'createVars', 'schedVars', 
  function($scope, $http, createVars, schedVars) {
    $scope.days = schedVars.days;
    $scope.mileages = createVars.mileages;
    $scope.selectedDays = createVars.selectedDays;
    $scope.currentPace = createVars.currentPace;
    $scope.achievedPace = createVars.achievedPace;


    $scope.dateToString = function(date){
      if(date.getFullYear() == 1899) return "";
      return (date.getMonth() + 1)+'/'+date.getDate()+'/'+(''+date.getFullYear()).substring(2);
    };

    $scope.startDate = $scope.dateToString(createVars.startDate);
    $scope.raceDate = $scope.dateToString(createVars.raceDate);
    $scope.mileage = createVars.mileage;
    create = $scope;
    $scope.$on('$viewContentLoaded', function(){
      $scope.restrictDate($scope.startDate);
    });

    $scope.update = function() {
      createVars.currentPace = $scope.currentPace;
      createVars.achievedPace = $scope.achievedPace;
      if ($scope.startDate=="") {
        createVars.startDate = new Date(0, 0, 0);
      }
      else {
        createVars.startDate = new Date($scope.startDate);
      }
      if ($scope.raceDate=="") {
        createVars.raceDate = new Date(0, 0, 0);
      }
      else {
        createVars.raceDate = new Date($scope.raceDate);
      }
      createVars.selectedDays = $scope.selectedDays;
      createVars.mileage = $scope.mileage;
      var re = /^\d\d?\:\d\d$/;
      if (createVars.currentPace=="" || createVars.achievedPace=="" ||
          createVars.startDate.getTime()==new Date(0,0,0).getTime() || createVars.raceDate.getTime()==new Date(0,0,0).getTime() ||
          createVars.selectedDays.length==0 || createVars.mileage=="") {
        $("#missing-info")[0].style.display = "block";
        if ((createVars.currentPace.match(re)==null && createVars.currentPace!="") || 
            (createVars.achievedPace.match(re)==null && createVars.achievedPace!="") ||
            (parseInt(createVars.currentPace.slice(-2),10)>=60) ||
            (parseInt(createVars.achievedPace.slice(-2),10)>=60)) {
          $("#pace-error")[0].style.display = "block";
        }
        else {
          $("#pace-error")[0].style.display = "none";
        }
        return;
      }
      else {
        if ((createVars.currentPace.match(re)==null && createVars.currentPace!="") || 
            (createVars.achievedPace.match(re)==null && createVars.achievedPace!="") ||
            (parseInt(createVars.currentPace.slice(-2),10)>=60) ||
            (parseInt(createVars.achievedPace.slice(-2),10)>=60)) {
          $("#pace-error")[0].style.display = "block";
          return;
        }
        $("#missing-info")[0].style.display = "none";
      }
      window.location.href = "#create/programs";
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

    $scope.mileageToLowerBound = function(mileage) {
      mileages:[" <5 miles"," 5-10 miles"," 10-15 miles"," 15-20 miles"," 20-26 miles"," >26 miles"]
      if (mileage==" <5 miles") {
        return " a mile";
      }
      else if (mileage==" >26 miles") {
        return " a marathon";
      }
      else if (mileage==" 5-10 miles") {
        return " 5 miles";
      }
      else if (mileage==" 10-15 miles") {
        return " 10 miles";
      }
      else if (mileage==" 15-20 miles") {
        return " 15 miles";
      }
      else if (mileage==" 20-26 miles") {
        return " 20 miles";
      }
    }
  }]);

create.controller('CreateProgramsCtrl', ['$scope', '$routeParams', 'createVars', 
  function($scope, $routeParams, createVars) {
    $scope.programs = {
      waitz: {
        name : "Waitz",
        programId: 0,
        difficulty: 4,
        description: ["0 rest days",
                        "0 cross-training days",
                        "Builds long run to 20 miles",
                        "Aims for 7.5 min/mile marathon"]
      },
      first: {
        name: "FIRST",
        programId:1,
        difficulty: 3,
        description: ["1 rest day",
                        "3 cross-training days",
                        "Builds long run to 20 miles",
                        "Aims for 8 min/mile marathon"]
      },
      active: {
        name: "ACTIVE",
        programId:2,
        difficulty: 2,
        description: ["2 rest days",
                        "0 cross-training days",
                        "Builds long run to 23 miles",
                        "Aims for 8.5 min/mile marathon"]
      },
      deathrun: {
        name: "Death Run",
        programId:3,
        difficulty: 5,
        description: ["0 rest days",
                        "No cross-training",
                        "Builds long run to 30 miles",
                        "Aims for 5.5 min/mile marathon"]
      }
    };
    $scope.own = {
        "name" : "Own",
        "difficulty" : 0,
        "description" : []
      };
    $scope.range = new Array(5);
    $scope.createVars = createVars;

    $scope.back = function() {
      window.location.href = "#create/general";
    }

    $scope.update = function() {
      if (createVars.programId < 0) {
        $("#no-continue")[0].style.display = "block";
        return;
      }
      window.location.href = "#create/details";
    }

    $scope.selectProgram = function(program) {
      createVars.programId = program.programId;
      createVars.isNewProgram = true;
    }
  }]);

create.controller('CreateDetailsCtrl', ['$scope', '$routeParams', 'createVars', 'schedVars', 
  function($scope, $routeParams, createVars, schedVars) {
    create = $scope;
    $scope.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    if(createVars.isNewProgram) createVars.createSchedule(schedVars.schedule);
    // createVars.myActivities = {Sunday:'rest', Monday:'rest', Tuesday:'rest', Wednesday:'running', 
    //                            Thursday:'running',Friday:'running', Saturday:'running'};
    $scope.myActivities = createVars.myActivities;
    $scope.activities = schedVars.activities;
    $scope.schedule = schedVars.schedule;
    $scope.scheduleByWeek = [];
    $scope.error = false;

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
        $scope.scheduleByWeek.push({date:currLastSunday,sched:[],show:false,hasError:false});
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

    $scope.$watch('myActivities', function(newValue, oldValue) {
      var program = createVars.programs[createVars.programId];
      var toDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      for(day in newValue) {
        if(newValue[day] != oldValue[day]) {
          var newActivity = newValue[day];
          var ind = 0;
          for(i = 0; i < $scope.schedule.length; ++i) {
            if(day == toDay[$scope.schedule[i].date.getDay()]) {
              $scope.schedule[i].activity = newActivity;
              if(newActivity == 'running' || newActivity == 'biking') {
                $scope.schedule[i].pace = program.sched[newActivity][ind].pace;
                $scope.schedule[i].distance = program.sched[newActivity][ind].distance;
              } else if(newActivity == 'swimming' || newActivity == 'rowing') {
                delete $scope.schedule[i].pace;
                $scope.schedule[i].distance = program.sched[newActivity][ind].distance;
              }else {
                delete $scope.schedule[i].distance, delete $scope.schedule[i].pace;
              }
              ++ind;
            }
          }
        }
      }
    }, true);
  
    $scope.changedActivity = function(day) {
      delete day['pace'], delete day['distance'];
      $('#'+day.activity+'-dist-'+day.date.getTime()).val("");
      $('#'+day.activity+'-pace-'+day.date.getTime()).val("");
      if(day.activity == 'rowing' || day.activity=='swimming') {
        day.distance = 0;
      } else if(day.activity == 'biking' || day.activity == 'running'){
        day.distance = 0;
        day.pace = 0;
      }
      $scope.changed(day);
    }

    $scope.changed = function(day) {
      if (day.activity == 'rowing') {
        var val = parseInt($('#rowing-dist-'+day.date.getTime()).val());
        if(isNaN(val) || val <= 0) {
          $('#rowing-dist-'+day.date.getTime()).val(day.distance == 0 ? "" : day.distance);
        } else {
          day.distance = val;
        }
      } else if (day.activity == 'swimming') {
        var val = parseInt($('#swimming-dist-'+day.date.getTime()).val());
        if(isNaN(val) || val <= 0) {
          $('#swimming-dist-'+day.date.getTime()).val(day.distance == 0 ? "" : day.distance);
        } else {
          day.distance = val;
        }
      } else if (day.activity == 'biking') {
        var val = parseInt($('#biking-dist-'+day.date.getTime()).val());
        if(isNaN(val) || val <= 0) {
          $('#biking-dist-'+day.date.getTime()).val(day.distance == 0 ? "" : day.distance);
        } else {
          day.distance = val;
        }

        val = $('#biking-pace-'+day.date.getTime()).val();
        val = parseInt(val.split(':')[0]) + parseInt(val.split(':')[1])/60;
        if(isNaN(val) || val <= 0) {
          var seconds = ("0" + Math.round((day.pace - Math.floor(day.pace))*60)).slice(-2);
          $('#biking-pace-'+day.date.getTime()).val(day.pace == 0 ? "" : Math.floor(day.pace)+':'+seconds);
        } else {
          day.pace = val;
        }
      } else if (day.activity == 'running') {
        var val = parseInt($('#running-dist-'+day.date.getTime()).val());
        if(isNaN(val) || val <= 0) {
          $('#running-dist-'+day.date.getTime()).val(day.distance == 0 ? "" : day.distance);
        } else {
          day.distance = val;
        }

        val = $('#running-pace-'+day.date.getTime()).val();
        val = parseInt(val.split(':')[0]) + parseInt(val.split(':')[1])/60;
        if(isNaN(val) || val <= 0) {
          var seconds = ("0" + Math.round((day.pace - Math.floor(day.pace))*60)).slice(-2);
          $('#running-pace-'+day.date.getTime()).val(day.pace == 0 ? "" : Math.floor(day.pace)+':'+seconds);
        } else {
          day.pace = val;
        }
      }
    }

    $scope.submit = function(){
      $scope.error = false;
      for(week of $scope.scheduleByWeek) {
        week.hasError = false;
        for(day of week.sched) {
          if(('distance' in day && day.distance == 0) || ('pace' in day && day.pace == 0)) {
            $scope.error = true;
            week.hasError = true;
          }
        }
      }
      if($scope.error) return;
      window.location.href = '#create/finished';
    }

    $scope.optionsConfig = {
      options: {
          chart: {
              zoomType: 'x',
              height:360
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
    function addTrails(){
      for(day of schedVars.schedule) {
        if(day.activity != 'running' && day.activity != 'biking') continue;
        var closest = null;
        var diff = 0;
        for(trail of trailVars.trails) {
          if(closest == null || Math.abs(trail.distance - day.distance) < diff) {
            closest = trail;
            diff = Math.abs(trail.distance - day.distance);
          }
        }
        day.currTrail = closest.id;
      }
    }
    addTrails();
  }]);

create.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

create.filter('weekRange', function(){
  return function(date) {
    var end = new Date(date);
    end.setDate(end.getDate() + 6);
    var text = (date.getMonth()+1)+'/'+date.getDate();
    var endtext = (end.getMonth() + 1) + '/' + end.getDate();
    return text+'-'+endtext;
  }
});

create.filter('maxMileage', function(){
  return function(sched) {
    var maxMileage = 0;
    for(i = 0; i < sched.length; ++i) {
      if(sched[i].activity != 'running') continue;
      maxMileage = Math.max(sched[i].distance,maxMileage);
    }
    if(maxMileage == 0) {
      return "N/A";
    }
    return maxMileage+' mi';
  }
});

create.filter('formatMinPace', function(){
  return function(sched){
    var minPace = 100;
    for(i = 0; i < sched.length; ++i) {
      if(sched[i].activity != 'running') continue;
      if(sched[i].pace == 0) continue;
      minPace = Math.min(sched[i].pace,minPace);
    }
    if(minPace == 100) {
      return "N/A";
    }
    var seconds = ("0" + Math.round((minPace - Math.floor(minPace))*60)).slice(-2);
    return Math.floor(minPace)+':'+seconds+' min/mi';
  }
});

create.filter('formatPace', function(){
  return function(pace){
    if(pace == 0) {
      return "";
    }
    var seconds = ("0" + Math.round((pace - Math.floor(pace))*60)).slice(-2);
    return Math.floor(pace)+':'+seconds;
  }
});

create.filter('formatDistance', function(){
  return function(dist){
    if(dist == 0){
      return "";
    }
    return dist+"";
  }
})


create.filter('formatDate', function(){
  return function(date) {
    var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return day[date.getDay()] + ' ' + (date.getMonth()+1)+'/'+date.getDate();
  }
})