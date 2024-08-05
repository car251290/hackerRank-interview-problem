function Solution(){
  //Write your code here
  const stack = [];
  const queue = [];
  
  this.pushCharacter =(char) => stack.push(char);
  this.enqueueCharacter = (char) => queue.push(char);
  this.popCharacter= () => stack.pop();
  this.dequeueCharacter = () => queue.shift();

  
}