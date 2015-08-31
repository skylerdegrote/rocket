//client side

//controllers can have $scope and factories can NOT
//
//var app = angular.module("rocketApp", []);
//
//app.controller("MainRocketController", function($scope, InfoBoxService){
//   $scope.noseconeinfo = InfoBoxService.noseconeinfo;
//});
//
//app.factory("InfoBoxService", function(){
//   var info = function(){
//       return "Hello"
//   };
//
//    var publicAPI = {
//        noseConeInfo :info()
//    };
//    return publicAPI;
//
//});


var app = angular.module("RocketApp", []);

app.controller("InfoController", function($scope){
   $scope.noseConeInfo = "testing to see if this works"
});