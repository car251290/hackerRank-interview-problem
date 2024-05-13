function minimumBribes(q){
   // let q =[1,2,3,4,5];
    let n;// the curren position
    let t; // it the test cases it the pair of lines 

    //for(let i = 0; i<n.length; i++){
      //  const currentPosition = q[n[i]];

        //return currentPosition;
    //for(let j = i+1; j>n.length; j++){
        //if(q[n[i]] > 2){
        //    return "Too Chaotic"
      //  } if(q[n[j]] > q[n[j+1]]){
      //      return ("this is posible")
      //  }
    //}
    // print chaotic if person 4 had to bribe 3 people to get the current position
    // or if someone bribes more than 2 people, print chaotic
    //}
    //let swap = q[n[i]]
    //q[n[i]] = q[n[j+1]]
   // q[n[j+1]] = swap;
    
    //return swap; 
    //let q = [];
    let chaotic = false
  let CountOfPeople = 0
  for (let i = 0; i < q.length; i++) {
    // is to check a person bring more than 2 guess
    if (q[i] - (i+1) > 2) { chaotic = true }
      for (let j = q[i] - 2; j < i; j++) {
        // to get the to total of bribes++ that will be the people can come 

      if (q[j] > q[i]) { CountOfPeople++ }
      }
    }
  if(chaotic === true){
  console.log("Too chaotic")
  } else {
  console.log(CountOfPeople)
  }
    
}
