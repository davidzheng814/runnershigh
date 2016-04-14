var create = angular.module('create', []);

create.factory('createVars', function(){
    return {};
});

create.controller('CreateGeneralCtrl', ['$scope', '$http', 'createVars', 
  function($scope, $http, createVars) {
  	$scope.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  	$scope.selectedDays = [];

  	$scope.update = function() {
  		createVars.currentPace = $scope.currentPace;
  		createVars.achievedPace = $scope.achievedPace;
  		createVars.startDate = $scope.startDate;
  		createVars.raceDay = $scope.raceDay;
  		createVars.selectedDays = $scope.selectedDays;
  		window.location.href = "#create/programs";
  	}

  	$scope.selectDay = function(day) {
  		if ($scope.selectedDays.indexOf(day) > -1) {
  			var index = $scope.selectedDays.indexOf(day);
  			$scope.selectedDays.splice(index, 1);
  			$(document.getElementsByName(day)).removeClass("ui-selected");
  		}
  		else {
  			$scope.selectedDays.push(day);
  			$(document.getElementsByName(day)).addClass("ui-selected");
  		}
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
							"No cross-training"]
  		},
  		"first" : {
  			"name" : "FIRST",
  			"difficulty" : 2,
  			"description" : ["1 rest day",
							"Alternate running and cross-training",
							"Builds long run to 20 miles"]
  		}
  	};
  	$scope.own = {
  			"name" : "Own",
  			"difficulty" : 0,
  			"description" : []
  		};
  	$scope.range = new Array(5);

    $scope.update = function() {
    	createVars.program = $scope.program;
  		window.location.href = "#create/details";
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

create.controller('CreateDetailsCtrl', ['$scope', '$routeParams', 'createVars', 
  function($scope, $routeParams, createVars) {
  	console.log(createVars);
  }]);

create.controller('CreateFinishedCtrl', ['$scope', '$routeParams', 'createVars', 'trailVars', 'schedVars',
  function($scope, $routeParams, createVars, trailVars, schedVars) {

  }]);