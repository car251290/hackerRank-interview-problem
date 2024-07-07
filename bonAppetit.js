
'use strict';
`https://www.hackerrank.com/challenges/bon-appetit/problem`

function bonAppetit(bill,k,b){
//bonAppetit has the following parameter(s):
//bill: an array of integers representing the cost of each item ordered
//k: an integer representing the zero-based index of the item Anna doesn't eat
//b: the amount of money that Anna contributed to the bill
// The function should print Bon Appetit if the bill is fairly split.
// Otherwise, it should print the integer amount of money that Brian owes Anna.
// For example, if bill = [3, 10, 2, 9] k = 1, and b = 12, we know that Anna didn't eat item bill[1].
// The total cost of the shared items is 3 + 2 + 9 = 14 and, split in half, the cost per person is bactual = 7.
// Brian didn't overcharge Anna, so we print Bon Appetit on a new line.
let result = '';
bill.splice(k,1);
const shared = bill.reduce((a,b) => a + b)/2;
    if (shared == b) {
        result = ('Bon Appetit');
    } else {
        result = b - shared;
        //console.log(b - shared);
    }
    console.log(result);
}