function main(){
    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));


    // Write your code here
    let numSwaps = 0;
    for(let i=0; i<n-1; i++){
        let currSwapt = 0;
        let nextSwapt = a[i +1];
        if(a[i]> nextSwapt){
            a[i+1] =a[i];
            a[i] = nextSwapt;
            nextSwapt = a[i +1];
            numSwaps++;
            i--;
        }
        currSwapt = a[i];
        nextSwapt = a[i +1];
    };
    console.log(`Array is sorted in ${numSwap} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length - 1]}`);
};
