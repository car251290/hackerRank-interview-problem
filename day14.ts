let readLine = () => '1 2 3 4 5';
 function main(){
const inputs = readLine().split(' ').map(Number);
let max = -Infinity;
let min = Infinity;

inputs.forEach((str)=>{
    max = Math.max((Number(str),max));
    min = Math.min((Number(str),min));
})
console.log(Math.abs(max-min));


 }

