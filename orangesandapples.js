
function countApplesAndOranges (s,t,a,b,apples,oranges){
    let Applescount = 0;
    let Orangescount = 0;

    for(let i=0; i< apples.length; i++){
        if(a + apple[i] >= s && a + apples[i] <= t) {
            Applescount++;
        }

    }
    for(let j =0; j< oranges.length;  j++){
        if(b + oranges[j] <= t && b + oranges[j] >= s){
            Orangescount++;
        }
    }
}

console.log(countApples);
console.log(countOranges);

