function Staircase(n){
    //want to declare a variable that will hold the final output that we will print 
    let outspaces = ''
    
    // outer for loop to keep track of the overall number of rows (n)
    for (let i = 1; i <= n; i++) {
    
        // inner for loop to keep track of the preceding spaces on each line
            // j should start out at n-1 which we can see from the pic I drew
            // j should be greater than or equal to i because the number of spaces decreases as i increases
            // decrease j bc the number of spaces decreases as i increases
        for (let j = n - 1; j >= i; j--) {
            outspaces += ' '
        }
        
        // inner for loop to keep track of the #s on each line
            // k should start at one because the first line will always have one #
            // k should be less than or equal to the row that we are on since h will approach and eventually equal n
            // k increases since we increment h to equal i which will eventually equal n
        for (let k = 1; k <= i; k++) {
            outspaces += '#'
        }
        // new line
        outspaces += "\n"
       
    }
    // log the final result
    console.log(output)

}
Staircase(3)


// solution two
function staircase2(n) {

    // here we use just one for loop where i tracks the number of rows
    // the number of rows (i) should be less than or equal to n
      for (let i = 1; i <= n; i++) {
        // print out a " " n-i times and append a # i times
        // console log adds a new line by default
        
          console.log(" ".repeat(n-i) + "#".repeat(i))
      }    
  }