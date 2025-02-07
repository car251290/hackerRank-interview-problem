function alternativeCharacter(s){
    let min = 0;
    for(let i = 0; i< s.length -1; i++){
        if(s[i] == s[i+1]){
            min++;
        } else {
            continue;
        }

    }
    return min; 
}