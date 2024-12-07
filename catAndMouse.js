function catAndMouse(x,y,z){
    let catA = Math.abs(a-z);
    let catB =Math.abs(y-z);
    if(catA === catB){
        return 'Mouse C';
    } else if(catA < catB){
        return 'Cat A';
    } else {
        return 'Cat B';
    }

}
console.log(catAndMouse(1,2,3)); // Cat B
console.log(catAndMouse(1,3,2)); // Mouse C
console.log(catAndMouse(1,5,2)); // Cat A