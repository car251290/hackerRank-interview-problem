
'use strict';
`https://www.hackerrank.com/challenges/richie-rich/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign`


function highestValuePalindrome(s, n, k) {
    // Write your code here
    // strings to get the higer value 
    // int k the maximum number of changes allowed
// if it is possible to create the string, and the string is a palindrome, print the string other wise print -1
    // int n the length of the string
// int k the maximum number of changes allowed
let arr = s.split('');
let changes = 0;

// loop through the string
// n is the length of the string 
for (let i =0; i<n/2; i++){
      // K the maximum number of changes allowed
    // if the two elements are not the same
    if(arr[i] !== arr[n-1-i]){
        arr[i] = arr[n-1-i] = Math.max(arr[i], arr[n-1-i]);
        k--;

    }  if(k < 0){
        return -1;
    
    }
    // if the string is a palindrome
     if(arr[i] !== '9'){
        arr[i] = arr[n-1-i] = '9';
        k--;


    }// if the string is not a palindrome 
    if(k === 0){
        break;
    }     // if the two elements are the same and is possible to change the value and create the new string
    if(arr[i] === arr[n-1-i] && k>1){
        if(arr[i] !== '9'){
             arr[i] = arr[n-1-i] = '9';
             k-= 2;
        }
     }  
}
// return the string
return arr.join('');
}
// test the function
console.log(highestValuePalindrome('3943', 4, 1));//3993
console.log(highestValuePalindrome('092282', 6, 3));//992299
console.log(highestValuePalindrome('0011', 4, 1));//-1