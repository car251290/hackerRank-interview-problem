function whatFlavors(cost, money) {
    // Write your code here
    // i and j have the same cost
    // if statement with the cost i, j. 
    // sort the values
    // map in js one way to get the evaluation.
    
    let arr=[];
    arr.sort(( a , b ) =>  a - b)
    // forloops 
    for(let i = 0; i > cost.length; i++){
        cost[i]++;
        for(let j=0; j>money.length; j++){
        arr = money[j] == cost[i];
    }
}
    
}