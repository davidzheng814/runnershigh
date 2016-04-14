var trail = angular.module('trail', [
  
]);

trail.factory('trailVars', function(){
  var mapconfig = {
    geodesic:false,
    editable:false,
    draggable:false,
    fit:true,
    static:true,
    fill:{color:'#fff', opacity:0.0},
    stroke:{opacity:0.7, weight:5, color:'#0000FF'}
  };
  var trails = [
    {name:'Trail 1', distance:4, id:"1"},
    {name: 'BU Bridge/Harvard Bridge',distance:4.2, id:"2", path:[
    {latitude:42.35394551002023,longitude:-71.11042499542236},
    {latitude:42.35337464975264,longitude:-71.10724925994873},
    {latitude:42.353533222569325,longitude:-71.10458850860596},
    {latitude:42.35492864610414,longitude:-71.09956741333008},
    {latitude:42.35505550125277,longitude:-71.09879493713379},
    {latitude:42.357085148806966,longitude:-71.09265804290771},
    {latitude:42.35140831358662,longitude:-71.08982563018799},
    {latitude:42.35109115683081,longitude:-71.09210014343262},
    {latitude:42.35045683851824,longitude:-71.09519004821777},
    {latitude:42.351122872578436,longitude:-71.10338687896729},
    {latitude:42.351788899581074,longitude:-71.11085414886475},
    {latitude:42.35394551002023,longitude:-71.11051082611084}], 
    startLoc:{latitude:42.35394551002023,longitude:-71.11042499542236}},

    {name: 'Trail 3',distance:4.6, id:"3"},

    {name:'Harvard Bridge/Science Museum Bridge', distance:5.0, id:"4", path:[
    {latitude:42.35727542490437,longitude:-71.09270095825195},
    {latitude:42.36095398287821,longitude:-71.08162879943848},
    {latitude:42.36076371791946,longitude:-71.07931137084961},
    {latitude:42.36152477429757,longitude:-71.07853889465332},
    {latitude:42.363681050641695,longitude:-71.07836723327637},
    {latitude:42.36916653771024,longitude:-71.07321739196777},
    {latitude:42.36653483201389,longitude:-71.06750965118408},
    {latitude:42.36624945971019,longitude:-71.06845378875732},
    {latitude:42.36494941392239,longitude:-71.06956958770752},
    {latitude:42.3636493412316,longitude:-71.07029914855957},
    {latitude:42.36244437178873,longitude:-71.0722303390503},
    {latitude:42.36054174140609,longitude:-71.0725736618042},
    {latitude:42.35974896174244,longitude:-71.0722303390503},
    {latitude:42.356213042655384,longitude:-71.07356071472168},
    {latitude:42.355991050066166,longitude:-71.07394695281982},
    {latitude:42.352232913662,longitude:-71.08716487884521},
    {latitude:42.35196333405838,longitude:-71.0900616645813}],
    startLoc:{latitude:42.36152477429757,longitude:-71.07853889465332}},

    {name: 'Trail 5',distance:5.2, id:"5"},

    {name: 'Trail 6',distance:5.7, id:"6"},

    {name:'Trail 7', distance:5.9, id:"7"},

    {name: 'Trail 8',distance:7.5, id:"8"},

    {name: 'Trail 9',distance:7.8, id:"9"},

    {name:'Trail 10', distance:7.9, id:"10"},

    {name: 'Trail 11',distance:8.2, id:"11"},

    {name: 'Trail 12',distance:8.5, id:"12"}
  ];
  trails.sort(function(a, b){return a.distance - b.distance});
  var idToPos={};
  for(i = 0; i < trails.length; ++i) {
    idToPos[trails[i].id] = i;
  }
  return {
    mapconfig:mapconfig,
    trails:trails, 
    idToPos:idToPos
  };
});

trail.controller('TrailCtrl', ['$scope', '$http', 'userVars', 'schedVars', 'trailVars', 'uiGmapIsReady', 
  function($scope, $http, userVars, schedVars, trailVars, uiGmapIsReady) {
  $scope.mapconfig = trailVars.mapconfig;
  trail = $scope;
  if(!('currDayInfo' in schedVars)) {
    schedVars.currDayInfo = {
      distance:4.8,
      currTrail:"2"
    } 
  }// TODO
  $scope.currDayInfo = schedVars.currDayInfo;
  $scope.startLocId = "startLocId";
  $scope.trailVars = trailVars;
  $scope.currTrail = schedVars.currDayInfo.currTrail;
  $scope.selectedTrailId = $scope.currTrail;
  $scope.selectedTrail = trailVars.trails[trailVars.idToPos[$scope.selectedTrailId]];
  $scope.map = { 
  };

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
    $scope.map.zoom = $scope.getBoundsZoomLevel(least_lat - PADDING, least_lng - PADDING, most_lat + PADDING, most_lng + PADDING, {height:$(window).height(),width:$(window).width() - 300});
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
