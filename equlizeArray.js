
'use strict';


function equilizeArray(arr) {
    // write your code here
    //https://www.hackerrank.com/challenges/equality-in-a-array/problem

// get the min number of deletation possible in the arr
// given arr=[1,2,2,3,4]
// min of deletation are 2

arr = [1,2,2,3,4];
let obj = {};
let count = 1;

// Count occurrences of each element in the array
for (let i = 0; i < arr.length; i++) {
    let index = arr[i];
    obj[index] = obj[index] + 1 || 1;
}

// Find the maximum occurrence count
let key = Object.keys(obj);
for(let i = 0; i< key.length; i++){
    let num = key[i]
    let currentCount = obj[num];
    if(currentCount > count){
        count = currentCount
    }

}
return arr.length - count;

}