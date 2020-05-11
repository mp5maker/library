(function() {
    "use strict";

    angular.module('jwt')
    .factory('APIHelper', ['$http', Factory])

    function Factory($http) {
        
    }
})();
(function() {
    "use strict";
    angular.module('jwt')
    .controller('appController', ['$scope', Controller])

    function Controller($scope) {
        $scope.hello = 123
    }
})()