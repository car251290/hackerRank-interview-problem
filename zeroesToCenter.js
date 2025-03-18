
'use strict';

function zeroesToCenter(arr, num) {
    const nonNumElements = [];
    const numElements = [];   
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            numElements.push(arr[i]);
        } else {
            nonNumElements.push(arr[i]);
        }
    }
    const centerIndex = Math.floor(nonNumElements.length / 2);

    const result = [
        ...nonNumElements.slice(0, centerIndex),
        ...numElements,
        ...nonNumElements.slice(centerIndex)
    ];

    return result;
}