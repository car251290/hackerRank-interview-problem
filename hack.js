function simpleArraySum(ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
    
}
//console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));

function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice++;
        } else if (a[i] < b[i]) {
            bob++;
        }
    }
    return [alice, bob];
}

//console.log(compareTriplets([5, 6, 7], [3, 6, 10]));


function aVeryBigSum(ar) {
    let sum = 0;
    for(let i =0; i< arr.length; i++){
        sum += ar[i];
    }
    return sum;
}
//console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));

function diagonalDifference(arr){
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i<arr.length; i ++) {
        // why this arr[i][i] is not working
        // this code is doing the arr sum of the index of the array

        sum1 += arr[i][i];
        sum2 += arr[i][arr.length -i -1];

    }
    return Math.abs(sum1-sum2);
}


function plusMinus(arr) {
    let pos = 0, neg = 0, zero
   

    for(let i =0; i<arr.length; i++) {
        if(arr[i]>0){
            pos++;
        } if(arr[i] < 0){
            neg++;
        } else {
            zero++;
        }
     // console.log(pos/arr.length).toFixed(6)
      //console.log(neg/arr.length).toFixed(6) 
      //console.log(zero/arr.length).toFixed(6);
    }
}
//console.log(plusMinus([-4, 3, -9, 0, 4, 1]));


function stairCase(n) {
    for(let i = 1; i <= n; i++) {
        console.log(' '.repeat(n-i) + '#'.repeat(i));
    }

};
//console.log(stairCase(6));

function miniMaxSum(arr){
  let sum = 0;
  let min =Math.min(...arr);
  let max=Math.max(...arr);

  for(let i = 0; i<arr.length; i++){
    sum += arr[i];
  }
  console.log(sum - max, sum - min)
}

console.log(miniMaxSum([1, 2, 3, 4, 5]));