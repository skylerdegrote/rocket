//controllers and factories
//controllers can have $scope and factories CAN NOT

var app = angular.module("rocketApp", []);


app.controller("mainRocketController", ["$scope", function($scope) {
        //$scope.noseconeinfo = infoboxservice.modal;
        $scope.noseconeinfo = function(){
                return ("hello");
    }
}]);







