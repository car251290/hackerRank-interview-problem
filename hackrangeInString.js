function hackrangeInString(s){
    // condition to get the strings duplicates
    // if the string containes hackerange print yes otherwise print no
    // check for all the strings in the array for the word hackrange

    let hackduplicates=[];
    //let findStr = arr => arr.filter((item,index)=> arr.indexOf(item) !== index);
    for(let i = 0; i < s; i++ ){
        for(let j = i + 1; j< s; j++){
            if(s[i] == s[j] && !hackduplicates.includes(s[i])){
                hackduplicates(s[i]);
            }
        }
    }
    return hackduplicates;
}

// const usege
const hackrange = ["haackraange"];
const hackduplicatesstrings = hackduplicates(hackrange);
console.log('duplicates strings', hackduplicatesstrings);


// SOLUTION 2
function hackerrankInString(s) {
    // Write your code here
 let hackString = "hackerrank".split("");
 let input = s.split("");
 let j =0;
 if(input.length < hackString.length){
     return "NO";
 } 
 for(let i = 0; i < input.length; i++){
     if(input[i] === hackString[j]){
         j++
     }
 }
 return j === hackString.length ? "YES" : "NO"
 
}

