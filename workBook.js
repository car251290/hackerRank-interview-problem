
'use strict'
function workBook(n,k,arr){
 // https://www.hackerrank.com/challenges/lisa-workbook/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

//page will never containe more than problem that has been use it in other pages.
//each chapter starts on a new page so a page will never contain problem from more than one chapter
// the page number index start with 1
// The first page will hold  problems for chapter . Problem  is on page , so it is special. Page  contains only Chapter , Problem , so no special problem is on page . Chapter  problems start on page  and there are  problems. Since there is no problem  on page , 
//there is no special problem on that page either. There is  special problem in her workbook.

// let count number of special number


// function 
// workbook has this parameters
// n number of characters
// k is the maximimum number of problems perpage
// arr[n] the number of problems in each charapter
arr= [];
    
for(let i =0; i<arr.length; i++){
    const bookread = arr[i];
    if(bookread[k] == bookread[n]){
        return book[n]
    }
    
}

}