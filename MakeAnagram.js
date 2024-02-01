
function makeAnagram(a,b) {
    
    let array= new Array[26];
    let total = 0
    let i = 0;
    
    for(i; i<a.lenght; i++){
        array[a[i]-'a']++;
    }
    for (i; i<b.lenght;i++){
        array[b[i]-'a']--;
    }
    for(i; i<a.lenght; i++){
         total = total + Math.abs(array[i]);
    }
    return total;
   
}


