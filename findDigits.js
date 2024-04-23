'use strict';

function findDigits(n) {
    // Write your code here
     let divition = "";
     divition = n.toString();
     let count = 0;
    for (let i = 0; i < divition.length; i++) {
        if (divition[i] != 0 && n % divition[i] === 0) {
            count += 1;
        }
    }
    return count;
}
