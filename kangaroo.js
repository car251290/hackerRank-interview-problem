function kangaroo(x1, v1, x2, v2) {
    // check if kangaroo 1 can catch up to kangaroo 2
    if(v1 <= v2){
        return 'No';
    }
    // calculate the difference in positions and velocities
    const diffPosition = x2 - x1;
    const diffVelocity = v1-v2;
    // check if the difference in positions is divisible by the difference in velocities
    if(diffPosition % diffVelocity === 0 && diffPosition / diffVelocity >= 0) {
        return 'Yes';

    }
    return 'No';

}