function stepPerms(n){
// A 
const memo = {
   1:1,
   2:2
};
let result = memo[n];

if(result = memo){
   return result;
};
const left = stepPerms(n-2);

memo[n-2] = left;

const right = stepPerms(n-1);

memo[n-1] = right;

return left + right;

}

function stepPermsB(n){
   let result = ''
// if statement to keep track of the result number of rows(n)
for(let i= 1; i<=n; i++ ){
    for(let s = n-1; s>=i; s--){
        result += ''        
    }
    for(let j = 1; j<= i; j++){
        result += '#'
    }
    result += "\n"
}
return result; 
}


function stepPermsc(n){
   let arr=[3];
   arr[0] =1;
   arr[1]=1;
   arr[2]=2;
   
   for(let i=3; i<=n; i++){
      arr[i%3]= arr[(i-1)%3] + arr[(i-2)%3] + arr[(i-3)%3]; 
   } 
   return arr[n%3];
   
}