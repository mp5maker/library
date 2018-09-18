/**
 * Problem Definition: 
 * New Object containing occupation & salary > 18000
 * Duplicate Occupation and Salary Not allowed
 */
var employee = [
    {
        name: "Samith Zaman",
        salary: 35000,
        occupation: "misc"
    },
    {
        name: "Photon Khan",
        salary: 23000,
        occupation: "it"
    },
    {
        name: "Ashiqur Rahman",
        salary: 17000,
        occupation: "business"
    },
    {
        name: "Amanur Rahman",
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

console.log(Counter());

/**
 * Underscore JS
 * Instead of using two each we can use _.find(..., function())
 * You cannot easily break out from the for each loop !
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

console.log(UnderscoreCounter());