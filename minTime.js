`https://www.hackerrank.com/challenges/minimum-time-required/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search`
'use strict'


function minTime(machines,goal){

let minDays = 0;
let maxDays = Math.max(...machines) * goal;
while(minDays < maxDays){
    let midDays = Math.floor((minDays + maxDays)/2);

    let totalItems = 0;

    for(let machine of machines){
        totalItems += Math.floor(midDays/machine);

    }
    if(totalItems >= goal){
        maxDays = minDays + 1;
    } else {
        maxDays = midDays
    }

}
return minDays;


}