(function() {
    "use strict";

    const giveStartingAndEndingIndex = (value, numbers) => {
        numbers.sort((a, b) => a - b);
        return [numbers.indexOf(parseInt(value)), numbers.lastIndexOf(parseInt(value))];
    }

    // Test Cases
    let testArray = [5, 7, 7, 8, 8, 10];
    console.log("TCL: giveStartingAndEndingIndex(8, testArray)", giveStartingAndEndingIndex(8, testArray))
    // Test Cases
    let testArrayTwo = [5, 7, 7, 8, 8, 10];
    console.log("TCL: giveStartingAndEndingIndex(6, testArrayTwo)", giveStartingAndEndingIndex(6, testArrayTwo))
})();
