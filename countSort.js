'use strict';
`https://www.hackerrank.com/challenges/countingsort4/problem`
function countSort(arr) {
    arr = [];
    let count  = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > count){
            
            count = arr[i];
        } else {
            count += arr[i];
        }
        return count;
    }
    sort((a, b) => a - b);
}
// test cases 
console.log(countSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

