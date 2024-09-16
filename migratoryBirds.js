'use strict';
// function migratoryBirds 
// complete the migratiory birds 
function migratoryBirds(arr){
   let bird = {};
   let max =0;
   let maxBird = 0;

   for(let i = 0; i<arr.length; i++){
    if(bird[arr[i]]){
        bird[arr[i]]++;
    } else {
        bird[arr[i]] =1;
    }

   }
   for(let key in bird){
    if(bird[key ]> max){
        max = bird[key];
        maxBird = key;
    }
   }
   return maxBird;
}