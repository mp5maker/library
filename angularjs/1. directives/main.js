var app = angular.module('myApp', []);

app.directive('contentDirective', function($document){
    return {
        //Attribute, Element, Class, Comment
        restrict: "AECM",

        //Needed for Comment
        replace: true,
        
        templateUrl: "some-content.html",
        
        //Decorate existing material
        link: function(scope, el, attrs){
            scope.message = 'Get Started!';
            $document.on('mousemove', function(event){
                scope.$apply(function(){
                    if(event.pageX < 300){
                        scope.message = 'W';
                    }else{
                        scope.message = "E";
                    }
                    if(event.pageY < 300){
                        scope.message += "N"
                    }else{
                        scope.message += "S"
                    }
                });
            });
        }
    };
});

//Without Two Way Binding
app.directive("isolatedDirective", function(){
    return{
        restrict: "EC",
        templateUrl: "form.html",
        scope: {
            "fullname": "@getName",
        },
    }
});

// With Two Way Binding
app.directive("isolatedBindingDirective", function(){
    return{
        restrict: "EC",
        templateUrl: "form.html",
        scope: {
            "fullname": "=getName",
        },
    }
});

app.directive("isolatedFunction", function(){
    return{
        templateUrl: "result.html",
        restrict: "EC",
        scope: {
            "calculate": "&"
        },
        link: function(scope){
            scope.result = 
                scope.calculate({
                    width: 5,
                    height: 3,
                });
        }
    }
});

app.controller('isolatedCtrl', function($scope){
    $scope.name = "John Doe";

    $scope.rectangle = function(width, height){
        return width*height;
    }
});

//Nested Directives [Interaction between controllers]
app.directive('parentDirective', function(){
    return {
        restrict: "E",
        controller: function(){
            this.parentSays = "Parents on the back";
        }
    }
});

app.directive('siblingDirective', function(){
    return{
        restrict: "A",
        controller: function(){
            this.siblingSays = "Sisters stays on the side";
        }
    }
});

app.directive('childDirective', function(){
    return{
        require: ['^parentDirective', '^?siblingDirective'],
        template: "<span class = 'lead'>{{everyoneSays}}</span>",
        restrict: "E",         
        link: function(scope, el, attrs, ctrls){
            scope.everyoneSays = ctrls[0].parentSays +  " " + ctrls[1].siblingSays;
        }
    }
});

//Directive Templating
app.directive('templateDirective', function(){
    return{
        restrict: "E",
        replace: true,
        // If we want do not want to inherit
        // scope: {},
        templateUrl: "template-directive.html",
        link: function(scope){
            scope.overwrite = scope.origin;
            scope.origin = "Now we took the matters in our hands";
        }
    }
});

app.controller('directiveCtrl', function($scope){
    $scope.overwrite = "Parents first wrote it!";
    $scope.origin = "Parents";
});

//Directive Transclude
app.directive('dadDirective', function(){
    return{
        transclude: true,
        restrict: "E",
        template:`
                    <p>
                        <ng-transclude></ng-transclude>
                        <code>
                            I would soon tell you son!
                        </code>
                    </p>
                `
    }
});

app.directive('kidDirective', function(){
    return{
        restrict: "E",
        template: "<span class = 'lead'>Tell me a story dad!</span>"
    }
});

// Template Cache
app.run(function($templateCache){
    $templateCache.put('cache-template.html', 'Different template content');
});

app.directive('cacheDirective', function($templateCache){
    return{
        restrict: "E",
        template: $templateCache.get('cache-template.html')
    }
});