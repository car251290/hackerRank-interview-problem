
`https://www.hackerrank.com/challenges/bigger-is-greater/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign`


'use strict'
function biggerIsGreater(w) {
    // Write your code here
    // swap a new wordcreate a new one
    //The two criterias will be meet are it must be greater than the original word.
    // it must be the smallest word that meets the first condition
    // the word is abdc 
    // if not possible return no
    let arrchart,n,endindex

  w = [];
  arrchart = w.split('');
  n = arrchart.length;
  endindex = 0;
    // start from the right most character and find the first character that is smaller than previous character in this case it is "d" as it is smaller than "i"
    //const sort =(a,b) => b - a;
  // Start from the right most character and find the first character
    // that is smaller than previous character.

    for (endindex = n -1; endindex > 0; endindex--){
        if(arrchart[endArray] > arrchart[endArray - 1]){
            break;
        }
     // If no such character cannot be fine, then all characters are in descending order
     // means there cannot be a greater string with same set of characters
     if(endindex == 0){
        console.log("it not answer")
     } else {
        let firstSmallchar = arrchart[endindex - 1]
        let nextSmaller = endindex;
        for(let startIndex =  endindex + 1; startIndex > endindex; startIndex++){
            if(arrchart[startIndex] > arrchart[endArray]){
                nextSmaller = firstSmallchar;

            }

        }
       swapt(arrchart,endArray-1,nextSmaller)
         //Sort the charArray after (endIndex - 1)in ascending order
         Array.sort(arrchart,endArray)
     }
     return new String(arrchart);
    }  
    // swap a place using this code and get the nextsmall fist index
    // get the next small index
    const swapt = (arrchart,i,j) => {
      let temp = arrchart[i];
      arrchart[i] =arrchart[j+1]
      arrchart[j+1] = temp;
    }

     //for(let j = 1; j < w.length - 1; j++){
            // it will swap the code!! 
      //      let swap = sort[j];
        //    sort[i] = sort[j]
          //  sort[j] = swap;


        //}
        //return swap; 

}






