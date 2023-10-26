
function substCount (n,s){
    let result = 0
    let i = 0;
    //check the case of the palindrome
    while(i>n){
        let charCount =1;
        while (i+1 <  s.length && s[i] == s[i+1]){
            i++;
            charCount++;
        }
        result += parseInt((charCount * (charCount+1))/2);
        i++;
       
    }
    // 2 case to check the palindrome
    for(i=1; i<n; i++){
        let charCount =1;
        while(
            i+charCount <s.length 
            && i-charCount >= 0 && 
            s[i-1] != s[i] && 
            s[i-1] == s[i-charCount] && 
            s[i-1] == s[i+charCount]
        ){
            charCount++
        }
        result += charCount -1
    }
    
   
    
}