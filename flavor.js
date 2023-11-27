function whatFlavors(cost, money) {

        // i and j have the same cost
    // if statement with the cost i, j. 
    // sort the values
    // map in js one way to get the evaluation.
    
   // let arr=[];
   // arr.sort(( a , b ) =>  a - b)
    // forloops 
    //for(let i = 0; i > cost.length; i++){
     //   cost[i]++;
      //  for(let j=0; j > money.length; j++){
       // m = money[j] == cost[i];
   // }
//}
    // Write your code here
    // hashMap
    let flavor = {}
    // forloop of the cost 
    for(let i = 0; i < cost.length; i++){
        if(flavor[cost[i]]){
            return flavor[cost[i]].push(i +1)
        } else {
            return flavor[cost[i]] = [i + 1]
        }

    }
    for(let j of cost){
        if(flavor[money - j ]){
            if(flavor[j].length > 1){
                console.log(flavor[j][0], flavor[j][1])
                return
            }
        } else {
            console.log(flavor[j][0], flavor[money-j][0])
            return
    }
   }    
}
