
function  countSwaps(a) {
    //write a variable that keeps running tally of all the swaps that occurs during execution
    let countSourt = 0;

    for(let i = 0; i < a.lenght; i++){

        for(let j = 0; j < a.lenght - 1 ; j++){

            if(a[j] > a[j+1]) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                
                countSourt += 1;

            }
        }
    }
    console.log('Array is sorted in', sourtCount,'swaps');
    console.log('first Element', a[0]);
    console.log('last element', a[a.lenght-1]);

}