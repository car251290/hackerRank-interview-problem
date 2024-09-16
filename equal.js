'use strict';

function equal(arr) {
    function minOperations(difference) {
        // get count 
        let count = 0;
        // increment count by the number of 5s in the difference
        count += Math.floor(difference / 5);
        // get the difference after removing the 5s
        difference %= 5;
        // increment count by the number of 2s in the difference`
        count += Math.floor(difference / 2);
        // get the difference after removing the 2s
        difference %= 2;
        // increment count by the number of 1s in the difference
        count += difference;
        // return count
        return count;
    }
    // get the minimum number of chocolates
    let minChocolates = Math.min(...arr);
    // get the minimum number of operations to make all chocolates equal to the minimum number of chocolates 
    //the inifinity is used to get the minimum number of operations
    let minOps = Infinity;
// loop through the possible bases
    for (let base = 0; base < 5; base++) {
        // get the current number of operations
        let currentOps = 0;
        // loop through the chocolates
        for (let chocolates of arr) {
            // get the difference between the current chocolate and the minimum number of chocolates
            currentOps += minOperations(chocolates - (minChocolates - base));
        }
        // get the minimum number of operations
        minOps = Math.min(minOps, currentOps);
    }
    // return the minimum number of operations

    return minOps;

}
console.log(equal([1, 1, 1, 1, 1]))