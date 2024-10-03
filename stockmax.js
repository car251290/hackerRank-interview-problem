function stockmax(prices) {
    let max = 0;
    let profit = 0;
    // iterate from the end of the array 
    // the last element is the max
    for (let i = prices.length - 1; i >= 0; i--) {
        if (prices[i] > max) {
        max = prices[i];
        }
        profit += max - prices[i];
    }
    return profit;

}
console.log(stockmax([1,2,100,3,4])); // 197


