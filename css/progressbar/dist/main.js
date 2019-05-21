(function() {
    "use strict";

    var app = angular.module('progressBarApp', []);
    app.controller('mainController', ['$scope', '$http', Controller])

    function Controller($scope, $http) {
        $scope.hello = "Hello World";
        console.log($scope.hello);
    }
})();