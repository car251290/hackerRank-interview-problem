
function fizzBuzz (num) {
    for(let i = 1; i <= num.length; i++){
        if(i % 3 === 0 && i % 5 === 0){
            return ('FozzBuzz')
        } else if (i % 3 === 0) {
            return ('FIZZ')

        } else if( i % 5 === 0){
            return 'Buzz'
        } else {
            return num[i];
        }

    }
    return 10;
}
