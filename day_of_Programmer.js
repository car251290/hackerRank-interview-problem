"use strict";
function dayOfProgrammer(year){
    //write code for this challenge
    //let years = 1918 // they change the calendar 32nd day of the year in Russia.
    // both calendars February is the only month with a variable amount of days; it has 29 days during a leap year, 
    //and 28 days during a non-leap year.
    // 256th day of that year according to the official Russian calendar during that year. 
    //Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is .
switch(true){
    // case one if julia was born in 1700s and is a leap year
    // it is a leap year because is divisble by 400 and 4 and 100. 
    case year < 1918:
        if(year % 4 === 0){
            // leap year it has 29 days and the year will be 
            return `12.09.${year}`;
        }else{
            // non leap year it has 28 days 
            return `13.09.${year}`;
        }
        // case two if julia was born in 1918 and is a leap year.
        // 1918 is not a leap year because it is not divisible by 400 and 4
    case year > 1918:
        // leap year it has 29 days 
        // 1918 is not a leap year because it is not a divisible by 400 and 4 and 100.
        if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
            return `12.09.${year}`;
        }else{
            // non leap year it has 28 days
            return `13.09.${year}`;
        }
        // case 3 if julia was born in 1918 and is a leap year.

    case year === 1918:
        // 1918 is not a leap year because it is not a divisible by 400 and 4
        return `26.09.${year}`;
        // otherwise these cases are invalidad years.
    default:
        return `Invalid year`;
}
    
}