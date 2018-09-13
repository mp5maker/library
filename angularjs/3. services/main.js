var app = angular.module('myApp', ['ngRoute']);

app.run(function($rootScope){
    $rootScope.lang = "bn";
});

//We can use constant inside the app.config
app.constant('language', {
    translation : {
        en: {
            HELLO: "Hello"
        },
        bn: {
            HELLO: "হ্যালো"
        }
    }
});

//We cannot use constant inside the app.config
app.value('users', {
    "employee": [{
        "engineer":{
            "name": "Shabuktagin Photon Khan",
            "age" : "28"
        },
        "accountant": {
            "name" : "Towhid Chowdhury",
            "age" : "25"
        }
    }]
});


app.filter('translate', function($rootScope, language){
    return function(text){
        var lang = $rootScope.lang;
        if(text && lang){
            return language.translation[lang][text];
        }else{
            return text;
        }
    }
});

//Factory  [Sharing Objects]
app.factory('playerFactory', function(){
    var player = {
        name: "Peyton Manning",
        number: 18,
    }, 
    swap = function(){
        player.name = "A.J Green";
    };
    
    return{
        getPlayer: function(){
            return player;
        },
        swapPlayer: function(){
            swap();
        }
    }
});

//Service [Sharing variables]
app.service('sharedService', function(){
    var name;
    
    this.setName = function(name){
        this.name = name;
    }
    
    this.getName = function(){
        return this.name;
    }
})

app.controller('injectCtrl', function ($scope, users, sharedService, playerFactory) {
    $scope.users = users.employee;
    $scope.player = playerFactory.getPlayer();
    playerFactory.swapPlayer();
    sharedService.setName('Photon Khan');
    $scope.fullname = sharedService.getName();
});

//Service Provider [Works in both config and controller]
app.provider('player', function(){
    var player = {
        name: "Photon Khan"
    };
    
    return{
        getPlayer: function(){
            return player;
        },
        $get: function(){
            return{
                getPlayer: function(){
                    return player;
                }
            }
        }
    };
});

app.controller('providerCtrl', function($scope, player){
    $scope.provider = player.getPlayer();
});


//Service Decorator with provider
app.factory('employeeFactory', function(){
    var employee = {
        name: "Photon Khan",
        designation: "Web Developer"
    };

    return{
        setName: function(name){
            employee.name = name;
        },
        getEmployee: function(){
            return employee;
        }
    }
});


//Only constant, provider can be injected, Facotry using $provide && $delegate
app.config(function(language, playerProvider, $provide){
    console.log(language);
    console.log(playerProvider.getPlayer());

    //Settting one of the property through config, $provide, $delegate
    $provide.decorator('employeeFactory', function($delegate){
        $delegate.setName('Shabuktagin Photon Khan');
        return $delegate;
    });
});

app.controller('employeeCtrl', function($scope, employeeFactory){
    $scope.employee = employeeFactory.getEmployee();
});