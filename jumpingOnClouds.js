
function jumpingOnClouds(c){
  //the minimum number of jumps 
  //The player must avoid  and . The game can be won with a minimum of  jumps:
  // firsth path takes 3 jumps while the second takes 4 and return 3
  // print the minimum number of jumps needed to win the game
  // if the array is = 0 is a safe move
  // if the array is = 1 is not a safe move

// it has an array [0,0,1,0,0,1,0]
// jump1 and jump2 to get track of the jumps into the array 
let jumps = 0;
let count = c.length - 1

for(let i =0; i < count; i++, jumps++){
    if(i + 2 < c.length && c[i+2] == 0){
        i++
    }
}
return jumps;
 
}

