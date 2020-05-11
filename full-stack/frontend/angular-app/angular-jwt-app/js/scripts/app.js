(function() {
    "use strict";
    angular.module('jwt')
    .controller('appController', ['$scope', Controller])

    function Controller($scope) {
        $scope.hello = 123
    }
})()