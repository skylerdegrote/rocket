//controllers and factories
//controllers can have $scope and factories CAN NOT




app.controller("mainRocketController", ["$scope", function($scope) {



//NOSE CONE INFO FUNCTION
    $scope.isNoseConeVisible = false;
    $scope.showNoseConeInfo = function () {
        $scope.isNoseConeVisible = true;
    };


//    $scope.nosecone = {
//        types: {
//        pointed: {name: "pointed nose cone", technicalName: "cone nosecone"},
//        rounded: {name: "rounded nose cone", technicalName: "parabola nosecone"},
//        halfCircle: {name: "half circle nose cone", technicalName: "hemisphere nosecone"}
//    }
//}


    $scope.nosecones = {
        types: "Pointed, Rounded and Half Circle Nose Cones",
        techNames: "Cone, Parabola and Hemisphere",
        pointed: {technicalName: "cone nose cone", numberNeeded: "one", information: "The Cone Nose Cone specifically has the benefit of being the easiest to eject the parachute from."},
        rounded: {technicalName:"parabola nose cone", numberNeeded: "one", information: "The Parabola Nose Cone has the ability to pass through a windy day with ease"},
        halfCircle: {technicalName: "hemisphere nose cone", numberNeeded: "one", information: "The Hemisphere Nose Cone will more than likely launch the fastest and therefore CAN launch the highest depending on the engine size"}
    };

}]);





































