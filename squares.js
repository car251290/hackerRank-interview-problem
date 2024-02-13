

function square2 (a,b) {
    let counter = 0;
    let start = Math.floor( Math.sqrt(a));
    for ( let i = start ; i*i <= b ; i++ ){
        let sqr = i*i;
        if( sqr >= a && sqr <=b  ) 
        counter++;
    }
    return counter;
}