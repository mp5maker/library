(function() {
    "use strict";

    const giveStartingAndEndingIndex = (value, numbers) =>
        [numbers.indexOf(parseInt(value)), numbers.lastIndexOf(parseInt(value))];

    // Test Cases
    let testArray = [5, 7, 7, 8, 8, 10];
    console.log(giveStartingAndEndingIndex(8, testArray));

    // Test Cases
    let testArrayTwo = [5, 7, 7, 8, 8, 10];
    console.log(giveStartingAndEndingIndex(6, testArrayTwo))
})();
