function minimumAbsoluteDifference(arr){
    let minDifference = Infinity;
    arr.sort((a, b) => a - b);
    for(let i = 0; i < arr.length - 1; i++){
        const difference = Math.abs(arr[i] - arr[i + 1]);
        if(difference < minDifference){
            minDifference = difference;
        }
    }
    return minDifference;
   
}