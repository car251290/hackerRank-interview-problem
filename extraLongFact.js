
'use strict'

function extraLongFactorials(n) {
    // Write your code here
    `https://www.hackerrank.com/challenges/extra-long-factorials/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign`

// calculate the factorial of a given interger
// solve the change using BigIntegers
// const
//const Longfact = new BigInt(String.ValueOf(n))
//let BigIntresult = new BigInt(String.ValueOf(1))

//for(let i = 1; i <= t; i++ ){
  //  let result = result.multiply(new BigInt(String.ValueOf(n)));

//}
//return result;
let Longfact  = BigInt(1);
for(let i = 1; i <= n; ++i) Longfact *= BigInt(i);
console.log(Longfact.toString())

}


