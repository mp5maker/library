(function() {
    "use strict";

    angular.module('myApp')
    .controller('testController', ['$scope', Controller])

    function Controller($scope) {
        $scope.testMessage = "This is a test directive beware!";
    }
})();