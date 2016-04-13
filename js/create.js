var create = angular.module('create', []);

create.factory('createVars', function(){
    return {};
});

create.controller('CreateGeneralCtrl', ['$scope', '$http', 'createVars', 
  function($scope, $http, createVars) {
    $scope.text = "blank";
  }]);

create.controller('CreateProgramsCtrl', ['$scope', '$routeParams', 'createVars', 
  function($scope, $routeParams, createVars) {
    createVars.hello = "blank";
  }]);

create.controller('CreateDetailsCtrl', ['$scope', '$routeParams', 'createVars', 
  function($scope, $routeParams, createVars) {

  }]);

create.controller('CreateFinishedCtrl', ['$scope', '$routeParams', 'createVars', 
  function($scope, $routeParams, createVars) {

  }]);