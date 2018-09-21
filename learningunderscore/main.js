/**
 * Underscore JS Basics
 * Starting with Collections
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
 * Underscore JS Basics
 * Array
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
