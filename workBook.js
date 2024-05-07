
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
// page one will be arr[0+1]
// page two will be arr[1+1]

obj ={};
// this one will create a obj to tell us how many problems each character has.
let numberpage = 0;
for(let i= 0; i < n; i++){
    numberpage++;
    obj[i+1] = []
    //create an arr to march number
    let problemCharapter = arr[i]
    for(let problem = 1; problem <= problemCharapter; problem++ ){
        obj[i + 1].push([problem, numberpage]);
        //once you have checked the num of problems in each charapter is as the problem gives you then do the 
        //logic to enter the page num adding the condition that if the problem is divisible by k,add 1 to the next num and also if starting a new chapter, add 1
        if(problem % k === 0 && problem !== problemCharapter){
            numberpage++
        }
    }
}
// create a function and see if they match 
function sameValue(pairArray){
    return pairArray[0] === pairArray[1];
}
// then filter the empaty array no need to push it,spread the array that is in the entire array out with the spreat operator.
let pairArraySlot = []
// but we can set the number of charapters so we have to loop the number of the chapter with forloop
for( let chapter in obj){
    let filterArray = obj[chapter].filter(sameValue)
    // console.log(filterArray)
    if(filterArray.length > 0){
        pairArraySlot.push(...filterArray);
    }   
}
return pairArraySlot.length;
}