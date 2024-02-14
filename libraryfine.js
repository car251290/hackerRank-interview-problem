
function libraryFine(d1,m1,y1,d2,m2,y2){
    // fine = 15 hackos  * number of days late
    // fine = 500  hackers *the number of months later 
    // y2 == y1 it know it is less than a year late
    // m2 == m1 it know it is less than one montn 
    // d2 > d1 we know it was return late but still the same month and year
    //let fine = 0;
    
    if(y1 == y2 && m1== m2 && d1 > d2){
        return (15*  (d1-d2));

    } else if( y1 == y2 && m1 > m2){
        return (500 *(m1-m2));

    } else if(y1 > y2) {
        return 10000
    } else if(y1 <= y2 || m1<= m2 || d1 <= d2){
        return 0;
    }
}

