angular.element(document).ready(function(){
    angular.bootstrap(document, ['myApp']);
});

var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope, $interval){
    $scope.value = 0;

    $scope.increment = function(){
        $scope.value++;
    }

    // Watch acts as event listener and event emitter
    $scope.$watch(function($scope) {
        return $scope.value;
    }, function(newvalue, oldvalue){
        $scope.valueChanged = `
            Tha value change from ${oldvalue} to ${newvalue}
        `;
    });

    getTime();

    function getTime(){
        var today = new Date();
        $scope.time = today.getHours() + "::" + today.getMinutes() + "::" + today.getSeconds();
    }

    $interval(function(){
        getTime();
        // $scope.$apply();
    }, 1000);
});

// Controller Namespace
app.controller('namespaceCtrl', function(){
    this.some_data = "Namespace with controller";
});

//Controller Namespace through directive
app.directive('namespaceDirective', function(){
    return{
        restrict: "E",
        templateUrl: "controller.html",
        controller: function(){
            this.data = "Directive Namepsace Data";
        },
        controllerAs: 'namespace'
    }
});