angular.element(document).ready(function(){
    angular.bootstrap(document, ['myApp']);
});
var app = angular.module('myApp', ['ngAnimate', 'ngResource', 'ui.router']);

// Using the router
app.config(function ($stateProvider, $urlRouterProvider){
    var homeState = {
        name: "home",
        // url: "/home/:dataId",
        url: "/home",
        templateUrl: "home.html",
        // controller: function($scope, $stateParams){
        //     console.log($stateParams.dataId);
        // },
        // resolve: {
        //     dataId: function($stateParams){
        //         return $stateParams.dataId;
        //     }
        // } 
    };

    var contactState = {
        name: "contact",
        url: "/contact",
        templateUrl: "contact.html",
    };

    $stateProvider.state(homeState);
    $stateProvider.state(contactState);
    $urlRouterProvider.otherwise("/home");
});

app.factory('dataFactory', function($resource){
    return $resource('data.php?id=:data_id', { data_id: '@id' }, {
        'get': { method: 'GET' },
        'save': { method: 'POST' },
        'query': { method: 'GET', isArray: true },
        'remove': { method: 'DELETE' },
        'delete': { method: 'DELETE' }
    }); 
});

//Using the resource
app.controller('mainCtrl', function(dataFactory){
    dataFactory.get({id: 8}).$promise.then(function(response){
        console.log(response.data);
    })
});