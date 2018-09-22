/**
 * Underscore JS Collections
 */
var employee = [
    {
        salary: 35000,
        occupation: "misc"
    },
    {
        salary: 23000,
        occupation: "it"
    },
    {
        salary: 17000,
        occupation: "business"
    },
    {
        salary: 50000,
        occupation: "it"
    },
];

/**
 * Underscore JS _.find(list, predicate)
 * Looks through each value in the list, 
 * Eeturning the first one that passes a truth test 
 */
console.log("%c Underscore Find", "background-color: black; color: white;");
console.log(_.find(employee, (person) => (person.occupation == 'it')));

    
/**
 * Underscore JS _.countBy(list, iterate)
 * Sorts a list into groups and returns a count for the number of objects in each group.
 */
var UnderscoreCountBy = _.countBy(employee, function(person) {
    return person.occupation;
});

console.log("%c Underscore Count By", "background-color: orange; color: white;");
console.log(UnderscoreCountBy);

/**
 * UnderScore JS _.pairs(object) 
 * Convert an object into a list of [key, value] pairs.
 */
function UnderscorePairs(){
    _.pairs(employee).forEach(function(employeeKeyValue) {
        console.log(employeeKeyValue[0]);
        console.log(employeeKeyValue[1]);
    })
}

console.log("%c Underscore Pairs", "background-color: firebrick; color: white;");
UnderscorePairs();

var players = [
    {
        name: "Ronaldo",
        team: "Real Madrid"
    },
    {
        name: "Messi",
        team: "Barcelona"
    },
    {
        name: "Torres",
        team: "Liverpool"
    }
]

var player = [
    {
        name: "Boom",
    },
    {
        work: "Shaka"
    }
];
var team = {};

/**
 * Underscore JS _.every(list, [predicate])
 * Returns true if all of the values in the list pass the predicate truth test
 */

console.log("%c Underscore Every", "background-color: paleblue; color: white;");
var UnderscoreEvery = _.every(players, function(player) {return player.name;});
console.log(UnderscoreEvery);

var UnderscoreEveryTwo = _.every(player, function(p) {return p.name;});
console.log(UnderscoreEveryTwo);

/**
 * Underscore JS _.some(list, predicate)
 * Returns true if any of the values in the list pass the predicate truth test.
 */

console.log("%c Underscore Some", "background-color: grey; color: white;");
var UnderscoreSome = _.some(players, function(player) {return player.name;});
console.log(UnderscoreEvery);

var UnderscoreSomeTwo = _.some(player, function(p) {return p.name;});
console.log(UnderscoreSomeTwo);

/**
 * Underscore JS _.where(list, properties)
 * Looks through each value in the list, 
 * Returning an array of all the values that matches 
 * The key-value pairs listed in properties.
 */
var UnderscoreWhere = _.where(players, {team: "Barcelona"});
console.log("%c Underscore Where", "background-color: violet; color: white;");
console.log(UnderscoreWhere);

/**
 * Underscore JS _.size(list)
 */
var UnderscoreSize = _.size(players);
console.log("%c Underscore Size", "background-color: indigo; color: white;");
console.log(UnderscoreSize);

/**
 * Underscore JS _.reduce(previousValue, iteratee)
 * Boils down a list of values into a single value
 */
var randomNumber = [3, 5, 8, 2];
var UnderscoreReduce = _.reduce(randomNumber, 
    function(previousValue, currentValue){
        return previousValue + currentValue;
    }, 0
);
console.log("%c Underscore Reduce", "background-color: green; color: white;");
console.log(UnderscoreReduce);

/**
 * Underscore JS _.each(list, iteratee)
 * Iterates over a list of elements, yielding each in turn to an iteratee function.
 */
console.log("%c Underscore Each", "background-color: brown; color: white;");
 _.each(players, 
    function(value, key) {
        console.log(value);     
    }
)

/**
 * Underscore JS _.max(list, iteratee)
 * Returns the maximum value in list.
 */
const kids = [
    {
        name: "Mary",
        age: 11
    },
    {
        name: "Bob",
        age: 15
    },
    {
        name: "John",
        age: 9
    }
]

console.log("%c Underscore Max", "background-color: magenta; color: white;");
console.log(_.max(kids, (kid) => (kid.age)));

/**
 * Underscore JS _.min(list, iteratee)
 * Returns the minimum value in list
 */
console.log("%c Underscore Min", "background-color: olive; color: white;");
console.log(_.min(kids, (kid) => kid.age))

/**
 * Underscore JS _.findWhere(list, properties)
 * Looks through the list and returns the first value that 
 * Matches all of the key-value pairs listed in properties.
 */
console.log("%c Underscore Find Where", "background-color: violetred; color: white;");
console.log(_.findWhere(kids, {age: 15}))

/**
 * Underscore JS _.contains(list, value) [Array]
 * Returns true if the value is present in the list.
 */
let rand_numbers = [2, 3, 5, 6]
console.log("%c Underscore Contains", "background-color: purple; color: white");
console.log(_.contains(rand_numbers, 6));

/**
 * Underscore JS _.reject(list, predicate)
 * Returns the values in list without the 
 * Elements that the truth test (predicate) passes.
 */
console.log('%c Underscore Reject', "background-color: sandybrown; color: white");
console.log(_.reject(rand_numbers, (number) => (number == 2 || number == 5)));

/**
 * Underscore JS _.sortBy(list, iteratee)
 * Returns a (stably) sorted copy of list, 
 * Ranked in ascending order by the results of 
 * Running each value through iteratee.
 */
var movies = [
    {
        title: "Gone in 60 seconds",
        actor: "Nicolas Cage",
        type: "action"
    },
    {
        title: "Italian Job",
        actor: "Mark Warlberg",
        type: "action"
    },
    {
        title: "Matrix",
        actor: "Keenu Reeves",
        type: "thriller"
    }
]
console.log("%c Underscore Sort By", "background-color: tan; color: white;");
console.log(_.sortBy(movies, (movie) => (movie.actor)));

/**
 * Undrescore JS _.groupBy(list, iteratee)
 * Splits a collection into sets, 
 * Grouped by the result of running 
 * Each value through iteratee
 */
console.log("%c Underscore Group By", "background-color: teal; color: white;");
console.log(_.groupBy(movies, (movie) => movie.type));

/**
 * Underscore JS _.indexBy(list, iteratee)
 * Given a list, and an iteratee function that 
 * $eturns a key for each element in the list (or a property name)
 */
console.log("%c Underscore Index By", "background-color: wheat; color: black;");
console.log(_.indexBy(movies, (movie) => movie.title));

/**
 * Undrescore JS _.toArray(list)
 * Creates a real Array from the list
 */
let singleDrink = 
    {
        name: "Coffelicious",
        flavor: "Chocolate"
    };
console.log("%c Underscore Array", "background-color: yellowgreen; color: black;");
console.log(_.toArray(singleDrink));

/**
 * Underscore JS _.partition(list, predicate)
 * Split list into two arrays: one whose elements 
 * All satisfy predicate and one whose elements all do not satisfy predicate.
 */
let someValue = [0, 1, 2, 3, 4, 5];
console.log("%c Underscore Partition", "background-color: tomato; color: white;");
console.log(_.partition(someValue, (value) => value % 2));

/**
 * Underscore JS _.shuffle(list)
 * Returns a shuffled copy of the list, [Fisher-Yates algorithm]
 */
console.log("%c Underscore Shuffle", "background-color: rosybrown; color: white");
console.log(_.shuffle(someValue));

/**
 * Underscore JS _.sample(list, [n]
 * Produce a random sample from the list.)
 */
console.log("%c Underscore Sample", "background-color: salmon; color: white;");
console.log(_.sample(someValue, 3));

/**
 * Underscore JS _.pluck(list, propertyName)
 * A convenient version of what is perhaps the most common use-case 
 * For map: extracting a list of property values.
 */
console.log("%c Underscore Pluck", "background-color: pink; color: white");
console.log(_.pluck(movies, 'actor'));

/**
 * Underscore JS _.filter(list, predicate)
 * Looks through each value in the list, 
 * Returning an array of all the values that pass a truth test (predicate).
 */
console.log("%c Underscore Filter", "background-color: darkgrey; color: white");
console.log(_.filter(someValue, (num) => (num % 2 === 0)));

/**
 *  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 */

/**
 * Underscore JS Array
 */
var items = [
    "tomato", 
    "potato", 
    "cucumber", 
    "onion"
];

/**
 * Underscore JS _.first(array, [n])
 * Returns the first element of an array
 */
console.log("%c Underscore First", "background-color: palegreen; color: black;");
console.log(_.first(items));

/**
 * Underscore JS _.last(array, [n])
 * Returns the last element of an array
 */
console.log("%c Underscore Last", "background-color: violet; color: black;");
console.log(_.last(items));

/**
 * Underscore JS _.rest(array, [index])
 * Returns the rest of the elements in an array.
 * [Complement of _.first]
 */
console.log("%c Underscore Rest", "background-color: blue; color: white;");
console.log(_.rest(items));

/**
 * Underscore JS _.initial(array, [index])
 * Returns everything but the last entry of the array.
 * [Complement of _.last]
 */
console.log("%c Underscore Initial", "background-color: orange; color: white;");
console.log(_.rest(items));

/**
 * Underscore Js _.union(*arrays)
 * Computes the union of the passed-in arrays: 
 * The list of unique items, in order, that are present 
 * In one or more of the arrays.
 */
var num1 = [1, 2, 3];
var num2 = [81, 92, 32, 65, 3, 45];
console.log("%c Underscore Union", "background-color: darkgrey; color: white;");
console.log(_.union(num1, num2));

/**
 * Underscore Js _.intersection(*arrays)
 * Computes the list of values that are the intersection of all the arrays. 
 * Each value in the result is present in each of the arrays.
 */
console.log("%c Underscore Intersection", "background-color: red; color: white;");
console.log(_.intersection(num1, num2));

/**
 * Underscore JS _.difference(array, *others)
 * Similar to without, but returns the values from array 
 * That are not present in the other arrays.
 */
console.log("%c Underscore Difference", "background-color: firebrick; color: white;")
console.log(_.difference(num1, num2));

/**
 * Underscore JS _.uniq(array, [isSorted])
 * Produces a duplicate-free version of the array
 */
console.log("%c Underscore Unique", "background-color: pink; color: black");
console.log(_.unique([1, 2, 2, 3, 3, 4, 4, 4, 5, 5]));

/**
 * Unserscore JS _.zip(*arrays)
 * Merges together the values of each of the arrays 
 * With the values at the corresponding position.
 */
console.log("%c Underscore Zip", "background-color: brown; color: white");
console.log(_.zip(["Hi", "hello", "welcome"], ["Robert", "Ann", "Mary"]));

/**
 * Unserscore JS _.unzip(array)
 * Merges together the values of each of the arrays 
 * With the values at the corresponding position.
 */
console.log("%c Underscore Unzip", "background-color: darkgreen; color: white");
console.log(_.unzip([
    [
        "Hi", "Photon"
    ],
    [
        "Hello", "Robert"
    ],
    [
        "Welcome", "Mary"
    ]
]));

/**
 * Unserscore JS _.compact(*arrays)
 * Returns a copy of the list with all falsy values removed.
 */
console.log("%c Underscore Compact", "background-color: darkgray; color: white");
console.log(_.compact([0, null, 1, 'yellow', "blue", undefined, "none", false]));

/**
 * Unserscore JS _.flatten(array, shallow)
 * Flattens a nested array (the nesting can be to any depth).
 */
console.log("%c Underscore Flatten", "background-color: orange; color: white");
var flatten = [
    [
        "Colors", 
        [
            "Colors", "Type of Colors"
        ], 
        ["Colors", "Type of Colors",
        [
            "yellow",
            "blue",
            "orange"
        ]
    ]
]
];
console.log(_.flatten(flatten));
console.log(_.flatten(flatten, true));

/**
 * Underscore JS _.without(array, *values)
 * Returns a copy of the array with all instances of the values removed.
 */
console.log("%c Underscore Without", "background-color: black; color: white");
console.log(_.without([1, 2, 3, 4, 5], 0, 1));

/**
 * Underscore JS _.objects(list, [values])
 * Converts arrays into objects. Pass either a single list of [key, value] pairs
 */
console.log("%c Underscore Object", "background-color: indigo; color: white");
var dogs = [
    "Husky",
    "Malamute",
    "Shiba"
];
var dogAge = [
    5, 
    7, 
    3
];
console.log(_.object(dogs, dogAge));
console.log(_.object(['Hi', "Hello"], ["Photon", "Adam"]));

/**
 * Underscore JS _.chunk(array, length)
 * Chunks an array into multiple arrays, each containing length or fewer items.
 */
console.log("%c Underscore Chunk", "color: blue");
console.log(_.chunk(_.shuffle(items), 2));


/**
 * Underscore JS _.indexOf(array, value)
 * Returns the index at which value can be found in the array,
 */
console.log("%c Underscore Index OF", "color: green");
console.log(_.indexOf([1, 2, 3], 2));

/**
 * Underscore JS _.lastIndexOf(array, value)
 * Returns the index of the last occurrence of value in the array,
 */
console.log("%c Underscore Last Index OF", "color: purple");
console.log(_.lastIndexOf([1, 2, 3, 1, 2, 3], 3));

/**
 * Underscore JS _.sortedIndex(array, value, [iteratee])
 * Uses a binary search to determine the index at which the value
 */
console.log("%c Underscore Sorted Index", "color: magenta");
console.log(_.sortedIndex([10, 20, 30, 40, 50, 60], 45));
console.log(_.sortedIndex(kids, {name: "John", age: 8}, 'age'));

/**
 * Underscore JS _.findIndex(array, predicate, [context])
 * Returns the first index where the predicate truth test passes;
 */
console.log("%c Underscore Find Index", "color: gold; background-color: black;");
var users = [
    {
        id: 1,
        name: "Bob",
    },
    {
        id: 2,
        name: "Ted"
    },
    {
        id: 3,
        name: "Frank"
    },
    {
        id: 4,
        name: "Jones"
    }
]
console.log(_.findIndex(users, {name: "Frank"}));

/**
 * Underscore JS _.range([start], stop, [step])
 * A function to create flexibly-numbered lists of integers, 
 * Handy for each and map loops. start, 
 * If omitted, defaults to 0; step defaults to 1.
 */
console.log("%c Underscore Range", "color: grey; background-color: pink;");
console.log(_.range(0, 30, 5));

/**
 *  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 */

/**
 * Underscore JS Functions
 */

/**
 * Underscore JS _.bind(function, object, *arguments)
 * Bind a function to an object, 
 * Meaning that whenever the function is called, 
 * The value of this will be the object.
 * Arrow Function do not works over here
 */
console.log("%c Underscore Bind", "color: blue; background-color: yellow;");
const greetings = _.bind( 
                    function(greeting) {
                        return greeting + ": " + this.name;
                    },
                    { name: "Photon Khan" },
                    "Welcome"
                );
console.log(greetings());

/**
 * Underscore JS _.bindAll(object, *methodNames)
 * Binds a number of methods on the object, specified by methodNames,
 */
console.log("%c Underscore Bind All", "color: green; background-color: pink;");
const buttonView = {
    onClick: () => (console.log("%c Button has been clicked", "background-color: black; color: white")),
    onHover: () => (console.log("%c Button has been hovered", "background-color: blue; color: white;"))
};
_.bindAll(buttonView, 'onClick', 'onHover');
jQuery("#button-binding").on('click', buttonView.onClick);
jQuery("#button-binding").on('mouseover', buttonView.onHover);

/**
 * Underscore JS _.partial(function, *arguments)
 * Partially apply a function by filling in any number of its arguments,
 */
var subtract = function(a, b) {
    return b - a;
}
var substractByFive = _.partial(subtract, 5);
console.log("%c Underscore Partial", "background-color: green; color: white");
console.log(substractByFive(20));

/**
 * Underscore JS _.delay(function, wait, *arguments)
 * Much like setTimeout, invokes function after wait milliseconds..
 */
console.log("%c Underscore Delay", "background-color: firebrick; color: white");
_.delay(console.log, 1000, "Underscore Delay 1000ms");

/**
 * Underscroe JS _.defer(function, *arguments)
 * Defers invoking the function until the current call stack has cleared,
 * Similar to using setTimeout with a delay of 0.
 */
console.log("%c Underscore Defer", "background-color: violet; color: white");
_.defer(function(){console.log("Defered Function");});

/**
 * Underscroe JS _.throttle(function, wait)
 * Creates and returns a new, throttled version of the passed function, 
 * When invoked repeatedly, will only actually call the original function at most once per every wait milliseconds.
 */
console.log("%c Underscore Throttle", "background-color: red; color: white");
window.addEventListener('scroll', 
_.throttle(function() {
    console.log(window.innerHeight);
}, 1000)
)

/**
 * Underscore JS _.debounce(function, wait)
 * Creates and returns a new debounced version of the passed function which 
 * Will postpone its execution until after wait milliseconds have elapsed 
 * Since the last time it was invoked.
 */
console.log("%c Underscore Debounce", "background-color: violet; color: white");
window.addEventListener('resize', 
_.debounce(function() {
    console.log(window.innerHeight);
}, 1000)    
)

/**
 * Underscroe JS _.after(count, function)
 * Creates a version of the function that will only be run after being called count times.
 */
console.log("%c Underscore After", "background-color: indigo; color: white");
var notes = [
    {
        subject: "Math"
    },
    {
        subject: "Biology"
    },
    {
        subject: "Physics"
    },
    {
        subject: "Chemistry"
    },
    {
        subject: "Geography"
    },
];

var clickThreeTimes = _.after(3, function(){
    console.log("Now you can save the data after three clicks");
});

document.getElementById('after-button').addEventListener('click', clickThreeTimes);

/**
 * Underscore JS _.before(count, function)
 * Creates a version of the function that can be called no more than count times.
 */
console.log("%c Underscore Before", "background-color: green; color: white");
var fourWorkingMonths = _.before(3, askForRaise);
fourWorkingMonths();
fourWorkingMonths();
fourWorkingMonths();

function askForRaise() {
    console.log("You salary has been increased");
}

/**
 * Underscore JS _.wrap(function, wrapper)
 * Wraps the first function inside of the wrapper function,
 * Passing it as the first argument. 
 * This allows the wrapper to execute code before and 
 * After the function runs, adjust the arguments, and execute it conditionally.
 */
console.log("%c Underscore Wrap", "background-color: orange; color: white");
var hello = function(name) {
    return "Hello, " + name;
}

hello = _.wrap(hello, function(func){
    return "Before:: " + func('Photon') + " :: After";
});

console.log(hello());

/**
 * Underscore JS _.negate(predicate)
 * Returns a new negated version of the predicate function.
 */
console.log("%c Underscore Negate", "background-color: black; color: white");
console.log(_.find([-2, -1, 0, 1, 2, 3], _.negate(Boolean)));

/**
 * Underscore JS _.compose(*functions)
 * Returns the composition of a list of functions, 
 * Where each function consumes the return value of the function that follows. 
 * In math terms, composing the functions f(), g(), and h() produces f(g(h())).
 */
console.log("%c Underscore Compose", "background-color: silver; color: black");
var birthdayTheme = function(uppercasedName){
    return "Happy Birthday to you, Happy Birthday to " + uppercasedName + " Happy Birthday to you!";
};
var capitalizeName = function(name) {
    return name.toUpperCase();
};
var birthdayWish = _.compose(birthdayTheme, capitalizeName);
console.log(birthdayWish("Photon"));

/**
 * Underscore JS _.restArguments(function, [startIndex])
 * Returns a version of the function that, when called, 
 * $eceives all arguments from and beyond startIndex collected into a single array.
 */
console.log("%c Underscore Rest Arguments", "background-color: silver; color: white");
var raceResult = _.restArguments(function(gold, silver, bronze, everyoneElse){ 
    _.each(everyoneElse, function(name) {
        console.log("Better Luck Next Time: " + name);
    });
});
raceResult("John", "Doe", "Mary", "Bob", "Smith", "Richard", "Sinister");
/**
 * ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 */

/**
 *  Underscore JS Objects 
 */
var themes = {
    light: "white",
    dark: "black",
    mint: "lightgreen"
};
/**
 * Underscore JS _.keys(object)
 * Retrieve all the names of the object's own enumerable properties.
 */
console.log("%c Underscore Keys", "background-color: yellow; color: black");
console.log(_.keys(themes));

/**
 * Underscore JS _allKeys(object)
 * Retrieve all the names of object's own and inherited properties.
 */
console.log("%c Underscore All Keys", "background-color: yellow; color: green");
function Person(name){
    this.name = name;
}
Person.prototype.age = 16;
console.log(_.allKeys(new Person("Johnny")));

/**
 * Underscore JS _.values(object)
 * Return all of the values of the object's own properties.
 */
console.log("%c Underscore Values", "background-color: yellow; color: red");
console.log(_.values(themes));

/**
 * Underscore JS _.mapObject(object, iteratee)
 * Like map, but for objects. Transform the value of each property in turn.
 */
var timings = {
    start: 15,
    break: 5,
    end: 60,
}
console.log("%c Underscore Map Object", "background-color: yellow; color: blue");
console.log(_.mapObject(timings, (value, key) => (value + 5)));

/**
 * Underscore JS _.pairs(object)
 * Convert an object into a list of [key, value] pairs. The opposite of object.
 */
console.log("%c Underscore Pairs", "background-color: yellow; color: brown");
console.log(_.pairs(timings));

/**
 * Underscore JS _.invert(object)
 * Returns a copy of the object where the keys have become the values and the values the keys.
 */
console.log("%c Underscore Invert", "background-color: yellow; color: orange");
console.log(_.invert(timings));

/**
 * Underscore JS _.create(prototype, props)
 * Creates a new object with the given prototype, optionally attaching props as own properties
 */
console.log("%c Underscore Create", "background-color: yellow; color: green");
var salary = _.create(Person.prototype, {salary: 25000});
console.log(salary);

/**
 * Underscore JS _.functions(object)
 * Returns a sorted list of the names of every method in an object
 */
console.log("%c Underscore Functions", "background-color: yellow; color: green");
console.log(_.functions(_));

/**
 * Underscore JS _.findKey(object, predicate)
 * Similar to _.findIndex but for keys in objects.
 */
var someJSONFormat = {
    ronaldo : {
        team: "Real Madrid"
    },
    messi : {
        team: "Barcelona"
    },
    torres : {
        team: "Liverpool"
    }
}
console.log("%c Underscore Find Key", "background-color: yellow; color: black");
console.log(_.findKey(someJSONFormat, (player) => (player.team == "Barcelona")));

/**
 * Underscore JS _.extend(destination, *sources)
 * Shallowly copy all of the properties in the source objects over to the destination object,
 */
console.log("%c Underscore Extend", "background-color: yellow; color: black");
console.log(_.extend({name: "Photon"}, {age: 27}));

/**
 * Underscore JS _.extendOwn(destination, *sources)
 * Like extend, but only copies own properties over to the destination object.
 */
console.log("%c Underscore Extend Own", "background-color: yellow; color: black");
console.log(_.extendOwn({name: "Photon"}, {age: 27}));

/**
 * Underscore JS _.pick(object, *keys)
 * Return a copy of the object, filtered to only have 
 * Values for the whitelisted keys (or array of valid keys).
 */
console.log("%c Underscore Pick", "background-color: yellow; color: black");
console.log(_.pick(timings, 'break'));

/**
 * Underscore JS _.omit(object, *keys)
 * Return a copy of the object, filtered to omit the blacklisted keys (or array of keys).
 */
console.log("%c Underscore Omit", "background-color: yellow; color: black");
console.log(_.omit(timings, 'break'));

/**
 * Underscore JS _.defaults(object, *default)
 * Returns object after filling in its undefined properties with the 
 * First value present in the following list of defaults objects.
 */
console.log("%c Underscore Defaults", "background-color: yellow; color: black");
console.log(_.omit({break: 5}, {break: 5, checkpoint: 20}));

/**
 * Underscore JS _.clone(Object)
 * Create a shallow-copied clone of the provided plain object.
 */
console.log("%c Underscore Clone", "background-color: yellow; color: black");
console.log(_.clone(timings));

/**
 * Underscore JS _.tap(object, interceptor)
 * Invokes interceptor with the object, and then returns object.
 */
console.log("%c Underscore Tap", "background-color: yellow; color: black");
console.log(
    _.chain([1, 2, 3, 4, 5, 6])
    .filter((num) => num % 2 == 0)
    .tap(alert)
    .map(function (num) { return num * num })
    .value()
);
function alert() {
    console.log("I just filtered");
}

/**
 * Underscore JS _.has(object, key)
 * Does the object contain the given key? Identical to object.hasOwnProperty(key),
 */
console.log("%c Underscore Has", "background-color: yellow; color: black");
console.log(_.has(timings, "end"));

/**
 * Underscore JS _.property(path)
 * Does the object contain the given key? Identical to object.hasOwnProperty(key),
 */
console.log("%c Underscore Property", "background-color: yellow; color: black");
console.log(_.property("end")(timings) == 60);

/**
 * Underscore JS _.propertyOf(object)
 * Does the object contain the given key? Identical to object.hasOwnProperty(key),
 */
console.log("%c Underscore Property Of", "background-color: yellow; color: black");
console.log(_.propertyOf(timings)('end'));

/**
 * Underscore JS _.matcher(attrs)
 * Returns a predicate function that will tell you 
 * If a passed in object contains all of the key/value properties present in attrs.
 */
console.log("%c Underscore Matcher", "background-color: yellow; color: black");
console.log(_.matcher({visible: true})({visible:true, stable: true}));

/**
 * Underscore JS _.isEqual(object, other)
 * Performs an optimized deep comparison between the two objects, to determine if they should be considered equal.
 */
console.log("%c Underscore Is Equal", "background-color: yellow; color: black");
console.log(_.isEqual({name: "photon"}, {name: "photon"}));

/**
 * Underscore JS _.isMatch(object, properties)
 * Tells you if the keys and values in properties are contained in object.
 */
console.log("%c Underscore is Match", "background-color: yellow; color: black");
console.log(_.isEqual({name: "photon"}, {name: "photon"}));

/**
 * Underscore JS _.isElement(object)
 * Returns true if object is a DOM element.
 */
console.log("%c Underscore is Element", "background-color: yellow; color: black");
console.log(_.isElement(document.getElementById('after-button')));

/**
 * Underscore JS _.isArray(object)
 * Returns true if object is a DOM element.
 */
console.log("%c Underscore is Array", "background-color: yellow; color: black");
console.log(_.isArray([1, 2, 3]));

/**
 * Underscore JS _.isArguments(object)
 * Returns true if object is an Arguments object
 */
console.log("%c Underscore Is Arguments", "background-color: yellow; color: black");
(function(){
    console.log(_.isArguments(arguments));
})([1,2,3]);

/**
 * Underscore JS _.isFunction(object)
 * Returns true if object is a Function.
 */
console.log("%c Underscore Is Function", "background-color: yellow; color: black");
console.log(_.isFunction(alert));

/**
 * Underscore JS _.isString(object)
 * Returns true if object is a String.
 */
console.log("%c Underscore Is String", "background-color: yellow; color: black");
console.log(_.isString("Photon"));

/**
 * Underscore JS _.isNumber(object)
 * Returns true if object is a number.
 */
console.log("%c Underscore Is Number", "background-color: yellow; color: black");
console.log(_.isNumber(1));

/**
 * Underscore JS _.isBoolean(object)
 * Returns true if object is a Boolean.
 */
console.log("%c Underscore Is Boolean", "background-color: yellow; color: black");
console.log(_.isBoolean(true));

/**
 * Underscore JS _.isDate(object)
 * Returns true if object is a Date.
 */
console.log("%c Underscore Is Date", "background-color: yellow; color: black");
console.log(_.isDate(new Date()));

/**
 * Underscore JS _.isRegExp(object)
 * Returns true if object is a Regular Expression.
 */
console.log("%c Underscore Is Reg Exp", "background-color: yellow; color: black");
console.log(_.isRegExp(new RegExp("\d")));

/**
 * Underscore JS _.isMap(object)
 * Returns true if object is a Map.
 */
console.log("%c Underscore Is Map", "background-color: yellow; color: black");
console.log(_.isMap(new Map()));

/**
 * Underscore JS _.isSet(object)
 * Returns true if object is a Set.
 */
console.log("%c Underscore Is Set", "background-color: yellow; color: black");
console.log(_.isSet(new Set()));

/**
 * Underscore JS _.isWeakSet(object)
 * Returns true if object is a Weak Set.
 */
console.log("%c Underscore Is Weak Set", "background-color: yellow; color: black");
console.log(_.isWeakSet(new WeakSet()));

/**
 * Underscore JS _.isNaN(object)
 * Returns true if object is a NaN.
 */
console.log("%c Underscore Is Nan", "background-color: yellow; color: black");
console.log(_.isNaN(NaN));

/**
 * Underscore JS _.isNull(object)
 * Returns true if object is a Null.
 */
console.log("%c Underscore Is Null", "background-color: yellow; color: black");
console.log(_.isNull(null));

/**
 * Underscore JS _.isUndefined(object)
 * Returns true if object is a Undefined.
 */
console.log("%c Underscore Is Undefined", "background-color: yellow; color: black");
console.log(_.isUndefined(undefined));

/**
 * :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 */

/**
 * Underscore JS Utilities
 */

/**
 *  Underscore JS _.noConflict()
 *  Give control of the _ variable back to its previous owner.
 *  Returns a reference to the Underscore object.
 */
console.log("%c Underscore No Conflict", "background-color: yellow; color: black");
var underscore = _.noConflict();
console.log(underscore.isUndefined(undefined));

/**
 *  Underscore JS _.identity(value)
 *  Returns the same value that is used as the argument. In math: f(x) = x. 
 * This function looks useless, but is used throughout Underscore as a default iteratee.
 */
console.log("%c Underscore Identity", "background-color: yellow; color: black");
function Coffee() {
    this.type = "Mocha";
}
Mocha = {
    type: "Mocha"
};
console.log(underscore.identity(Mocha));

/**
 *  Underscore JS _.constant()
 *  Creates a function that returns the same value that is used as the argument of
 */
console.log("%c Underscore Constant", "background-color: yellow; color: black");
var stooge = { name: 'moe' };
console.log(stooge === underscore.constant(stooge)());

/**
 *  Underscore JS _.noop()
 *  Returns undefined irrespective of the arguments passed to it. 
 *  Useful as the default for optional callback arguments.
 */
console.log("%c Underscore Noop", "background-color: yellow; color: black");
console.log(underscore.noop());

/**
 *  Underscore JS _.times(n, iteratee)
 *  Invokes the given iteratee function n times. 
 *  Each invocation of iteratee is called with an index argument. 
 *  Produces an array of the returned values.
 */
console.log("%c Underscore Times", "background-color: yellow; color: black");
console.log(underscore.times(3, underscore.noop));

/**
 *  Underscore JS _.times(n, iteratee)
 *  Returns a random integer between min and max, inclusive. 
 *  If you only pass one argument, 
 *  It will return a number between 0 and that number.
 */
console.log("%c Underscore Random", "background-color: yellow; color: black");
console.log(underscore.random(0, 5));

/**
 * Underscore JS _.mixin(object)
 * Allows you to extend Underscore with your own utility functions. 
 * Pass a hash of {name: function} definitions to have your functions 
 * Added to the Underscore object, as well as the OOP wrapper. 
 * Returns the Underscore object to facilitate chaining.
 */
console.log("%c Underscore Mixin", "background-color: yellow; color: black");
var _ = underscore.noConflict();
_.mixin({
    capitalize: function(string){
        return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
    }
});
console.log(_.capitalize("PHOTON"));

/**
 * Underscore JS _.iteratee(value)
 * Generates a callback that can be applied to each element in a collection. _.iteratee
 */
console.log("%c Underscore Iteratee", "background-color: yellow; color: black");
console.log(_.iteratee(function(n){
    return n*2;
}));

/**
 * Underscore JS _.uniqueId([prefix])
 * Generate a globally-unique id for client-side models or DOM elements that need one. 
 * If prefix is passed, the id will be appended to it.
 */
console.log("%c Underscore Unique Id", "background-color: yellow; color: black");
console.log(_.uniqueId('contact_'));

/**
 * Underscore JS _.escape(string)
 * Escapes a string for insertion into HTML, replacing &, <, >, ", `, and ' characters.
 */
console.log("%c Underscore Escape", "background-color: yellow; color: black");
console.log(_.escape('Tom, Dick & Harry'));

/**
 * Underscore JS _.unescape(string)
 * The opposite of escape, replaces &amp;, &lt;, &gt;, &quot;, &#96; and &#x27; with their unescaped counterparts.
 */
console.log("%c Underscore Escape", "background-color: yellow; color: black");
console.log(_.unescape('Tom, Dick &amp; Harry'));

/**
 * Underscore JS _.unescape(string)
 * The opposite of escape, replaces &amp;, &lt;, &gt;, &quot;, &#96; and &#x27; with their unescaped counterparts.
 */
console.log("%c Underscore Escape", "background-color: yellow; color: black");
console.log(_.unescape('Tom, Dick &amp; Harry'));

/**
 * Underscore JS _.result(object, property)
 * f the value of the named property is a function then invoke it with the object as context
 */
console.log("%c Underscore Result", "background-color: yellow; color: black");
var shirtSize = {
    "small": "sm",
    "medium": "md",
    "large": "lg",
    "extra-large": "xl",
};
console.log(_.result(shirtSize, 'large'));

/**
 * Underscore JS _.now()
 * Returns an integer timestamp for the current time, using the fastest method available in the runtime. 
 * Useful for implementing timing/animation functions.
 */
console.log("%c Underscore Now", "background-color: yellow; color: black");
console.log(_.now());

/**
 * Underscore JS _.template()
 * Compiles JavaScript templates into functions that can be evaluated for rendering. 
 * Useful for rendering complicated bits of HTML from JSON data sources.
 */
console.log("%c Underscore Template", "background-color: yellow; color: black");
_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};

var template = _.template("{{ name }}");
console.log(template(
    {
        name: "Photon Khan"
    }
));

