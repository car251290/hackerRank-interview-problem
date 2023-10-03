
function makeAnagram(a,b) {
    
    let array= new Array[26];
    let total = 0
    
    for(var i = 0; i<a.lenght; i++){
        array[a[i]-'a']++;
    }
    for (var i=0; i<b.lenght;i++){
        array[b[i]-'a']--;
    }
    for(var i =0; i<a.lenght; i++){
         total = total + Math.abs(array[i]);
    }
    return total;
   
}


