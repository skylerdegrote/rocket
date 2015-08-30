//controllers and factories
//controllers can have $scope and factories CAN NOT

var app = angular.module("rocketApp", []);


app.controller("mainRocketController", ["$scope",  function($scope) {

    $scope.noseCones = [{imgUrl: "rocketpieces_pointed-nosecone.png", name:"pointed nose"},
        {imgUrl: "rocketpieces_rounded-nosecone.png", name: "rounded nose"},
        {imgUrl: "rocketpieces_halfcircle-nosecone.png", name: "half-circle-nose"}];





    // write code that will switch on click to pointed nose cone
        $scope.pointednosecone = function(nosecone){
              nosecone.imgUrl = $scope.noseCones[0]
    };
    // write code that will switch on click to rounded nose cone
    // write code that will switch on click to half circle nose cone


    //    $scope.followBtnImgUrl = '/sth.jpg';
    //
    //$scope.noseCones = [{imgUrl: "rocketpieces_pointed-nosecone.png", name:"pointed nose"},
    //        {imgUrl: "rocketpieces_rounded-nosecone.png", name: "rounded nose"},
    //        {imgUrl: "rocketpieces_halfcircle-nosecone.png", name: "half-circle-nose"}];
    //
    //
    //    $scope.toggleImage = function(nosecone) {
    //        if(nosecone.imgUrl === $scope.followBtnImgUrl) {
    //            nosecone.imgUrl = nosecone.$backupUrl;
    //        } else {
    //            nosecone.$backupUrl = merchant.imgUrl;
    //            nosecone.imgUrl = $scope.followBtnImgUrl;
    //        }
    //    };
    }]);




