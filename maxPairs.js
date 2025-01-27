function maxPairs(skillLevel,minDiff) {
    let count  = 0;
    let sorted = skillLevel.sort((a,b)=> a-b);
    let i = 0;
    for(i; i<sorted.length-1; i++){
        if(sorted[i + 1]- sorted[i] >= minDiff){
            count++;
            i++;
        }
        for(let j = i+1; j<sorted.length; j++){
            if(sorted[j]-sorted[i] >= minDiff){
                count++;
                i = j;
                break;
            }
        }
    }
    return count;
}