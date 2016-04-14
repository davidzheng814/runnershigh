var main = angular.module('main', []);

main.controller('MainCtrl', ['$scope', '$http', 'userVars', 'schedVars', 'trailVars', 'uiGmapIsReady',
  function($scope, $http, userVars, schedVars, trailVars, uiGmapIsReady) {

  	$scope.calendarTitle = "Runner's High";
  	$scope.calendarView = 'week';

  	$scope.viewDate = new Date();

  	// important = pale red
  	// warning = pale yellow
  	// info = blue
  	// inverse = gray
  	// succcess = green
  	// special = pink

  	$scope.events = [ //TODO
  	  {
	    type: 'warning', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	   	activity: 'Running',
	    startsAt: new Date(2016, 3, 4, 0), // A javascript date object for when the event starts
	    pace: 8,
	    distance: 4,
	  },
	  {
	    type: 'warning', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	   	activity: 'Running',
	    startsAt: new Date(2016, 3, 5, 0), // A javascript date object for when the event starts
	    pace: 8,
	    distance: 7,
	  },
	  {
	    type: 'warning', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	   	activity: 'Running',
	    startsAt: new Date(2016, 3, 6, 0), // A javascript date object for when the event starts
	    pace: 8,
	    distance: 5.3,
	  },
  	  {
	    type: 'warning', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	   	activity: 'Running',
	    startsAt: new Date(2016, 3, 7, 0), // A javascript date object for when the event starts
	    pace: 8,
	    distance: 4.5,
	  },
	  {
	    type: 'warning', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	   	activity: 'Running',
	    startsAt: new Date(2016, 3, 8, 0), // A javascript date object for when the event starts
	    pace: 9,
	    distance: 6,
	  },
	  {
	    type: 'warning', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	   	activity: 'Running',
	    startsAt: new Date(2016, 3, 9, 0), // A javascript date object for when the event starts
	    pace: 8,
	    distance: 5.5,
	  },
	  {
	    type: 'warning', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	   	activity: 'Running',
	    startsAt: new Date(2016, 3, 10, 0), // A javascript date object for when the event starts
	    pace: 8,
	    distance: 4,
	  },
	  {
	    type: 'warning', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	   	activity: 'Running',
	    startsAt: new Date(2016, 3, 11, 0), // A javascript date object for when the event starts
	    pace: 8,
	    distance: 7,
	  },
	  {
	    type: 'warning', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	   	activity: 'Running',
	    startsAt: new Date(2016, 3, 12, 0), // A javascript date object for when the event starts
	    pace: 8,
	    distance: 5.3,
	  },
	  {
	    type: 'warning', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	   	activity: 'Running',
	    startsAt: new Date(2016, 3, 13, 0), // A javascript date object for when the event starts
	    pace: 8,
	    distance: 6,
	  },
	  {
	    type: 'warning', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	   	activity: 'Running',
	    startsAt: new Date(2016, 3, 14, 0), // A javascript date object for when the event starts
	    pace: 8,
	    distance: 5,
	  },
	  {
	    type: 'warning', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	   	activity: 'Running',
	    startsAt: new Date(2016, 3, 15, 0), // A javascript date object for when the event starts
	    pace: 8,
	    distance: 6.3,
	  },
	  {
	    type: 'warning', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	   	activity: 'Running',
	    startsAt: new Date(2016, 3, 16, 0), // A javascript date object for when the event starts
	    pace: 8,
	    distance: 8,
	  },
	  {
	    type: 'warning', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	   	activity: 'Running',
	    startsAt: new Date(2016, 3, 17, 0), // A javascript date object for when the event starts
	    pace: 8,
	    distance: 7,
	  },
	  {
	    type: 'warning', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	   	activity: 'Running',
	    startsAt: new Date(2016, 3, 18, 0), // A javascript date object for when the event starts
	    pace: 8,
	    distance: 8.3,
	  },
	  {
	    type: 'warning', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	   	activity: 'Running',
	    startsAt: new Date(2016, 3, 19, 0), // A javascript date object for when the event starts
	    pace: 8,
	    distance: 8,
	  }
	];

	$scope.selectedEvent = $scope.events[0] //TODO

	$scope.viewChangeClicked = function(nextView) {
      if (nextView === 'day') {
        return false;
      }
    };

    $scope.eventClicked = function(calendarEvent) {
    	$scope.selectedEvent = calendarEvent;
    };

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

	  $scope.$on('$viewContentLoaded', function(){
	    var trailListOffset = $('#trail-list form').offset();
	    var delta = Math.max(trailVars.idToPos[$scope.selectedTrailId]*78 - 200, 0);
	    $('#trail-list form').offset({top:trailListOffset.top - delta});
	  });

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
  }]);

main.config(function(calendarConfig){
	calendarConfig.templates.calendarWeekView = 'customWeekView.html';
});