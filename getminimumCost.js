function getMinimumCost(k, c) {
let totalCost = 0;
let max = 0;
c.sort((a,b) => b-a);

for(let i =0; i<c.length; i++){
    if(i % k === 0 ){
        max ++;
    }
    totalCost += c[i] * max;

}
return totalCost;

}