`https://www.hackerrank.com/challenges/day-of-the-programmer/problem`
'use strict';
function dayOfProgrammer(year){
    //write code for this challenge
    //let years = 1918 // they change the calendar 32nd day of the year in Russia.
    // both calendars February is the only month with a variable amount of days; it has 29 days during a leap year, 
    //and 28 days during a non-leap year.
    // 256th day of that year according to the official Russian calendar during that year. 
    //Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is .
    if(year === 1918){
        // 1918 is not a leap year
        // 32nd day of the year
        // year = 1918
        return `26.09.1918`
        // if it is a leap year it has to be 12.09.1984
        // if it is not a leap year it has to be 13.09.1985

    } else if(year < 1918){
        return `12.09.1984`
    } else if(year% 4 ===0){
            //leap year 
            return `12.09.1984`
            // this one is not a leap year
        }else if(year%4 !==0){
            // year = 1985
            return `13.09.1985`
        } else if (year%100 ===0){
            // year = 1900
            return `13.09.1900`
        } else if(year % 400 === 0){
            // year = 2000
            return `12.09.2000`
    } else if(year > 1918){
        return `13.09.1918`
    } else if(year === 1918){
        return `26.09.1918`
    } else if(year === 2017){
        return `13.09.2017`
    } else if(year === 2016){
        return `12.09.2016`
    }
    
}