function counterGame(n) {
    // to solve this problem we need to keep track of the number of turns
    let counter = 0;
    // we will keep dividing the number by 2 until we reach 1
    while (n > 1) {
        // if the number is a power of 2 we will divide it by 2
        if (Math.log2(n) % 1 === 0) {
            // we will divide the number by 2
        n /= 2;
        } else {
            // if the number is not a power of 2 we will subtract the largest power of 2 from the number
        n -= Math.pow(2, 
            // we will use Math.floor to get the largest power of 2 and Math.log2 to get the power of 2
            Math.floor(Math.log2(n)));
        }
        // increment the counter
        counter++;
    }
    // if the counter is even then Richard wins otherwise Louise wins
    return counter % 2 === 0 ? 
    "Richard" : "Louise";
  
}

