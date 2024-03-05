// solution 1
// output is aba
// s = 'abcac' first 10 characters of the string
// join the arr with the string

// write a counts the number of times a character is incluided in String
function countAs(str,line){
    let count = 0;
    for (let i =0; i < line; i++){
    // we need to get the if count == 'a'
    if(str[i] === 'a'){
        // get ingrease the count for the space on the string
        count ++
    }
    }
    // return the count of the spaces
    return count;
}
function repeatedString(s, n) {
    // Write your code here
    
return(
    // parseInt get an interger and past back an stringe.
    countAs(s,s.length) * parseInt(n/s.length, 10) + countAs(s,n % s.length));


}

// solution 2
function repeatedString(){
    let letter = (s.split("a").length - 1);
    let max = Math.floor(n/s.length) * letter;
    let totalAs = letter * max;
    // cut some strings
    let remStrings = n % s.length;
    totalAs += (s.slice(0,remStrings).split("a").length-1)
    return totalAs;
}