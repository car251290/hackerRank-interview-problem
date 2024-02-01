let numSwaps = 0

function merge (leftArr, rightArr, arr) {
  const leftSize = leftArr.length
  const rightSize = rightArr.length
  let i = 0, left = 0, right = 0
  
  while (left < leftSize && right < rightSize) {
    if (leftArr[left] <= rightArr[right]) {
      arr[i] = leftArr[left]
      i++
      left++
    } else {
      arr[i] = rightArr[right]
      i++
      right++
      numSwaps++
      numSwaps += leftSize - (left + 1)
    }
  }
  
  while (left < leftSize) {
    arr[i] = leftArr[left]
      i++
      left++
  }
  
  while (right < rightSize) {
    arr[i] = rightArr[right]
      i++
      right++
  }
}

function mergeSort (arr) {
  const left = arr.length
  if(left <= 1) return
  
  let mid = Math.floor(left/2)
  
  let leftArr = arr.slice(0, mid)
  let rightArr = arr.slice(mid)
  
  mergeSort(leftArr)
  mergeSort(rightArr)
  merge(leftArr, rightArr, arr)
}
function countInversions(arr) {
    // Write your code here
 numSwaps = 0;
mergeSort(arr);
return numSwaps

}

