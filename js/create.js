var create = angular.module('create', []);

create.factory('createVars', function(){
    return {};
});

create.controller('CreateGeneralCtrl', ['$scope', '$http', 'createVars', 
  function($scope, $http, createVars) {
    
  }]);

create.controller('CreateProgramsCtrl', ['$scope', '$routeParams', 'createVars', 
  function($scope, $routeParams, createVars) {

  }]);

create.controller('CreateDetailsCtrl', ['$scope', '$routeParams', 'createVars', 
  function($scope, $routeParams, createVars) {
  	createVars.pressed1=false;
  }]);

create.controller('CreateFinishedCtrl', ['$scope', '$routeParams', 'createVars', 'trailVars', 'schedVars',
  function($scope, $routeParams, createVars, trailVars, schedVars) {

  }]);

