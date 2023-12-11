'use strict'

function maxSubarrays(arr){
    let currenSum = 0;
    let maxSum = -Infinity;

    for(let i=0; i< arr.length;i++){
        currenSum = Math.max(arr[i],currenSum + arr[i])

        maxSum = Math.max(currenSum,maxSum)
    }
    return maxSum;


//Solution 2
    let r = [arr[0]]
    if(!arr.length)
    return r;
r[r.length-1]< arr[0] && r.push(arr[0]);
return arr, r;

}
