//StringReduction(“abcabc”) should equal 2.
//StringReduction(“cccc”) should equal 4.

function StringReduction2(str) {
  function reduceString(s){
    const len = s.length;
    for(let i = 0; i < len; i++ ){
      const a = s[i];
      const b = s[i+1];
      if( a !== b){
        let newChar = "";
        // if a and b are different then new char is the one that is not a or b
        if((a === 'a' && b === 'b') || (a === 'b' && b === 'a')) newChar = 'c';
        // if a and b are the same the new char is the one that is not a or b
        else if((a === 'a' && b === 'c') || (a === 'c' && b === 'a')) newChar = 'b';
        // if a and b are the same the new char is the one that is not a or b
        else if((a === 'b' && b === 'c') || (a === 'c' && b === 'b')) newChar = 'a';
        // return the string with the new character in place of a and b
        return s.slice(0, i) + newChar + s.slice(i + 2);
      }
    }
    // return s
    return s;

  }
  // reduce the string until it can't be reduced anymore
  let reduceStr = str;
  // while the string can be reduced
  while(true){
  // reduce the string
    const newStr = reduceString(reduceStr);
    // if the string can't be reduced anymore break
    if(newStr === reduceStr) break;
    // set the new string as the string to be reduced
    reduceStr = newStr;
  }
  // return the length of the reduced string
  return reduceStr.length;
}
// test cases
console.log(StringReduction2("abcabc")); // 2
console.log(StringReduction2("cccc")); // 4
