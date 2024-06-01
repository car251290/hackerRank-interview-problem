// The function PalindromeCreator attempts to transform a given string into a palindrome
// by removing at most two characters. Here is a step-by-step explanation of what the code does:
//This function removes all instances of a specified character from the string str.
//Parameters:
//str: the string to be modified.
//char: a string containing unique characters.
//index: the index of the character to be removed from char.
//It iterates through str, and if the character at the current position is not char[index], it pushes the character to newStr.
//The result is a new string without char[index].

function PalindromeCreator(str) {
    //function to remove a character from a string
    function removeChar(str, char, index){
        //remove all instances of char[index] from str
        let newStr = "";
        for(let i = 0; i < str.length; i++){
        // if the character at index i is not char[index] add it to the new string
        if(str[i] !== char[index]) newStr += str[i];
        }
        // return the new string
        return newStr;
    }

    // check if the string is already a palindrome
    // use of split to convert the string into an array of characters
    //use of reverse to reverse the array
    // use of join to convert the array back into a string

    if(str === str.split("").reverse().join("")) return "palindrome";
    // check if the string can be made a palindrome by removing one character
    for(let i = 0; i < str.length; i++){
        const newStr = removeChar(str, str, i);
        if(newStr === newStr.split("").reverse().join("")) return "remove one";
    }
    // check if the string can be made a palindrome by removing two characters
    // use of nested loops to iterate thorug the string and remove two characters
    // if the new string is a palindrome return "remove two"

    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < str.length; j++){
        if(i !== j){
            // remove two characters from the string
            // remove the character at  index i and j from the string
            const newStr = removeChar(removeChar(str, str, i), str, j);
            // if the new string is a palindrome return "remove two"
            if(newStr === newStr.split("").reverse().join("")) return "remove two";
        }
        }
    }
    // if the string can't be made a palindrome by removing one or two characters
    return "not possible";
}  


console.log(PalindromeCreator("racecar")); // "palindrome"
console.log(PalindromeCreator("raceecar")); // "remove one"