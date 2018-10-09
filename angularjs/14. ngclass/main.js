(function() {
    angular.module('myApp', [])
    .controller('mainCtrl', function ($scope) {
        $scope.eat = true;
        $scope.sleep = true;
        $scope.study = true;
        $scope.workout = true;

        $scope.eatButton = function () {
            $scope.eat =! $scope.eat;
            console.log(`%c Eat ${$scope.eat}`, "background-color: blue; color: white");
        }
        $scope.sleepButton = function () {
            $scope.sleep =! $scope.sleep;
            console.log(`%c Sleep ${$scope.sleep}`, "background-color: green; color: white");
        }
        $scope.studyButton = function () {
            $scope.study =! $scope.study;
            console.log(`%c Sleep ${$scope.study}`, "background-color: firebrick; color: white");
        }
        $scope.workoutButton = function () {
            $scope.workout =! $scope.workout;
            console.log(`%c Sleep ${$scope.workout}`, "background-color: yellow; color: black");
        }

    });
})();