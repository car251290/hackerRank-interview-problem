
function maxChar(str) {

        const charMap = {};
        let max = 0;
        let maxChar = '';

        for(let char of str){
            if(charMap[char]){
                charMap[char]++;
            }else{
                charMap[char] = 1;
            }
        }

        for(let char in charMap){
            if(charMap[char] > max){
                max = charMap[char];
                maxChar = char;
            }
        }

        return maxChar; 
}


function maxChar (str) {

    const charMap = {}
    let max = 0;
    let maxChar ="";

    for(let char of str){
        if(charMap[char]){
            charMap[char]++;
        } else {
            charMap[char]=1;
        }
    }

    for (let char in charMap){
        if(charMap[char]> max){
            max = charMap[char];
            maxChar = char
        }
    }
    return maxChar

}

function maxchar () {
const charMap = {};
let maxChar = "";
let max = []

for(let char in charMap){
    if(charMap[char]){
        charMap[char]++;
    } else {
        charMap[char] = 1
    }

}
for (let char in charMap) {
    if(charMap[char] > max){
        max = charMap[char]
        maxChar = char
    }
}
return maxChar;
}

