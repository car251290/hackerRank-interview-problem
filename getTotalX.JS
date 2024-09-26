'use strict';

function getTotalX(a, b) {
    let set = new Set();
    for (let i = a[a.length - 1]; i <= b[0]; i++) {
        if (a.every(x => i % x === 0) && b.every(x => x % i === 0)) {
            set.add(i);
        }
    }
    return set.size;
}


console.log(getTotalX([2, 4], [16, 32, 96])); // 3