function countGroups(related) {
    // Get the number of people
    const nodes = related.length; 
    // Create an array to keep track of visited people
    let visited = new Array(nodes).fill(false);  
    // Initialize count of groups
    let count = 0; 

    // Helper function to perform DFS
    function dfs(person) {
        visited[person] = true;  
        // iteration through all people
        for (let otherPerson = 0; otherPerson < nodes; otherPerson++) {
            // if the person is related to the other person and the other person has not been visited
            if (related[person][otherPerson] === '1' && !visited[otherPerson]) {
                // recursively call dfs to return the count of groups
                dfs(otherPerson);  

            }
        }
    }
    // Iterate through all people
    for (let i = 0; i < nodes; i++) {
        if (!visited[i]) {  
            count++;
            dfs(i);  
        }
    }
    // return the count of groups
    return count;  
}
// test the functions
console.log(countGroups([
    ['1', '1', '0'],
    ['1', '1', '0'],
    ['0', '0', '1']
]));

