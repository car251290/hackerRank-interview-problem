
`https://www.hackerrank.com/challenges/two-strings/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign`
'use strict'
function twoString(s1,s2){
    s1 = s1.split('').match(/[a-z]/g);
    s2 = s2.split('').match(/[a-z]/g);
    let result1 =  "YES";
    let result2 ="NO";

    for(let i= 0; i< s1.length; i++){
        if(s1.includes(s2[i])){
            return result1;
        }
        
        for(let j=0; j< s2.lenght; j++){
            if(s2.includes(s1[i])){
                return result1;
            }
        }
        return result2
    }

  
}
//console.log(twoString('hello', 'world'));
console.log(twoString('hello', 'world'));
