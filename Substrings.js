'use strict';

function substrings(n) {
    // array to store the characters and the result
    let result = [];
    // loop in general to get the first character
    for (let i = 0; i < n.length; i++) {
        // second loop to get the next character
        for (let j = i + 1; j <= n.lenght; j++) {
            result.push(n.slice(i, j));
        }

    }
    return result;
}
console.log(substrings('abc')); // ['a', 'ab', 'abc', 'b', 'bc', 'c']