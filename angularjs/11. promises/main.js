angular.element(document).ready(function(){
    angular.bootstrap(document, ['myApp']);
});

var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope, $q, $interval, $timeout, $http){
    //Dumping Random Models
    $scope.employers = ["Photon Khan", "Ashique Khanna", "Rizwan Manna"];
    $scope.players = ["Shariar Zaman", "Manna Dey", "Whoopy Mastadon"];
    console.log(angular.element(document).scope());

    //Concept of promise
    var concept = $q.defer();
    concept.resolve("Concept Resolved");
    // We can see once concept is resolved the rejection won't have any action
    concept.reject("Concept Reject");
    console.log(concept.promise.$$state.status);
    console.log(concept.promise.$$state.value);

    function sayHello(name){
        var deferred = $q.defer();
        if(name != ''){
            deferred.resolve(name);
        }else{
            deferred.reject("You need to say your name");
        }
        return deferred.promise;
    }

    var hello_resolve = sayHello("Photon Khan");
    hello_resolve.then(function(success){
        $scope.hello_message_resolve = success; 
    }, function(failure){
        $scope.hello_message_reject = failure;
    });
    
    var hello_reject = sayHello("");
    hello_reject.then(function(success){
        $scope.hello_message_resolve = success;
    }, function(failure){
        $scope.hello_message_reject = failure;
    });

    // Alternative way for promise
    function asyncfunction(name){
        return $q(function(resolve, reject){
            if(name){
                resolve(name);
            }else{
                reject("You need to say your name");
            }
        });
    }

    var hello_async_resolve = asyncfunction("Photon Khan");
    hello_async_resolve.then(function(data){
        $scope.async_resolve_message = data;
    }, function(data){
        $scope.async_reject_message = data;
    });

    var hello_async_reject = asyncfunction("");
    hello_async_reject.then(function(data){
        $scope.async_resolve_message = data;
    }, function(data){
        $scope.async_reject_message = data;
    });

    // Creating Notification Squad
    function notificationSquad(){
        var deferred = $q.defer();
        var i = 0;
        var interval;
        interval =    
            $interval(function(){
                if(i < 4){
                    var value = (i+1)*25;
                    deferred.notify(value);
                    i++;
                }
                if(i >= 4){
                    deferred.resolve('Completed');
                    $interval.cancel(interval);
                }
                if(i == null){
                    deferred.reject('Incomplete');
                    $interval.cancel(interval);
                }
            }, 500);
        return deferred.promise;
    }

    var notifySquad = notificationSquad();
    notifySquad.then(function(success){
        $scope.notify = success;
        console.log(success);
    }, function(reject){
        $scope.notify = reject;
        console.log(reject);
    }, function(notify){
        switch(notify){
            case 25:
            $scope.color = "danger";
            break;
            
            case 50:
            $scope.color = "warning";
            break;
            
            case 75:
            $scope.color = "info";
            break;
            
            case 100:
            $scope.color = "success";
            break;

            default: 
            $scope.color = "secondary";
        }
        $scope.notify = notify;
        console.log(notify);
    });

    // More concepts of promises
    const posts = [
        {title: "Post 1", body: "This is post one"},
        {title: "Post 2", body: "This is post two"},
    ];

    function getPosts(){
        $timeout(() => {
            $scope.posts = posts;
        }, 1000);
    }

    function createPost(post, callBack){
        $timeout(() => {
            posts.push(post);
            callBack();
        }, 2000);
    }

    createPost({'title': "Post 3", "body": "This is post three"}, getPosts);

    // Other ways to asynchronously call
    $scope.spin = true;
    $scope.fetchedData = [];
    function fetchData(){
        var url = "data.php";
        $http.get(url).then((response) => {
            response.data.forEach((data) => {
                $scope.fetchedData.push(data);
            });
        });
    }

    function createData(post, callBack){
        $timeout(() => {
            $scope.fetchedData.push(post);
            callBack();
            $scope.spin = false;
        }, 3000);
    }

    createData({"id": "3", "title": "Post Three", "body": "This is post three"}, fetchData);

    // Proper Way to do it
    $scope.new_posts = [];
    function getNewPosts() {
        $timeout(() => {
            posts.forEach((each_data) => {
                $scope.new_posts.push(each_data);
            });
            console.log($scope.new_posts);
        }, 1000);
    }

    function createNewPost(post){
        return $q((resolve, reject) => {
            if(post){
                $scope.new_posts.push(post);
                resolve("Successfully passed the data");
            }else{
                reject("You didn't pass any data");
            }
        });
    }
    createNewPost({"title": "Post 3", "body": "This is post 3"}).then(getNewPosts)
    .catch(function(error){
        console.log(error);
    });

    // Promise All
    var new_defer = $q.defer(), 
    resolve = new_defer.resolve("First Promise"),
    new_promise = new_defer.promise;
    
    const new_promise_2 = 10;

    const new_promise_3 = $q(function(resolve, reject){
        $timeout(() => {
            resolve("Problem has been resolved");
        }, 1000);
    });

    $q.all([new_promise, new_promise_2, new_promise_3]).then((data) => {
        console.log(data);
    });
    
    // When accepts both promise and non-promise-objects
    var alt_defer = $q.defer(), 
    resolve = alt_defer.resolve("Alternative way to create promise"),
    alt_promise = alt_defer.promise;

    alt_promise_2 = $q.when("Alternative Second Promise");

    $q.all([alt_promise, alt_promise_2]).then((data) => {
        console.log(data);
    });

    // Simple $http concept
    $http.get('data.php').then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.headers);
        console.log(response.config);
        console.log(response.statusText);
    });

    //Rest Api
    
});
