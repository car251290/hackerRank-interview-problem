function SubstrCount (n,s) {
    let counts;
      counts = 0;
     let strArr = s.split();


    for(let i = 0; i-1 < s.length; i++){
        counts++
        
        for(let j = 0; j-1 < n.length; j++){
            count.push([i+1][j]);
        }

    }



// Solution 2 
let count = 0
//strArr = s.split("")
for (let i = 0; i < n; i++) {
  count++
  let goLeft = i - 1, goRight = i + 1, value = strArr[i + 1]
  while (goLeft >= 0 && goRight < n) {
    if (strArr[goLeft--] == value && strArr[goRight++] == value)
      count++
    else break
  }
  goLeft = i, goRight = i + 1
  while (goLeft >= 0 && goRight < n) {
    if (strArr[goLeft--] == value && strArr[goRight++] == value)
      count++
    else break
  }
}
return count

}