/**
 * Problem Definition: 
 * New Object containing occupation & salary > 18000
 * Duplicate Occupation not allowed
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
 * Vanilla JavaScript to find out 
 * @param {*} limit 
 */
const Counter = function() {
    var salaryLimit = 18000;
    var occupationTypes = [];
    /**
     * Checking in foreach
     */
    employee.forEach(function(person) {
        function duplicate() {
            var flag = false;
            occupationTypes.forEach(function(occupation) {
                if(occupation.occupation === person.occupation) {
                    flag = true;
                }
            })
            return flag;
        }
        if(!duplicate() && person.salary > salaryLimit) {
            occupationTypes.push({
                occupation: person.occupation,
                salary: person.salary
            });
        }
    });
    return occupationTypes;
}

console.log("Vanilla Javascript");
console.log(Counter());

/**
 * Underscore JS _.find(list, predicate)
 * Looks through each value in the list, 
 * Returning the first one that passes a truth test (predicate)
 * Undefined if no value passes the test.
 */
var UnderscoreCounter = function () {
    var salaryLimit = 18000;
    var occupationTypes = [];
    employee.forEach(function (person) {
        var duplicate = _.find(occupationTypes,
            function (occupation) {
                return occupation.occupation === person.occupation;
            }
            );
            if(!duplicate && person.salary > salaryLimit) {
                occupationTypes.push({
                    occupation: person.occupation,
                    salary: person.salary
                });
            } 
        })
        return occupationTypes;
    };
    
    console.log("Underscore Find");
    console.log(UnderscoreCounter());
    
    /**
     * Underscore JS _.countBy(list, iterate)
     * Sorts a list into groups and returns a count for the number of objects in each group.
     */
    var UnderscoreCountBy = _.countBy(employee, function(person) {
        return person.occupation;
    });
    
console.log("Underscore Count By");
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

console.log("Underscore Pairs");
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

console.log("Underscore Every");
var UnderscoreEvery = _.every(players, function(player) {return player.name;});
console.log(UnderscoreEvery);

var UnderscoreEveryTwo = _.every(player, function(p) {return p.name;});
console.log(UnderscoreEveryTwo);

/**
 * Underscore JS _.some(list, predicate)
 * Returns true if any of the values in the list pass the predicate truth test.
 */

console.log("Underscore Some");
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
console.log("Underscore Where");
console.log(UnderscoreWhere);

/**
 * Underscore JS _.size(list)
 */
var UnderscoreSize = _.size(players);
console.log("Underscore Size");
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
console.log("Underscore Reduce");
console.log(UnderscoreReduce);

/**
 * Underscore JS _.each(list, iteratee)
 * Iterates over a list of elements, yielding each in turn to an iteratee function.
 */
console.log("Underscore Each");
 _.each(players, 
    function(value, key) {
        console.log(value);     
    }
)
