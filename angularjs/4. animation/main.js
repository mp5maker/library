var app = angular.module('myApp', ['ngAnimate', 'ngRoute']);

app.controller('animationCtrl', function($scope){
    // Hide & Show [CSS Transition/ng-hide/hide]
    $scope.hideBox = true;

    // Slide Up & Down [CSS Transition/ng-hide/hide]
    $scope.slideBox = true;

    // Hide/Show Animate [CSS Transition/ng-hide/hide]
    $scope.enterBox = true;

    // Hide/Show Animate [Javascript Animation/ng-if/hide]
    $scope.jsBox = true;

    // CSS Transition [Javascript Animation/ng-repeat/move/leave/enter]
    $scope.items = [
        "carrot", "cucumber", "tomatoes", "potatoes"
    ];

    // Show/Hide [CSS Transition/ng-show/hide/addClass]
    $scope.ngshowtoggle = true;

    // Show/Hide [CSS Animation/ng-show/hide/addClass]
    $scope.ngshowtoggle2 = true;

    // Show/Hide [Javascript Animation/ng-show/hide/addClass]
    $scope.ngshowtoggle3 = true;

    // Slide In/Out [CSS Transition/ng-class]
    $scope.ngclasstoggle = true;

    // Slide In/Out [CSS Animation/ng-class]
    $scope.ngclasstoggle2 = true;

    // Slide In/Out [Javascript Animation/ng-class]
    $scope.ngclasstoggle3 = true;
});

// JavaScript Animation
app.animation('.js-animation', function(){
    return{
        enter: function(element){
            $(element).css({
                'opacity': 0
            });
            $(element).animate({
                'opacity': 1
            }, 1000);
        }
    }
});

app.animation('.view-js-animation-container', function(){
    return{
        enter: function(element, done){
            element.css({
                "opacity": "0"
            });
            element.animate({
                "opacity": "1"
            }, 1000, done);
        }
    }
});

app.animation('.repeat-js-animation', function(){
    return{
        enter: function(element, done){
            element.css({
                "opacity": "0"
            });
            element.animate({
                "opacity": "1"
            }, 1000, done);
        },
        leave: function(element, done){
            element.css({
                "opacity": "1"
            });
            element.animate({
                "opacity": "0"
            }, 1000, done);
        },
        move: function(element, done){
            element.css({
                "opacity": "0"
            });
            element.animate({
                "opacity": "1"
            }, 1000, done);
        }
    }
});

app.animation('.show-js-animation-container', function(){
    return{
        addClass: function(element, className, done){
            if(className == 'ng-hide'){
                element.css({
                    "opacity" : "1"
                });
                element.removeClass('ng-hide');
                element.animate({
                    "opacity": "0"
                }, 1000, function(){
                    element.addClass('ng-hide');
                    element.css({
                        "opacity" : "1"
                    });
                    done();
                });
            }else{
                done();
            }
        }
    }
});

// Slide In / Out[Javascript Animation / ng - class]
app.animation('.blackout3', function(){
    return{
        addClass: function(element, className, done){
            if(className == 'blackout3'){
                element.removeClass('blackout3');
                element.css({
                    "left": "0%"
                });
                element.animate({
                    "left": "-100%"
                }, 3000, function(){
                    element.animate({
                        "left": "0%"
                    },3000);
                    done();
                }); 
            }else{
                done();
            }
        }
    } 
});

app.config(function ($routeProvider){
    $routeProvider
        .when("/home", {
            templateUrl: "home.html"
        })
        .when("/contact", {
            templateUrl: "contact.html"
        })
        .otherwise({
            templateUrl : "home.html"
        });
});