function processData(input) {

function obj (name,score) {
  name = this.name;
  score = this.score;
   }
   //instantion of the name and score
const myobj = new Obj("name",score);
   

   // input.sort(( a, b) => a - b);
function comparator(a,b) {
    //compare two objects
     // compare the score with an if statment 
    if(a.score > b.score){
        return -1
    } if (a.score < b.score){
        return 1
    } if(a.name < b.name){
        return -1
    } if(a.name > b.name){
        return 1
    } 
    return 0

};
    //sort the arrays
    n = int(input());
    data = [];
    for(let i = 0; i < n.length; i++) {

        name, score = input().split();
        score = int(score);
        obj = Obj(name,score)
        data.append(obj) 
    }
data = sorted(data,key=processData(Obj.comparator))
for(let i= 0; data.length;i++){
    print(i.name,i.score);
}

    //const Score = input.forEach( input => {

    //})

}

//https://forum.freecodecamp.org/t/help-needed-with-a-problem-solved-hackerrank-day-6/396355/3