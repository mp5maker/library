(function() {
    "use strict";

    angular
        .module('jwt')
        .controller('appController', [Controller])

    function Controller() {
        $scope.hello = '123';
    }
})()