'use strict';

// Complete the hourglassSum function below.
function hourglassSum(arr: number[][]): number {
	// Placeholder return value
    let maxSum = -63;
    let currentSum = 0;
    // Loop through the array
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr[i].length - 2; j++) {
            // Calculate the sum of the current hourglass
            currentSum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] 
            + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            // Update the maxSum if the currentSum is greater
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
    }
    return maxSum;
	
}