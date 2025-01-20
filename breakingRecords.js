function breakingRecords(scores){
    let min = scores[0];
    let max = scores[0];
    let minCount  = 0;
    let maxCount = 0;
for (let i = 0; i<scores.length; i ++){
    if(scores[i]>max){
        maxCount++;
        max = scores[i];
    } else if(scores[i] < min){
        minCount++;
        min = scores[i];
    } else {
        continue;
    }
}
return [maxCount, minCount];
}