var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope){
    $scope.data = {
        text: "The Quick brown Fox JUMPS over the LAZy Dog",
        nums: "012345781234",
        specialChars: "!@#$%&*()_+",
        whitespace: "  "
    };

    $scope.numbers = {
        bignum: 1000000,
        num: 1.0,
        smallnum: 0.9999,
        tinynum: 0.00000001
    };

    $scope.date = {
        unix: 1394787566535,
        iso: '2014-03-14T08:59:26Z',
        normal: new Date(2014, 2, 14, 1, 49, 26, 535)
    };

    $scope.user = {
        name: "Shabuktagin Photon Khan",
        age: "26",
        phone: [
            {home: "028315048"},
            {mobile: "01701789873"},
        ],
        address: "Dhaka, Bangladesh"
    };
});

app.controller('filtersCtrl', function($scope, $filter){
    //Filters in JavaScript
    $scope.val = 1234.56789;
    $scope.filteredVal = $filter('number')($scope.val);

    //Search Filter
    $scope.users = [
        'Albert Pai',
        'Jake Hau',
        'Jack Handford',
        'Scott Robinson',
        'Diwank Singh'
    ];

    $scope.randomText = `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Vero, earum, quo consequatur tempore sequi, velit possimus
        itaque eveniet laudantium debitis voluptatibus nobis aliquam
        iure nihil cumque ullam? Sapiente ut quaerat explicabo tenetur
        adipisci. Quisquam sint ratione incidunt, eveniet suscipit iste
        magnam. Labore laboriosam dolores eos illum minima quod, 
        dolorem iure sed repudiandae odit in obcaecati et. Dignissimos
        earum asperiores exercitationem ut sunt tempora dolor a 
        laborum fugit magnam, voluptatum rem incidunt, eum beatae
        corrupti rerum accusamus ratione magni odio libero natus ipsam
        maiores dicta cupiditate. Amet inventore pariatur ad dicta,
        porro tempora, minima omnis, quos modi blanditiis quam
        architecto deleniti vel iure aperiam! Incidunt accusantium
        asperiores, excepturi perspiciatis quas fuga iste odit dolores
        ullam recusandae sunt sequi facere aliquam consectetur quo
        eveniet optio. Quos natus numquam deleniti totam
        pariatur sint, ex magni iusto consequuntur suscipit
        voluptas. Ipsam fugit labore quos quam, molestias placeat
        quisquam vel voluptatum repellat, expedita quaerat porro laborum
        provident velit tempora fuga quasi alias vero ut
        officiis veniam? Illo dolor, aspernatur voluptates 
        cupiditate sit vero deleniti voluptatibus voluptatum
        officiis, sed mollitia, nesciunt dolore ratione
        consequuntur! Error impedit repellat placeat optio
        temporibus! Pariatur mollitia optio nobis voluptatum
        hic quisquam nulla provident molestias, autem in impedit
        dignissimos, est similique.
    `;
});



//Creating Custom Data Filter
app.filter('simpletruncate', function(){
    return function(test){
        var truncated = test.slice(0, 100);
        if(test.length > 100){
            truncated += '....';
        }
        return truncated;
    }
});

app.directive('filterDirective', function($filter){
    return{
        restrict: "E",
        template: "{{data}}",
        scope: {
            data : '='
        },
        link: function(scope, el, attrs, ctrls){
            scope.data = $filter('simpletruncate')(scope.data);
        }
    }
})

app.run(function($rootScope){
    $rootScope.lang = 'bn';
});

//This is can be injected in app.config(function('language'))
app.constant('language', {
    "translations": {
        "bn" : {
            "HELLO" : "হ্যালো"
        },
        "en" : {
            "HELLO" : "Hello"
        }
    }
});

//This is similar to app.constant but this cannot be injected in config
app.value('something', "I am done boi");

app.filter('translate', function($rootScope, language){
    return function(text){
        var lang = $rootScope.lang;
        if(lang && text){
            return language.translations[lang][text];
        }else{
            return text;
        }
    }
});

// Custom Search Filters
app.controller('customCtrl', function($scope){
    $scope.users = [
        {
            firstname: "John",
            lastname: "Stockton",
            number: "12"
        },
        {
            firstname: "Michael",
            lastname: "Jordan",
            number: "23"
        },
        {
            firstname: "Allen",
            lastname: "Iverson",
            number: "3"
        },
    ];
});

