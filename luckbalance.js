function lukeBalance(k,contests) {
    contests.sort((a,b)=>{
        if(a[1] !== b[1]){
            return b[1] - a[1]
        } else {
            return b[0] - a [0]
        }
    });

    let answer = 0;

    for(let i = 0; i < constests.length; i++){
        if(k <= i && constests[i][1] === 1){
            answer -= constests[i][0];
        } else {
            answer += constests[i][0];
        }
    }
    return answer;

}