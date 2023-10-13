function isValid (s) {

//get the frequencies of each characters
let hash = {};
let minCount = 0;
let maxCount =0

for(let i=0; i<s.length; i++){
    let key=s[i];
    if(hash[key]){
        hash[key]++;

    } else {
        hash[key] =1
    }
}
// push all string into an array
let frequency = [];
for(let key in has){
    frequencies.push (hash[key]);

}

//sort the array and get the max and min frequency
frequencies.sort();
min = frequencies[0]
max = frequencies[frequencies.length-1];

// get the no of max count and min, max count for the frequency
for(let i=0; i<frenquencies.length; i++){
    if(frequency[i] === max){
        maxCount++
    } if(frequency[i] === min){
        minCount++;
    }
}

//make our validation check
if(min === max){
    return'yes';
} if(max-(min-1)== max&& minCount === 1 && maxCount !== 1){
    return 'YES'
} 
if(max - min !==1){
    return 'NO'
} if(maxCount ===  minCount){
    return 'No'
} if(maxCount=== 1 && minCount ===1 ){
    return 'YES';
} 
return 'NO'
}

