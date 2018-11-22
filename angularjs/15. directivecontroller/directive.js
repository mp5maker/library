(function() {
    "use strict";

    angular.module('myApp')
    .directive('testSection', Directive)
    
    function Directive() {
        return {
            restrict: "E",
            templateUrl: "test-section.html",
        }
    }

})();