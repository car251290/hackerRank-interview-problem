'use strict';
`https://www.hackerrank.com/challenges/two-robots/problem`
function twoRobots(m,queries) {
    let result = [];
    for (let i = 0; i < queries.length; i++) {
        let [n, m] = queries[i];
        let dp = Array.from({length: n + 1}, () => Array.from({length: n + 1}, () => 0));
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + Math.abs(m - i),
                    dp[i][j - 1] + Math.abs(i - j)
                );
            }
        }
        result.push(dp[n][n]);
    }
    return result;


}
console.log(twoRobots(5, [[2, 1], [3, 2], [4, 3]])); // [1, 3, 6]
// output 0,2,0,1
