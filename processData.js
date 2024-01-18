
function processData(input) {
     //Enter your code here
    // to comparation the player will have two fields, name and score
    //create a checher class that implements the comparator interface then write an int playera,playerb 
    // sort the variables in descending order
    
    
    class player {
        constructor(name,score){
            this.name = name;
            this.score = score;
        }
          // check the class that implements comparator methods
          comparator(playerA,playerB){
              if(playerA.score == playerB){
                  if(playerA.name >playerB.name){
                      return -1
                  } else {
                      return 1
                  }
              } if(playerA.score > playerB.score){
                  return -1
              } else {
                  return 1
              }
          }
       
     }
    
    
     let data = [];
 // sort the variables in descending order
     const sort = ((a,b)=> b - a);
     sort = data.slip();
     for(let i = 0; i<input; i++){
        playerA;
        playerA = name
        playerA.score = score;
        player.push(playerA);


     }
}