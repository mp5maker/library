(function() {
    var app = angular.module('autocomplete', ['ui.select', 'ngSanitize'])
    app.controller('mainController', ['$scope', mainController])

    function mainController($scope) {
        $scope.test = "hello";
        console.log('hello')
        console.log('hello')
    }
})();