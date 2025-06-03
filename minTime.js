
'use strict';
function minTime(machines,goal) {
let left = 1;
let right = Math.max(...machines) * goal;
let result = right;
while(left <= right){
    const mid = Math.floor((left + right) /2);
    let total = machines.reduce((acc, machine) => {
        return acc + Math.floor(mid / machine);
    })
    if(total >= goal){
        result = mid;
        right = mid -1;

    }
    else {
        left = mid + 1;
    }

}
return result;  
    
}