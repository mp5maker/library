var employee = [
    {
        name: "Samith Zaman",
        salary: 35000
    },
    {
        name: "Photon Khan",
        salary: 23000
    },
    {
        name: "Ashiqur Rahman",
        salary: 17000
    },
    {
        name: "Amanur Rahman",
        salary: 50000
    },
];

/**
 * Vanilla JavaScript to find out 
 * @param {*} limit 
 */
const richCounter = function(limit) {
    var counter = 0;
    employee.forEach(function(value, key) {
        if(value.salary > limit) {
            counter++;
        }
    });
    return counter;
}

console.log(richCounter(12000));