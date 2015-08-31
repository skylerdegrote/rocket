//controllers and factories
//controllers can have $scope and factories CAN NOT




app.controller("mainRocketController", ["$scope", function($scope) {



//NOSE CONE INFO FUNCTION
    $scope.isNoseConeVisible = false;
    $scope.showNoseConeInfo = function () {
        $scope.isFinsVisible = false;
        $scope.isBodyExtensionVisible = false;
        $scope.isNoseConeVisible = true;
    };
//FINS INFO FUNCTION
    $scope.isFinsVisible = false;
    $scope.showFinsInfo = function () {
        $scope.isBodyExtensionVisible = false;
        $scope.isNoseConeVisible = false;
        $scope.isFinsVisible = true;
    };
//FINS INFO FUNCTION
    $scope.isBodyExtensionVisible = false;
    $scope.showBodyExtensionInfo = function () {
        $scope.isNoseConeVisible = false;
        $scope.isFinsVisible = false;
        $scope.isBodyExtensionVisible = true;
    };

    $scope.nosecones = {
        types: "Pointed, Rounded and Half Circle",
        techNames: "Cone, Parabola and Hemisphere",
        pointed: {
            technicalName: "cone nose cone",
            numberNeeded: "one",
            information: "The Cone Nose Cone specifically has the benefit of being the easiest to eject the parachute from.",
            image: "path to image"
        },
        rounded: {
            technicalName:"parabola nose cone",
            numberNeeded: "one",
            information: "The Parabola Nose Cone has the ability to pass through a windy day with ease",
            image: "path to image"
        },
        halfCircle: {
            technicalName:"hemisphere nose cone",
            numberNeeded: "one",
            information: "The Hemisphere Nose Cone will more than likely launch the fastest and therefore CAN launch the highest depending on the engine size",
            image: "path to image"
        }
    };


    $scope.fins = {
        types: "Normal, Extended and Flat",
        techNames: "Pointed Swept, Clipped Delta and Medium Swept Trap",
        finInfo: "Fins, in general, are used to...and you must have at least three and up to four of them.",
        normal: {
            technicalName: "Pointed Swept Fins",
            numberNeeded: "three or four",
            information: "are used to ..."
        },
        extended: {
            technicalName:"Clipped Delta Fins",
            numberNeeded: "three or four",
            information: "are used to..."},
        flat: {
            technicalName: "Medium Swept Trap Fins",
            numberNeeded: "three or four",
            information: "are used to..."}
    };

}]);





































