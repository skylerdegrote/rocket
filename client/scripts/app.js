//client side

var app = angular.module("RocketApp", []);

app.controller("InfoController", function($scope){
    $scope.noseConeInfo = "testing to see if this works"



$scope.rockets = [{
    //nose cones
    "noseCones" : [{
        "pointed-nosecone" :{
            "id" : 1,
            "name":"pointed nose cone",
            "technical-name":"cone nosecone",
            "numberNeeded" : "one",
            "image" : "image path goes here"},
        "rounded-nosecone" : {
            "id" : 2,
            "name":"rounded nose cone",
            "technical-name":"parabola nosecone",
            "numberNeeded" : "one",
            "image" : "image path goes here"},
        "half-circle-nosecone" : {
            "id" : 3,
            "name" : "half circle nose cone",
            "technical-name":"hemisphere nosecone",
            "numberNeeded" : "one",
            "image" : "image path goes here"}
    }],
    //body
    "bodyExtensions" : [{
        "twofoot" : {
            "id" : 4,
            "name" : "two foot body extension",
            "numberNeeded" : "zero or one",
            "image" : "image path goes here"},
        "fourfoot" : {
            "id" : 5,
            "name" : "four foot body extension",
            "numberNeeded" : "zero or one",
            "image" : "image path goes here"}
    }],
    //fins
    "fins": [{
        "normalFins" : {
            "id" : 6,
            "name" : "normal fins",
            "technical-name":"pointed swept fin",
            "numberNeeded" : "three or four",
            "image" : "image path goes here"
        },
        "flatFins" : {
            "id": 7,
            "name" : "Flat Fins",
            "technical-name":"medium swept trap fin",
            "numberNeeded" : "three or four",
            "image" : "image path goes here"
        },
        "extendedFins" : {
            "id" : 8,
            "name" : "Extended Fins",
            "technical-name" : "clipped delta fin",
            "numberNeeds" : "three or four",
            "image" : "image path goes here"
        }
    }]
}];
});