// Inject Angular Messages Module
var app = angular.module('myApp', ['ngMessages']);

app.controller('mainCtrl', function($scope){
    $scope.message1 = "This is Message 1";
    $scope.message2 = "This is Message 2";
    $scope.alert = "";
    $scope.clickOne = function(){
        $scope.message1 = "I am a changed message 1"; 
    };
    
    $scope.clickTwo = function(){
        $scope.message2 = "I am a changed message 2"; 
    };

    $scope.$watchGroup(['message1', 'message2'], (newvalue, oldvalue, scope) => {
        $scope.alert = `${oldvalue} changed to ${newvalue}`;
    });

    // Rollback View Value
    $scope.fullname = 'John Doe';
    $scope.cancel = function(){
        $scope.practice.fullname = null;
        $scope.practice.$setPristine();
        $scope.practice.$setUntouched();
    };

    // We can exclude using $scope but angular extend
    angular.extend($scope, {
        players : "Photon Khan",
        employer: "Shabuktagin Photon Khan"
    });
    console.log($scope.players);
    console.log($scope.employer);
});

// Alternative way to comment
app.directive('comment', function(){
    return{
        restrict: "E",
        compile: function(el){
            el.remove();
        }
    }
});