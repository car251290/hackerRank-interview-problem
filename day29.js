'use strict';

function bitiwiseAnd(N,K){
    // n IS THE MAXIMUM NUMBER OF ELEMENTS IN THE ARRAY
    // K the milit of the result inclusive

    // A&B IS THE LIMIT of the maximum value

for(let i = 1; i <=N; i++){
    for(let j =  i+1; j<= N; j++){
        let bitwiseAnd = i & j;
        if(bitwiseAnd < K){
            console.log(bitwiseAnd);
        }
        console.log(bitwiseAnd);

    }
}






}