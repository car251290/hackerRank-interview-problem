function repeatedString(n,s){
    let count = 0;
    let aCount = 0;
    let aCountInString = 0;
    let aCountInRemainder = 0;
    let remainer  = n % s.length; 

    for(let i = 0 ; i<s.length; i++){
        if(s[i]==='a'){
            aCount++;
        } 
        
    }
    aCountInString = aCount * Math.floor(n/s.length);
    for(let i =0; i<remainer; i++){
        if(s[i]==='a'){
            aCountInRemainder++;
        }
    }
  count = aCountInString + aCountInRemainder;
  return count;

}