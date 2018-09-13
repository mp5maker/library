angular.element(document).ready(function(){
    angular.bootstrap(document, ['myApp']);
});

var app = angular.module('myApp', ['ngAnimate', 'ngRoute']);

app.controller('formCtrl', function($scope){
    $scope.$watch('exampleform.fullname.$pristine', function(newval){
        $scope.isPristine = newval;
    });

    $scope.$watch('exampleform.fullname.$invalid', function(newval){
        $scope.isInvalid = newval;
    });

    $scope.players = [
        {
            "id": "1",
            "name": "Shabuktagin Photon Khan",
            "age": "27",
        },
        {
            "id": "2",
            "name": "Golam Saif Erfan",
            "age": "30"
        },
        {
            "id": "3",
            "name": "Rizwan Mannan",
            "age": "32"
        },
        {
            "id": "4",
            "name": "Samith Zaman",
            "age": "29"
        },
        {
            "id": "5",
            "name": "Shahriar Sami",
            "age": "17"
        },
        {
            "id": "6",
            "name": "Rifatul Haque Mawla",
            "age": "57"
        },
    ];

    $scope.books = {
        "Dan Brown": {
            "book": "Da Vinci code",
            "type": "thriller"
        },
        "J. K. Rowling": {
            "book": "Harry Potter",
            "type": "Fantasy"
        },
        "Uzu Maki Sonota": {
            "book": "Naruto",
            "type": "life"
        },
    };
});

app.directive('customValidation', function(){
    return{
        require: 'ngModel',
        link: function(scope, el, attrs, ctrl){
            function two(value){
                if(value == 2){
                    return true;
                }else{
                    return false;
                }
            }
            scope.$watch(attrs.ngModel, function(newval){
                if(two(newval)){
                    ctrl.$setValidity('customtwo', true);
                }else{
                    ctrl.$setValidity('customtwo', false);
                }
            });
        }
    }
});


// Concept of Event Bus
app.controller('eventBusCtrl', function($scope, $rootScope){
    $scope.generateEvent = function(){
        $rootScope.$emit('boom');
    };
});

app.directive('busDirective', function($rootScope){
    return{
        template: "{{shakalaka}}",
        scope: {},
        link: function(scope, el, attrs){
            let unbind = $rootScope.$on("boom", function(){
                scope.shakalaka = "Boom Shakalaka";
            });
            scope.$on('$destroy', unbind);
        }
    };
});

//Event Bus as a service
app.factory('busFactory', function($rootScope){
    let eventBus = {};
    eventBus.emitMsg = function(msg, data){
        let data = data || {};
        $rootScope.$emit(msg, data);
    };
    eventBus.onMsg = function(msg, data, scope){
        var unbind = $rootScope.$on(msg, data);
        if(scope){
            scope.$on('$destroy', unbind);
        }
        return unbind;
    };
    return eventBus;
});