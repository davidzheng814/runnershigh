var main = angular.module('main', []);

main.controller('MainCtrl', ['$scope', '$http', 'userVars', 'schedVars', 'trailVars', 'uiGmapIsReady',
  function($scope, $http, userVars, schedVars, trailVars, uiGmapIsReady) {

    $scope.calendarView = 'month';
    $scope.viewDate = new Date();

    $scope.events = []
    for(var i=0; i < schedVars.schedule.length; i++){
        var x = schedVars.schedule[i]
        $scope.events.push({
            startsAt: x.date,
            activity: x.activity,
            pace: x.pace,
            distance: x.distance,
        });
    }

    console.log(schedVars.currDayInfo);

    $scope.dayClicked = function(calendarDate) {
        //scan schedule until you see something with this date, then go to that page
        //or save the date in a variable and go to new page idk
        //comparison with getTime
        for(var i=0; i < schedVars.schedule.length; i++){
            var x = schedVars.schedule[i];
            if(x.date.getTime() == calendarDate.getTime()){
                schedVars.currDayInfo = x;
                console.log(schedVars.currDayInfo);
                window.location.href = "#main/day"
            }
        }
    }
  }]);

main.config(function(calendarConfig){
    calendarConfig.templates.calendarMonthView = 'customMonthView.html';
    calendarConfig.templates.calendarMonthCell = 'customMonthCell.html';
});




main.controller('DayCtrl', ['$scope', '$http', 'userVars', 'schedVars', 'trailVars', 'uiGmapIsReady',
  function($scope, $http, userVars, schedVars, trailVars, uiGmapIsReady) {

    if(!('currDayInfo' in schedVars)) {
        schedVars.currDayInfo = {
            activity:"running",
            pace:7,
            date: new Date(2016,4,9,0),
            distance:24,
            currTrail:"2"
        } 
      }

    $scope.currDayInfo = schedVars.currDayInfo;
    $scope.trailVars = trailVars;

    $scope.dateString = function(date) {
        var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return daysOfWeek[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate();
    };

    $scope.submit = function() {
        if($scope.submittedDistance != undefined){
            $scope.selectedEvent.distance = $scope.submittedDistance;
        }
        if($scope.submittedPace != undefined){
            $scope.selectedEvent.pace = $scope.submittedPace;
        }
        $('#submitButton').text("Submitted!");
    }


//----------------------------------- MAP STUFF ---------------------------------//
    $scope.mapconfig = trailVars.mapconfig;

    if(!('currDayInfo' in schedVars)) {
      schedVars.currDayInfo = {
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