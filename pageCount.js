function pageCount(n,p){
    let front = Math.floor(p/2);
    let back = Math.floor(n/2) - Math.floor(p/2);
    return Math.min(front, back); 
}
console.log(pageCount(5,4)); // 0