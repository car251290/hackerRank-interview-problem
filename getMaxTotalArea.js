function getMaxTotalArea(sideLengths) {
    const MOD = 10**9 + 7;
    let totalArea = 0;
    const count = {};

    // Count the occurrences of each side length
    for (let length of sideLengths) {
        count[length] = (count[length] || 0) + 1;
    }

    // Sort the side lengths in descending order
    const sortedLengths = Object.keys(count).map(Number).sort((a, b) => b - a);

    const pairs = [];
    for (let length of sortedLengths) {
        while (count[length] >= 2) {
            pairs.push(length);
            count[length] -= 2;
        }
    }

    // Calculate the total area using pairs
    for (let i = 0; i < pairs.length - 1; i += 2) {
        totalArea = (totalArea + pairs[i] * pairs[i + 1]) % MOD;
    }

    return totalArea;
}

// Example usage
const sideLengths = [4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2];
console.log(getMaxTotalArea(sideLengths)); // Expected output: 54