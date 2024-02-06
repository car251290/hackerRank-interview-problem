
function fibonacci(n) {

const start = [0,1]
for(let i= 0; i< n; i++){
    const next = start[i] + start[i+1];
    start.push(next);

}
return start[n];

}