
`https://www.hackerrank.com/challenges/two-strings/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign`
'use strict'
function twoString(s1,s2){
  let unique = [...new Set(s1)];
  let unique2 = [...new Set(s2)];
 

    let result1 =  "YES";
    let result2 ="NO";

    for(let i= 0; i< unique.length; i++){
        if(s1.includes(unique2[i])){
            return result1;
        }
        
        for(let j = 0; j< unique2.lenght; j++){
            if(s2.includes(unique[i])){
                return result1;
            }
        }
        return result2
    }  
}

console.log(twoString('hello', 'world'));
console.log(twoString('hi', 'world'));

