function truckTour(petrolpumps) {
    // Write your code here
    let totalPetrol = 0;
    for(let i=0; i<petrolpumps.length; i++){
        // so the total petrol is the sum of all petrol - sum of all distance
        totalPetrol += petrolpumps[i][0] - petrolpumps[i][1];

    }
    if(totalPetrol < 0){
        return - 1;
    } else {
        let currentPetrol = 0;
        let startIndex = 0;
        for(let i=0; i<petrolpumps.length; i++){
            currentPetrol += petrolpumps[i][0] - petrolpumps[i][1];
            if(currentPetrol < 0){
                startIndex = i + 1;
                currentPetrol = 0;
            }
        }
        return startIndex;
    }
    

}
