// Complete the jumpingOnClouds function below revisited.
//`https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign`
function jumpingOnClouds(c, k) {
 // get 100 count and has to deacrese the count 
 // arr if get into 1 it will be lost of energy by 2 and in 0 it will be 1
// % it the referes to the modolus in this case it serves to make the router circules if the character is at c[n-1]
// and jump 1 it will arrive at c[0]
// the gane ends when the player is back to 0
// EXAMPLE: C[0010]
// return the min count of the jumps
// count 
let count  = 0;
let jumping = c.length;
// energyLevel
let energyLevel = 100;
// the index or k = 0
let i;
while(i !== 0 && energyLevel >= 0){
   count === 0 && (i = 0);
   i = (i + k) % jumping;
   energyLevel = c[i] > 0 ? energyLevel - 3 : energyLevel - 1;
   count ++;
}

return energyLevel;
}