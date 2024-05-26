'use strict'


function climbingLeaderboard(ranked, player) {
    // check the binary seach for this solution!!
    // Write your code here
    //https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=7-day-campaign
    //ranked[i]
    //player[j]
    let result = [];
    let x = 0;
    let y = 0;

   // let uniqueScore = [... new Set(ranked)];
    //let rankeded = ranked.length -1;


    for(let i =0; i<ranked.length; i++){
        player.push(ranked[i]);
        player.sort(() => (a,b) => {return b - a });
        x= 0;
        y= 0;
        for(let j = 0; j<player.length; j++){
            if(player[j] != player[j-1]){
                x++
            }
            if(ranked[i] == player[j]){
                y = j;
                break;
            } 
        }
        player.splice(y,1);
        result.push(x)   
    }
    
return result;
}


