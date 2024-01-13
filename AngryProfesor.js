'use strict'
function angryProfesor (k,a) {
    // k is the Threshold number of students
    // a the arrival times of the n students
    // the first line has two spaes-separated integers, n and k the number of students size of aand the cancellation threshold
    // the second line contains n space-separated integers a-2 that describe the arrival times for each student
 let student = 0;

for( let i = 0; i < a.length; i++){
    
        if(a[i]<= 0){
            student++;
            console.log("the students are on time")
        } 
    }
    if(student < k){
        console.log("yes");
    } else {
        console.log("No")
    }
     
}


//alternative solucion 
function angryprofesor(k,a){
    let count = 0;
    for(let i =0; i< a.length; i++){
        if(a[i] <=0){
            count <= 1;
        } 
    }
    return count >= k ? "NO" : "YES"
}