'use strict';

`https://www.hackerrank.com/challenges/two-characters/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign`
function alrternative(s){
s = 'abaacdabd';
let max = 0;
//let unique = [...new Set(s)];
let unique = s.split('').filter((item, i, arr) => arr.indexOf(item) === i);
//console.log(unique);    
    for(let i = 0; i < unique.length; i++){
        unique.forEach((item,i,arr)=> console.log(item,i, arr));
        for(let j = i + 1; j < unique.length; j++){
            let filtered = s.split('').filter((item) => item === unique[i] || item === unique[j]);
            if(filtered.every((item, i, arr) => item === arr[0])){
                max = Math.max(max, filtered.length);
                
            }
            
        }
    }
   return max;
}
console.log(alrternative('aeiou'));
console.log(alrternative('hello'));
console.log(alrternative('world'));
console.log(alrternative('javascript'));
console.log(alrternative('beautiful'));
