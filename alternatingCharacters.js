function alternatingCharacters(s){
    let deletations = 0;
    for(let i = 0; i < s.length - 1; i++){
        if(s[i] === s[i + 1]){
            deletations++;
        }
    }
    return deletations;
}