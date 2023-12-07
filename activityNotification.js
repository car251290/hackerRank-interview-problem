
function activityNotifications(expenditure,d){
    // return the median steps
    //sort the array in ascending order
    arr.sort(( a, b) => a - b);
    //calculate the index
    let middleIndex = Math.floor(arr.length/2);


    //determine if the array length is even or odd
    if(arr.length % 2 === 0){
        return (arr[middleIndex-1]+ arr[middleIndex]/2);
    // return the median based on array characteristc
    } else {
        return arr[middleIndex];
    }



    //days 3 
    
}