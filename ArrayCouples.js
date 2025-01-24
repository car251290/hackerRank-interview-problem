function ArrayCouples(arr){
function ArrayCouples(arr) {
    let couples = [];
    let varOcg = []; 

    // Create pairs of integers
    for (let i = 0; i < arr.length; i += 2) {
        couples.push([arr[i], arr[i + 1]]);
    }

    // Check for reversed pairs
    for (let i = 0; i < couples.length; i++) {
        let pair = couples[i];
        let reversedPair = [pair[1], pair[0]];
        let found = false;

        for (let j = 0; j < couples.length; j++) {
            if (i !== j && couples[j][0] === reversedPair[0] && couples[j][1] === reversedPair[1]) {
                found = true;
                break;
            }
        }

        if (!found) {
            varOcg.push(pair[0], pair[1]);
        }
    }

    // Output result
    if (varOcg.length === 0) {
        return "yes";
    } else {
        return varOcg.join(",");
    }
}

// Example usage
console.log(ArrayCouples([4, 5, 1, 4, 5, 4, 4, 1])); // Output: yes
console.log(ArrayCouples([6, 2, 2, 6, 5, 14, 14, 1])); // Output: 5,14,14,1




    
}