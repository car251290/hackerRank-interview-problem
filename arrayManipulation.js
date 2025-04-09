function arrayManipulation(n,queries){
    let arr = new Array(n).fill(0);
    for (let i = 0; i < queries.length; i++) {
        let [a, b, k] = queries[i];
        arr[a - 1] += k;
        if (b < n) {
            arr[b] -= k;
        }
    }

    let max = 0;
    let current = 0;
    for (let i = 0; i < n; i++) {
        current += arr[i];
        if (current > max) {
            max = current;
        }
    }
    return max;
}