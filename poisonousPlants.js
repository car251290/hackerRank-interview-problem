function poisonousPlants(p) {
    let days = 0;
    let stack = [];
    let maxDays = 0;
    
    for (let i = 0; i < p.length; i++) {
        let maxSurvivalDays = 0;
        while (stack.length && p[stack[stack.length - 1]] < p[i]) {
            maxSurvivalDays = Math.max(maxSurvivalDays, i - stack.pop());
        }
        if (stack.length) {
            days = Math.max(days, i - stack[stack.length - 1]);
        }
        stack.push(i);
    }
    
    return days;

    
}