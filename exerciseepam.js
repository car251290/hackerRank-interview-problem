const a = [1];
const b = a;
b.push(2);
console.log(a, b);
 
// exercise 2 
const obj = {
    a: this,
    b: function(){
      return this;
    },
    c: ()=>{
      return this;
    },
    d(){
      return this;
    }, 
    e: function(){
      return this.a;
    }
  }
console.log(obj);
// question 3 
console.log(1);
setTimeout(()=>console.log(2), 0);
Promise.resolve().then(()=>console.log(3));
setTimeout(()=>console.log(4), 1);
console.log(5);

// exercise 4
function deepCopy () {
if(obj === null || typeof obj !== 'object'){
    return obj;

}
const copy = deepCopy(obj)
for (const object in obj){
    if(obj.hasOwnProperty(object)){
        copy[object] = deepCopy(obj[object]);
    }
}
return copy; 
}


let [] = [1, 2, 3, 4, 5];
