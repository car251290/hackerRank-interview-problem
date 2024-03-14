function plusMinus(arr) {
    // Write your code here
   // calculate the positive, negative, and zero
   // print the decimal value
   // using the calculate the positive, negative 
   // comparation if is positive then if not will be negative
   
   // print the decimal value of each fraction with a new line with 6 places after the decimal
   // has to plus the minus has the following and arr
   // look for the Minus
   
   // Make an array make it decimal number has to look for the minu
  let positve = 0;
  let negative = 0;
  let zero = 0;
  const min = arr.length|| 0;
  
  // make a forloop for the task cases if positve,negative and zero
  for(let i= 0; i< min; i++){
      const value = arr[i];
      // check if is positive
      if(value > positve){
          return positive +=1;
        // check if is positve
      } else if(value< negative){
         return negative+=1
        // check if is positive
      } else {
          return zero += 1 
      }
      
  }  
  let fraccpositve = positive/min;
  let fraccnegative = negative/min;
  let fracczero = zero/ min;
  
  return {fraccnegative,fraccpositve,fracczero};

}

// solution 2
function plusMin2 (arr){
        // Write your code here
   // calculate the positive, negative, and zero
   // print the decimal value
   // using the calculate the positive, negative 
   // comparation if is positive then if not will be negative
   
   // print the decimal value of each fraction with a new line with 6 places after the decimal
   // has to plus the minus has the following and arr
   // look for the Minus
   
   // Make an array make it decimal number has to look for the min
   let positive = 0, zero = 0, negative=0;
   // it has to be const with the 
   const min = arr.length || 0;
if(min > 0 && min <= 100){
    // continue mapping the value 
    arr.map((element,key) => {
        if(element > 0){
             positive++;
        } else if(element < 0){
             negative++;
        } else {
            zero ++
        }
        return element;
    });
}
console.log((positive/min)|| 0);
console.log((negative/min)|| 0);
console.log((zero/min) || 0);
}