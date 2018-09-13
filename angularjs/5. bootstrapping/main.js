// Manually bootstrapp Angular JS Application
angular.element(document).ready(function(){
    angular.bootstrap(document, ['myApp']);
});

var app = angular.module('myApp', []);
app.controller('mainCtrl', function($scope){
    $scope.data = "Bootstrapping through javascript";
});
