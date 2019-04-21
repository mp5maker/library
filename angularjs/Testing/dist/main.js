var app = angular.module('simpleapp', [])
app.controller('mainController', ['$scope', Controller])

function Controller($scope) {
    $scope.test = "It is a test";
    console.log($scope.test);
}
