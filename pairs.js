function pairs (k,arr) {
    `https://www.hackerrank.com/challenges/pairs/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search`
let  pairs = {};
let count = 0;

for (let i = 0; i < arr.length; i++) {
    pairs[arr[i]] = true;
    if (pairs[arr[i] - k]) {
        count++;
    }
    if (pairs[arr[i] + k]) {
        count++;
    }
    if (k === 0) {
        return count / 2;
    } else {
        return count;
    }
}
return count; 




}
// test cases 
console.log(pairs(2, [1, 5, 3, 4, 2])); //3
console.log(pairs(1, [1, 2, 3, 4])); //3