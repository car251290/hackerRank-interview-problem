'use strict';

`https://www.hackerrank.com/challenges/two-characters/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign`
function alrternative(s){
s = 'abaacdabd';
let max = 0;
//let unique = [...new Set(s)];
let unique = s.split('').filter((item, i, ar) => ar.indexOf(item) === i);
console.log(unique);
    s = s.replace(/a/g, '4');
    for(let i=0; i< s.length; i++){
        if(s[i] ==='e'){
            s = s.replace('e', '3');
        } if(s[i] === 'i'){
            s = s.replace('i','1');

        } if(s[i] === 'o'){
            s = s.replace('o', '0');
        } if(s[i] === 'u'){
            s = s.replace('u', '2');
        }  if (s[i] ==='b'){
            s = s.replace('b', '5');
        }

    }
    return s;
}
console.log(alrternative('aeiou'));
console.log(alrternative('hello'));
console.log(alrternative('world'));
console.log(alrternative('javascript'));
console.log(alrternative('beautiful'));