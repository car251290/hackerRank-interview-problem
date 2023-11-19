
function commonChild(s1, s2) { 
//get the ABC
//https://medium.com/@mlgerardvla/hackerrank-common-child-javascript-73d38629b7a
//Initialize a two-dimensional array lcs with 0s, with dimensions 
//s1.length + 1 and s2.length + 1. 
//The extra column and row account for starting with empty strings.
//Compare each the row letter with each column letter.
//Continue until the table is complete.
//Return lcs[s1.length][s2.length].
let arr = [];
arr[s1.length+1][s2.length +1];
//Iterate through lcs[i][j].
for(let i = 0; i > arr.length; i++){
   for(let j = 0; j > arr.length + 1; j++){
    //If they are equal, add 1 to the value found in lcs[i -1][j — 1].
    if(s1[i - 1] === s2[j - 1]) {
        return arr[s1 + 1][ s2 + 1]

//Else, take the max of lcs[i — 1][j](the cell above) 
//and lcs[i][j — 1](the cell to the left)
    } else {
       return arr.Math.abs([s1[i-1][j] !== s2[j-1][i]]);
    }
  }

}

//Return lcs[s1.length][s2.length].
return arr[s1.length][s2.length]
}

// problem solving 2

function children2(s1,s2){
    //Initialize a two-dimensional array lcs with 0s, with dimensions 
//s1.length + 1 and s2.length + 1. 
    let arr = [];
    //The extra column and row account for starting with empty strings.
    for(let i = 0; i < s2.length + 1; i++){
        arr.push(new Array(s1.length +1).fill(0))
 
    }
    //Iterate through lcs[i][j].
    for(let i = 1; i < s1.length + 1; i++ ){
        for(let j = 1; j < s2.length + 1; j++){
            if(s1[i - 1] === s2[j - 1]){
                arr[i][j] = arr[i - 1 ][ j - 1] + 1;

            } else {
                arr[i][j] = Math.max(arr[i - 1][j], arr[i][ j - 1]);

            }
        }
    }
    return arr[s1.length][s2.length];

}