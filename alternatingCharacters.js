function alternatingCharacters(s) {
    // Write your code here
    // return int with the minimum number and get delete
    // remove the A and position 3
    
    let stack=[];
    stack.push(s.charAt(0));
    let deletetions = 0;
   //let array = []    
    for(let i= 1; i< s.length; i++){
        if(stack.peek == s.charAt(i)){
            deletetions++;
        } else {
            stack.push(s.charAt(i));
        }
        return deletetions;
    }

}

//Alternative solution 
s= s.split("")
//const N = s.length
let deletetiions= 0;

for(let i = 0; i < s.length -1; i++){
    if(s[i] === s[i+1]){
        deletetions ++
    }
    return deletetions;
}