function catAndMouse(x, y, z) {
    // if cat A catch the mouse print Cat A
    // if cat B catch the mouse print Cat B 
    // if both cat catch the mouse print Mouse C

    x = Math.abs(x - z);
    y = Math.abs(y - z);
    z = Math.abs(x - y);
    if (x < y) {
        return 'Cat A';
    }
    if (x > y) {
        return 'Cat B';
    } else {
        return 'Mouse C';
    }
}

console.log(catAndMouse(1, 2, 3)); // Cat B