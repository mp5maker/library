angular.element(document).ready(function(){
    angular.bootstrap(document, ['myApp']);
});

var app = angular.module('myApp', ['ngAnimate']);

//Concept of Broadcasting, emitting and on
app.controller('mainCtrl', function($scope){
    $scope.$on("parent@gmail.com", function(event, data){
        $scope.main_message = "From :: " + event.name + "; Content :: " + data;
    });

    $scope.$on("child@gmail.com", function(event, data){
        $scope.main_message = "From :: " + event.name + "; Content :: " + data;
    });

    $scope.mainBroadcast = function(){
        $scope.main_message = "May, I have your attention please!";
        $scope.$broadcast('main@gmail.com', $scope.main_message);
    };
});

app.controller('parentCtrl', function($scope){
    $scope.$on('main@gmail.com', function(event, data){
        $scope.parent_message = "From :: " + event.name + "; Content :: " + data;
    });

    $scope.$on('child@gmail.com', function(event, data){
        $scope.parent_message = "From :: " + event.name + "; Content :: " + data;
    });
    
    $scope.parentBroadcast = function(){
        $scope.parent_message = "Child where are you?";
        $scope.$broadcast('parent@gmail.com', $scope.parent_message);
        
    };

    $scope.parentEmit = function(){
        $scope.parent_message = "We are waiting for our child";
        $scope.$emit("parent@gmail.com", $scope.parent_message);
    };
});

app.controller('childCtrl', function($scope){
    $scope.$on('main@gmail.com', function(event, data){
        $scope.child_message = "From :: " + event.name + "; Content :: " + data;
    });
    
    $scope.$on('parent@gmail.com', function(event, data){
        $scope.child_message = "From :: " + event.name + "; Content :: " + data;
    });

    $scope.childEmit = function(){
        $scope.child_message = "I want to go home!";
        $scope.$emit('child@gmail.com', $scope.child_message);
    };
});

//Concept of Inheritance, $parent
app.controller('outerCtrl', function($scope){
    $scope.secret = "No one is supposed to know but me";
});

app.controller('innerCtrl', function($scope){
    $scope.innerReattach = function(){
        delete($scope.data);
    };
});

app.controller('deepCtrl', function($scope){
    $scope.deepReattach = function(){
        delete($scope.data);
    };
});

// Concept of ng-includes inheritance
app.controller('includeCtrl', function($scope){
    $scope.randomData = {
        value: 123
    };
});

// Conpept of ng-repeat data
app.controller('repeatCtrl', function($scope){
    $scope.players = [
        {"name": "Photon Khan"},
        {"name": "Samith Zaman"},
        {"name": "Erfan Mahmud"},
        {"name": "Hemel Saleh"},
    ];

    $scope.employees = [
        "Photon Khan",
        "Samith Zaman",
        "Erfan Mahmud",
        "Hemel Saleh"
    ];
});

// Concep of ng-if data
app.controller('ifSwitchCtrl', function($scope){
    $scope.players = [
        {"name": "Shabuktagin Photon Khan"},
        {"name": "Golam Saif Erfan"},
        {"name": "Rizwan Mannan"},
        {"name": "Erfan Mahmum"},
        {"name": "Shahriar Sami"},
    ];

    $scope.show = false;
});
