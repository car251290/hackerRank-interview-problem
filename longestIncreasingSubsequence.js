'use strict';

`https://www.hackerrank.com/challenges/longest-increasing-subsequent/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign`
function longestIncreasingSubsequence(arr) {
    let dp = new Array(arr.length).fill(1);
    let max = 1;
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
            max = Math.max(max, dp[i]);
        }
        }
    }
    return max;
    


}