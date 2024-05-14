'use strict'

// Designer PDF
function getIndex(char){
  IndexAlphabeth = [...'abcdefghijklmnopqrstuvwxyz'];
  // to get the index of each letter of the alphabeth
  return IndexAlphabeth.indexOf(char);
}


function designerPdfViewer(h,word){
  //`https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign`
let words = word.length;
let heightLetter = []; maxLetter = 0;
for(let i = 0; i< words; i++){
  heightLetter.push(h[getIndex(word[i])]);

}
maxValue = Math.max(...heightLetter);
return(words * maxValue)

}


// solution 2
function designerPdfViewer2(word,h){
  let  IndexAlphabeth = [...'abcdefghijklmnopqrstuvwxyz']; // get the destructuring of the A-Z
  let words = word.length; // get the length of the letter
  let heightLetter = [];// empty array to push the number letter
  let MaxLetter = 0 // it will start with 0 because it will be the max letter  3 *3 = 9 count
  for(let i =0; i<words; i++){
      let index = IndexAlphabeth.indexOf(word[i]); // convert the letter to number.
       heightLetter.push(h[index])   // push the result to a new array of letter
  }
  MaxLetter = Math.max(...heightLetter); // get the max number of letter using destructuring
  return (words * MaxLetter); // return the result of the multiplication of the letter and the max letter. 
}