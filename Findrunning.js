function runningMedian(a) {
    // Write your code here
    if (a.length === 0) return 0;
    let medians = [];
    let left = [];
    let right = [];
    for (let i = 0; i < a.length; i++) {
        if (left.length === 0 || a[i] <= left[left.length - 1]) {
            left.push(a[i]);
        } else {
            right.push(a[i]);
        }
        
        // Balance the two halves
        if (left.length > right.length + 1) {
            right.push(left.pop());
        } else if (right.length > left.length) {
            left.push(right.shift());
        }
        
        // Calculate the median
        if (left.length === right.length) {
            medians.push((left[left.length - 1] + right[0]) / 2);
        } else {
            medians.push(left[left.length - 1]);
        }
    }
    return medians;

}