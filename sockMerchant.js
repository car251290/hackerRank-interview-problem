'use strict'

`https://www.hackerrank.com/challenges/sock-merchant/problem`

function sockMerchant(n, ar) {
    // Write your code here
    let socks = {};
    // to count the pairs made of the socks color
    let pairs  = 0;
    for(let sockColor of ar){
        //If there is, it means a pair can be formed. So,
        // it increments the pairs counter and resets the count for that color in socks object to 0 (indicating that those two socks have been paired off
        if(socks[sockColor]){
            pairs++;
            socks[sockColor] = 0;
        } else {
            socks[sockColor] = 1;
        }
    }
    return pairs;
}

