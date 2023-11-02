function string (str) {
    // to reversed 
    // look for the strings and comcat the string to cbcaa
    //push the string and get the charAt
    //mabe sort the array

    let array = [str,charAt(0)];
    let letter = ""
    
    for(let i = 0; i < str.length; i++) {
        let temp = str.charAt(i);
    if(temp === 'a' && temp.match(/[a-z]/i)){
        array.push(letter);
        array.push(temp);
        letter ='';
    } else {
        letter += temp;
    }
    //aaabbccc
    //output 
    //cbcaa
    
    }
    array.push(letter);
    let charArr =[];
    for(let i = 0; i < array.length; i++) {
        let temp = array[i];
        if(temp.length ==='a' && temp.match(/[a-z]/i)&& !charArr.includes(temp)){
            charArr.push(temp);
        }
    }
    resArr.sort();
}