function countSwaps(a) {
    // This function counts the number of swaps made during a bubble sort of the array `a`.
    let swaps = 0;
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = 0; j < a.length - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                swaps++;
            }
        }
    }
    return swaps;
}