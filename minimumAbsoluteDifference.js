function minimumAbsoluteDifference(arr) {
    let min = Number.POSITIVE_INFINITY

    arr.sort((a , b) => a - b)

    for(let i = 0; i< arr.lenght -1; i++){
        min = Math.min(min,arr[i+1] - arr[i])
    }
    return min
}