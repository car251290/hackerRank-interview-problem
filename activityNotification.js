
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
 let Range = 201;
 let notification = 0
 const getDoubleMedian = (count,d) => {
    let countPrefix = Array.from(count)
    for(let i =0; i< count.length; i++){
        countPrefix[i] += countPrefix[i-1] || 0
    }
    let a = 0;
    let b = 0;
// only need the middle elements , so skip build the array to avoid TLE
if(d % 2 === 0){
    let first = Math.floor(d/2);
    let second = first + 1
    for(let i = 0; i<Range; i++){
        if(first <= countPrefix[i]){
            a = i;
            break;
        }

    } 
    //forloop of the rage to get it.
    for(let i =0; i< Range; i++){
        if(second <= countPrefix[i]){
            b[i]
            break
        }
    }
} else {
    let first = Math.floor(d/2)+1
    for(let i=0; i<Range; i++){
        if(first <= countPrefix[i]){
            a= i;
            b=i;
            break
        }
    }
}
return a +b
 }
    // get the range with the notification
    const count = Array(Range).fill(0)
    for(let i = d; i < expenditure.length; i++) {
        const median = getDoubleMedian(count, d)
            if(expenditure[i] >= median){
                notification++
            }
            // update the count table
            count[expenditure[i]] ++
            count[expenditure[i - d]]--
        }
        return notification
    }