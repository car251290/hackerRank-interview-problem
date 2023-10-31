
function maximumToys(prices,k) {
    //Items they can buy
    let sort = ((a,b) => a-b);
    let count = 0;
    sort.forEach(price =>{
        if( k > price) {
            k = k - prices
            count++
        }
    } )
    return count
}

function markandtoys (k,prices) {
   // Write your code here
     // sort the prices of the array from low to higher
    prices.sort(( a, b) => a - b);
    // to save the number of toys 
      let sum = 0;
    // to go for each element of the prices of the array 
    const prefixSums = prices.map((price) => {
        sum += price
        return sum
    });
    let numberofToys

    for(let i = 0; i < prefixSums.length; i++){

        if( prefixSums[i] > k){
            numberofToys = i
            break
        }
    }
    return numberofToys;

}
