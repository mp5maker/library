var app = angular.module('simpleapp', [])
app.controller('mainController', ['$scope', Controller])

function Controller($scope) {
    $scope.addition = (params) => {
        return params.reduce((sumTotal, perItem) => {
            return sumTotal + perItem;
        }, 0)
    }
    console.log($scope.addition([2,3]));
}
