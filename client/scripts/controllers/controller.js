//controllers and factories
//controllers can have $scope and factories CAN NOT


var app = angular.module("RocketApp", []);

app.controller("mainRocketController", ["$scope", function($scope) {
//NOSE CONE INFO FUNCTION
    $scope.isNoseConeVisible = false;
    $scope.showNoseConeInfo = function () {
        $scope.isFinsVisible = false;
        $scope.isBodyExtensionVisible = false;
        $scope.isNoseConeVisible = true;
        $scope.isNoseConeColored = true;
    };
    $scope.isNoseConeColored = false;
    $scope.showNoseConeColor = function(){
        $scope.isNoseConeColored = true;
    };
//FINS INFO FUNCTION
    $scope.isFinsVisible = false;
    $scope.showFinsInfo = function () {
        $scope.isBodyExtensionVisible = false;
        $scope.isNoseConeVisible = false;
        $scope.isFinsVisible = true;
    };
//BODY EXTENSION INFO FUNCTION
    $scope.isBodyExtensionVisible = false;
    $scope.showBodyExtensionInfo = function () {
        $scope.isNoseConeVisible = false;
        $scope.isFinsVisible = false;
        $scope.isBodyExtensionVisible = true;
    };
    $scope.nosecones = {
        types: "Pointed, Rounded & Half Circle",
        techNames: "Cone, Parabola & Hemisphere",
        pointed: {
            technicalName: "cone",
            numberNeeded: "one",
            information: " provides the least amount of resistance and therefore enables the rocket to fly faster and higher.",
            image:  "/images/thumbnails/rocketthumb_pointed-nosecone-thumb.png"
        },
        rounded: {
            technicalName:"parabola",
            numberNeeded: "one",
            information: ", although, sleek like the Cone shaped nose cone, has slightly more resistance because of the rounded tip.",
            image:  "/images/thumbnails/rocketthumb_rounded-nosecone-thumb.png"
        },
        halfCircle: {
            technicalName:"hemisphere",
            numberNeeded: "one",
            information: " creates a lot of resistance and therefore will fly slower and not as high.",
            image: "/images/thumbnails/rocketthumb_half-circle-nosecone-thumb.png"
        }
    };
    $scope.fins = {
        types: "Normal, Extended & Flat",
        techNames: "Pointed Swept, Clipped Delta & Medium Swept Trap",
        finInfo: "Fins, in general, are used to balance the rocket while it is both on the ground getting ready to launch and in the air after the launch. You must have at least three and up to four of fins on your rocket.",
        normal: {
            technicalName: "Pointed Swept Fins",
            numberNeeded: "three or four",
            information: " are the second most popular choice for a rocket",
            image: "/images/thumbnails/rocketthumb_pointed-fins-thumb.png"
        },
        extended: {
            technicalName:"Clipped Delta Fins",
            numberNeeded: "three or four",
            information: " are the most common type of fins and are used to balance the rocket while it is in the air.",
            image: "/images/thumbnails/rocketthumb_extended-fins-thumb.png"
        },
        flat: {
            technicalName: "Medium Swept Trap Fins",
            numberNeeded: "three or four",
            information: " are mainly for the fashion of having a flat bottom to the rocket.",
            image: "/images/thumbnails/rocketthumb_flat-fins-thumb.png"
        }
    };
    $scope.bodyextension = {
        types: "None, Two Foot & Four Foot",
        bodyInfo: "When you purchase a Model Rocketry kit, you'll often get a Fin Assembly. In this case, you'll need to buy a body extension in order to make your rocket taller.",
        none: {
            title: "No Body Extension",
            information: "Having no body extension just makes your rocket as tall as the kit gives you. This is often a two foot rocket."
        },
        two : {
            title: "Two Foot Body Extension",
            information: "Adding two feet to your rocket will generally create a four foot rocket. You'll need a connector piece to connect the fin assembly to the body extension."
        },
        four : {
            title: "Four Foot Body Extension",
            information: "An Additional four feet to the rocket will often give you a six foot rocket. You'll need a connector piece to connect the fin assembly to the body extension."
        }
        };
}]);





//controller here
app.controller("userController", ["$scope", '$http', function($scope, $http) {
    $scope.getName = function(){
        console.log('here');
        $http.get('/name')
            .then(function(response){
                if(response.status !==200){
                    throw new Error("call failed")
                }
                $scope.username = response.data.username;
                $scope.firstname = response.data.firstName;
                $scope.lastname = response.data.lastName;
                console.log(response);
        })
    };
    $scope.getName();
}]);



//$(document).ready(function(){
//    $.ajax({
//        type: "GET",
//        url: "/user/name",
//        success: function(data){
//            console.log(data);
//            $("#welcome").text("Welcome, " + data.firstname);
//            $("#lastLogin").text("Last Login Time: " + data.lastlogin);
//            updateDate();
//        }
//    });
//
//
//});
//
//function updateDate(){
//    $.ajax({
//        type: "PUT",
//        url: "/user/date",
//        success: function(data){
//            console.log(data);
//        }
//    })
//}

function printFunction(){
    console.log("clicked the print function");
    window.print();
}