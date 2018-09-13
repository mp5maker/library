angular.element(document).ready(function(){
    angular.bootstrap(document, ['myApp']);
});

var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope){
    $scope.players = {
        "Shabuktagin Photon Khan": {
            "position": "midfield",
            "goal": "3"
        },
        "Erfan Mahmud": {
            "position": "keeper",
            "goal": "0"
        },
        "Shahriar Sami": {
            "position": "striker",
            "goal": "5"
        },
        "Rizwan Mannan": {
            "position": "defense",
            "goal": "0"
        },
    };

    $scope.counter = 0;
    $scope.digestCounter = 0;

    $scope.clicked = function(){
        $scope.counter += 1; 
    }

    // Create a universal watcher to reduce the performance issue
    $scope.$watch('counter', function(newvalue, oldvalue, scope){
        $scope.message = `The new value: ${newvalue} and the old value is ${oldvalue}`;
    });

    //Invoked After very digest cycle [Infinite Loop]
    $scope.$watch(function(scope){
        if($scope.digestCounter < 10){
            $scope.digestCounter += 1;
        }else{
        }
    });

    // Angular && JQLite && Raw JavaScript Friendship
    let element = angular.element(document.getElementById('fetchAll'));
    console.log(element[0].innerText);

    //Common Object Features
    $scope.employers = {
        "name": "Photon Khan",
        "hobbies": ["Reading"]
    };

    //Modifying Existing Property
    $scope.changeName = function(){
        $scope.employers.name = "Shabuktagin Photon Khan";
    };

    // Add New Property
    $scope.addLocation = function(){
        $scope.employers.number = {
            "home": "01701789873",
            "office": "01715786924"
        };
    };

    // Pushing an array to an property
    $scope.addHobbies = function(){
        $scope.employers.hobbies.push("Playing Guitar");
        $scope.employers.hobbies.push("Biking");
        $scope.employers.hobbies.push("Hiking");
    };

    // Removes the last item of an array
    $scope.removeLasttHobby = function(){
        $scope.employers.hobbies.pop();
    };
    // Removes the first item of an array
    $scope.removeFirstHobby = function(){
        $scope.employers.hobbies.shift();
    };

    //Remove the Property
    $scope.removeHobbies = function(){
        delete $scope.employers.hobbies;
    };

    // True over will cause all the changes in the property to be true
    $scope.$watch('employers', function(newvalue, oldvalue, scope){
        console.log("Normal Watch");
    }, true);

    // Deregistering watcher
    $scope.deregister = function(){
        $scope.deregister_message = "Shakalaka Boom Boom";
    }

    // Deregister
    $scope.deregister_counter = 0;
    var $deregister = $scope.$watch('deregister_message', function(newvalue, oldvalue, scope){
        if($scope.deregister_counter == 0){
            console.log("First Time");
        }else{
            console.log($scope.deregister_counter);
        }
        $scope.deregister_counter += 1;
        console.log("hi");
    });
    $deregister();

    $scope.scrapbook = [
        {
            "Shabuktagin Photon Khan": {
                "hobbies": ["Guitar", "Reading"],
                "job": "Web Developer",
            }
        },
        {
            "Rizwan Mannan": {
                "hobbies": ["Eating", "Sleeping"],
                "job": "Lawyer",
            }
        }
    ];

    // First Level Watch [Updating the property, Adding a property, Deleting a property]
    // No effect on adding / delecting / editing an array in a property, 
    $scope.$watchCollection('employers', function(newvalue, oldvalue, scope){
        console.log("Watch Collection First level watch");
    });
});