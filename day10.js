function main(){
    const n = parseInt(readLine().trim(), 10);
    // print the consecutive base-10
    // multiples of n, up to 10
    let binaryNum = n.toString(2);
    binaryNum = [...binaryNum.toString()];
    console.log(binaryNum);
    // get the maximum number of consecutive 1's
    let maximum = 0;
    let consecutive = 0;
  binaryNum.forEach((num => {
    if(num === '1'){
        consecutive++;
    } else {
        maximum = Math.max(maximum, consecutive);
        consecutive = 0;
    }
  }));
  maximum = Math.max(maximum,consecutive);
  console.log(maximum);
  return maximum;


}
main();