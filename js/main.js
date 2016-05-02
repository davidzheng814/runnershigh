var main = angular.module('main', []);

main.controller('MainCtrl', ['$scope', '$http', 'userVars', 'schedVars', 'trailVars', 'uiGmapIsReady',
  function($scope, $http, userVars, schedVars, trailVars, uiGmapIsReady) {

    past = {
        'running': 'ran',
        'swimming': 'swam',
        'biking': 'biked',
        'rowing': 'rowed',
        'rest': 'rest'
    };

    $scope.calendarView = 'month';
    $scope.viewDate = new Date();

    paceToString = function(pace) {
        var int = Math.floor(pace);
        var frac = pace - int;
        var fracString = Math.round(frac*60).toString();
        if(fracString.length == 1){ fracString = "0" + fracString;}
        return int.toString() + ":" + fracString;
    }

    $scope.events = []
    for(var i=0; i < schedVars.schedule.length; i++){
        var x = schedVars.schedule[i]
        if(x.activity != "rest"){
            var alreadyDone = false;
            for(var j=0; j < schedVars.myProgress.length; j++){
                if(x.date.getTime() == schedVars.myProgress[j].date.getTime()){
                    var y = schedVars.myProgress[j];
                    alreadyDone = true;
                    break;
                }
            }
            if(alreadyDone){
                $scope.events.push({
                    startsAt: x.date,
                    activity: past[x.activity],
                    pace: paceToString(y.pace),
                    distance: y.distance,
                    cssClass: 'past-event'
                });
            } else {
                var whichClass = "";
                var yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                if(x.date.getTime() < yesterday.getTime()){
                    whichClass = "not-done-event";
                }
                $scope.events.push({
                    startsAt: x.date,
                    activity: x.activity,
                    pace: paceToString(x.pace),
                    distance: x.distance,
                    cssClass: whichClass
                });
            }
        }
    }


    $scope.dayClicked = function(calendarDate) {
        //scan schedule until you see something with this date, then go to that page
        //or save the date in a variable and go to new page idk
        //comparison with getTime
        for(var i=0; i < schedVars.schedule.length; i++){
            var x = schedVars.schedule[i];
            if(x.date.getTime() == calendarDate.getTime()){
                schedVars.currDayInfo = x;
                if(x.activity == "rest"){return;}
                window.location.href = "#main/day"
            }
        }
    }
  }]);

main.config(function(calendarConfig){
    calendarConfig.templates.calendarMonthView = 'customMonthView.html';
    calendarConfig.templates.calendarMonthCell = 'customMonthCell.html';
});




main.controller('DayCtrl', ['$scope', '$http', 'userVars', 'schedVars', 'trailVars', 'uiGmapIsReady', '$sce', 
  function($scope, $http, userVars, schedVars, trailVars, uiGmapIsReady, $sce) {
    day = $scope;
    $scope.currDayInfo = schedVars.currDayInfo;
    $scope.trailVars = trailVars;
    $scope.helpInd = -1;
    if(userVars.firstTime && ($scope.currDayInfo.activity == 'running' || $scope.currDayInfo.activity == 'biking')) {
        userVars.firstTime = false;
        $scope.helpInd = 0;
    }

    $scope.helpMessage = ['Welcome to your dashboard! Let\'s take a quick tour!<br><br>', 
    'This is your activity for the day.<br><br><br>', 
    'Here you can view the trail we\'ve selected for you to follow for the day. <br><br><br>', 
    'Of course, you can also discover and choose other trails.<br><br>', 
    'When you\'re done with your task, record your progress by clicking this button.<br><br>', 
    'You may change your desired goal for the day here.<br><br>',
    'Finally, you can view training details for other days with the calendar.<br><br>'
    ];
    for(i = 0; i < $scope.helpMessage.length; ++i) {
        var text = i == $scope.helpMessage.length - 1 ? 'Done' : 'Next';
        var button = '<button class="btn btn-default help-button" onclick="nextHelp()">'+text+'</button>';
        $scope.helpMessage[i] = $sce.trustAsHtml($scope.helpMessage[i] + button);
    }

    nextHelp = function(){
        $scope.$apply(function(){
            $scope.helpInd += 1;
        });
    }

    $scope.past = {
        'running': 'Ran',
        'swimming': 'Swam',
        'biking': 'Biked',
        'rowing': 'Rowed',
        'rest': 'rest'
    };
    $scope.present = {
        'running': 'Run',
        'swimming': 'Swim',
        'biking': 'Bike',
        'rowing': 'Row',
        'rest': 'rest'
    };

    //  CHOOSING WHICH ONE TO DO
    var whichPanel = ""

    if(schedVars.currDayInfo.date.getTime() < (new Date()).getTime()){ //If task has already passed
        whichPanel = "present";
        for(var i = 0; i < schedVars.myProgress.length; i++){
            if(schedVars.myProgress[i].date.getTime() == schedVars.currDayInfo.date.getTime()){
                $scope.myProgressSubmission = schedVars.myProgress[i];
                whichPanel = "past";
                break;
            }
        }
        if(whichPanel == "past"){
            $('#past-panel').show();
        } else {
            $('#present-panel').show();
        }
    } else {
        whichPanel = "future";
        $('#future-panel').show();
    }

    $scope.dateString = function(date) {
        var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return daysOfWeek[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate();
    };

    $scope.paceToString = function(pace) {
        var int = Math.floor(pace);
        var frac = pace - int;
        var fracString = Math.round(frac*60).toString();
        if(fracString.length == 1){ fracString = "0" + fracString;}
        return int.toString() + ":" + fracString;
    }

    $scope.stringToPace = function(string) {
        var splitArray = string.split(":");
        return parseInt(splitArray[0]) + (parseInt(splitArray[1]) / 60.);
    }

    $scope.taskCompleted = function() {
        $('.submit-button').hide();
        $('#input-fields').show('slow');
    }

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

    $scope.submit = function() {
        var re = /^\d\d?\:\d\d$/;
        if ($scope.submittedDistance == undefined || $scope.submittedPace == undefined) {
            $("#missing-info").show('fast');
            return;
        }
        if ($scope.submittedPace.match(re)==null ||
            (parseInt($scope.submittedPace.slice(-2),10)>=60)) {
            $("#pace-error").show('fast');
            return;
        }

        switch (whichPanel) {
            case "past":
                for(var i = 0; i < schedVars.myProgress.length; i++){
                    if(schedVars.myProgress[i].date.getTime() == schedVars.currDayInfo.date.getTime()){
                        schedVars.myProgress[i] = {
                            date:schedVars.currDayInfo.date,
                            activity:schedVars.currDayInfo.activity,
                            distance:$scope.submittedDistance,
                            pace:$scope.stringToPace($scope.submittedPace)
                        }
                        $scope.myProgressSubmission.distance = $scope.submittedDistance;
                        $scope.myProgressSubmission.pace = $scope.stringToPace($scope.submittedPace);
                        break;
                    }
                }
                $('#input-fields').hide('slow', function() {$('.submit-button').show();});
                break;
            case "present":
                schedVars.myProgress.push({
                    date:schedVars.currDayInfo.date,
                    activity:schedVars.currDayInfo.activity,
                    distance:$scope.submittedDistance,
                    pace:$scope.stringToPace($scope.submittedPace)
                });
                $scope.myProgressSubmission = schedVars.myProgress[schedVars.myProgress.length - 1];
                $('.submit-button').text('Edit Submission');
                $('#once-submitted').show('slow');
                $('#input-fields').hide('slow', function() {$('.submit-button').show();});
                break;
            case "future":
                for(var i = 0; i < schedVars.schedule.length; i++){
                    if(schedVars.schedule[i].date.getTime() == schedVars.currDayInfo.date.getTime()){
                        var day = schedVars.schedule[i];
                        if(day.activity == 'running' || day.activity == 'biking'){
                            var closest = null;
                            var diff = 0;
                            for(trail of trailVars.trails) {
                              if(closest == null || Math.abs(trail.distance - $scope.submittedDistance) < diff) {
                                closest = trail;
                                diff = Math.abs(trail.distance - $scope.submittedDistance);
                              }
                            }
                            var currTrail = closest.id;
                        }
                        schedVars.schedule[i] = {
                            date:schedVars.currDayInfo.date,
                            activity:schedVars.currDayInfo.activity,
                            distance:$scope.submittedDistance,
                            pace:$scope.stringToPace($scope.submittedPace),
                            currTrail:currTrail
                        }
                        schedVars.currDayInfo.distance = $scope.submittedDistance;
                        schedVars.currDayInfo.pace = $scope.stringToPace($scope.submittedPace);
                        $scope.newValue(currTrail);
                        break;
                    }
                }
                $('#input-fields').hide('slow', function() {$('.submit-button').show();});
                break;
            default:
                console.log("bug")
        }
        $("#pace-error").hide('slow');
        $("#missing-info").hide('slow');
    }

//----------------------------------- MAP STUFF ---------------------------------//
    $scope.mapconfig = trailVars.mapconfig;

    if(!('currDayInfo' in schedVars)) {
      schedVars.currDayInfo = {
        date: new Date(),
        activity: "running",
        pace: 8,
        distance:4.8,
        currTrail:"2"
      } 
    }// TODO
    $scope.currDayInfo = schedVars.currDayInfo;
    $scope.startLocId = "startLocId";
    $scope.currTrail = schedVars.currDayInfo.currTrail;
    $scope.selectedTrailId = $scope.currTrail;
    $scope.selectedTrail = trailVars.trails[trailVars.idToPos[$scope.selectedTrailId]];
    $scope.map = {};
    day = $scope;
      $scope.getBoundsZoomLevel = function(least_lat, least_lng, most_lat, most_lng, mapDim) {
        var WORLD_DIM = { height: 256, width: 256 };
        var ZOOM_MAX = 21;

        function zoom(mapPx, worldPx, fraction) {
            return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
        }

        function latRad(lat) {
            var sin = Math.sin(lat * Math.PI / 180);
            var radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
            return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
        }

        var latFraction = (latRad(most_lat) - latRad(least_lat)) / Math.PI;

        var lngDiff = most_lng - least_lng;
        var lngFraction = ((lngDiff < 0) ? (lngDiff + 360) : lngDiff) / 360;

        var latZoom = zoom(mapDim.height, WORLD_DIM.height, latFraction);
        var lngZoom = zoom(mapDim.width, WORLD_DIM.width, lngFraction);

        return Math.min(latZoom, lngZoom, ZOOM_MAX);
      }

      $scope.resizeMap = function() {
        var least_lat = 90, least_lng = 180, most_lat = -90, most_lng = -180;
        for(point of $scope.selectedTrail.path) {
          least_lat = Math.min(least_lat, point.latitude), least_lng = Math.min(least_lng, point.longitude);
          most_lat = Math.max(most_lat,point.latitude), most_lng = Math.max(most_lng, point.longitude);
        }
        $scope.map.center = {latitude:(least_lat + most_lat)/2, longitude:(least_lng + most_lng)/2}
        var PADDING = .001;
        $scope.map.zoom = $scope.getBoundsZoomLevel(least_lat - PADDING, least_lng - PADDING, most_lat + PADDING, most_lng + PADDING, {height:$('#minimap-view .angular-google-map-container').height(),width:$('#minimap-view .angular-google-map-container').width()});
      }
      
      $scope.resizeMap();

      $scope.newValue = function(newValue){
        $scope.selectedTrailId = newValue;
        $scope.selectedTrail = trailVars.trails[trailVars.idToPos[newValue]];
        $scope.resizeMap();
      }

      $scope.save = function(){
        schedVars.currDayInfo.currTrail = $scope.selectedTrailId;
        window.location.href="#main";
      }

      $scope.createPoint = function(lat, lng) {
        return new google.maps.LatLng(lat, lng);
      };

      uiGmapIsReady.promise(1).then(function(instances) {
        instances.forEach(function(inst) {
          $scope.mapObject = inst.map;
        });
      });
    }
]);