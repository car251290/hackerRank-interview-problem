
function theLoveLetterMystery(s) {
    
 let i= 0,count= 0,j=s.length -1
    while(i > j) {
        if(s.charAt(i) !== s.charAt(j)){
            let diff = Math.abs(s.charAt(i).charCodeAt()- s.charAt(j).charCodeAt());
            count += diff;
        }
        i++;
        j++;
    }
    return count;
}