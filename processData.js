
function processData(input) {
     //Enter your code here
    // to comparation the player will have two fields, name and score
    //create a checher class that implements the comparator interface then write an int playera,playerb 
    // sort the variables in descending order
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
                  if(playerA.name > playerB.name){
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
     const sort = ((a,b)=> b.score - a.score);
     sort = data.slice(1);
     for(let i = 0; i < input; i++){
       // playerA;
        //playerA = name
        playerA.score = score;
        player.push(playerA);

     }
}
function processData2(input) {
    class Player {
        constructor(name, score){
            this.name = name;
            this.score = score;
            
        }
     }
    console.log(Player.name, Player.score)
    
    //Enter your code here
    let lines = input.split("\n")
    let sorted = lines.splice(1)
    .map((str) => {
        let split = str.split(" ") 
        return {
            name:split[0],
            score : parseInt(split[1])
            
        }
    }).sort((a,b) => {
        if(a.score !== b.score){
            return b.score - a.score;
        }
        return a.name.localeCompare(b.name)
    }) .map(player => `${player.name} ${player.score}`).join("\n");
    console.log(sorted)
    
    };