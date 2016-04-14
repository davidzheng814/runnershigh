var main = angular.module('main', []);

main.controller('MainCtrl', ['$scope', '$http', 'userVars', 'schedVars', 'trailVars',
  function($scope, $http, userVars, schedVars, trailVars) {

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
	    startsAt: new Date(2016, 3, 10, 0), // A javascript date object for when the event starts
	    pace: 8,
	    distance: 6.3,
	  },
	  {
	    type: 'warning', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	   	activity: 'Running',
	    startsAt: new Date(2016, 3, 11, 0), // A javascript date object for when the event starts
	    pace: 8,
	    distance: 6.3,
	  },
	  {
	    type: 'warning', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	   	activity: 'Running',
	    startsAt: new Date(2016, 3, 12, 0), // A javascript date object for when the event starts
	    pace: 8,
	    distance: 6.3,
	  },
	  {
	    type: 'warning', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	   	activity: 'Running',
	    startsAt: new Date(2016, 3, 13, 0), // A javascript date object for when the event starts
	    pace: 8,
	    distance: 6.3,
	  },
	  {
	    type: 'warning', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	   	activity: 'Running',
	    startsAt: new Date(2016, 3, 14, 0), // A javascript date object for when the event starts
	    pace: 8,
	    distance: 7.5,
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
    	console.log($scope.submittedDistance);
    	console.log($scope.submittedPace);
    	$scope.selectedEvent.pace = $scope.submittedPace;
    	$scope.selectedEvent.distance = $scope.submittedDistance;
    }

  }]);

main.config(function(calendarConfig){
	console.log(calendarConfig);
	calendarConfig.templates.calendarWeekView = 'customWeekView.html';
});