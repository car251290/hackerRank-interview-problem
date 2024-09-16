function processLogs(logs,threshold) {
    // Write your code here
    const map = new Map();
    // sort method 
    sorted = sort((a, b) => a - b);

    // the iteration of the foreach loops will be the number of logs
    logs.forEach(log => {
        // split the logs by space and convert the strings to numbers
        const [sender_user_id, recipient_user_id] = log.split(' ').map(Number);
        // map set and get the method to the sender_user_id and recipient_user_id
        map.set(sender_user_id, (map.get(sender_user_id) || 0) + 1);
        // if the sender_user_id is not equal to the recipient_user_id
        if (sender_user_id !== recipient_user_id) {
            // map set and get the method to the recipient_user_id
            map.set(recipient_user_id, (map.get(recipient_user_id) || 0) + 1);
        }
    });
    // result of the array and get the for each method
    const result = [];
    // map for each method
    map.forEach((count, user) => {
        // if the count is greater than or equal to the threshold
        if (count >= threshold) { 
            // push the user to the result array
            result.push(user);
        }
    });
    
    // sort numerically
    return result.sorted;

}
console.log(processLogs(["88 99 200", "88 99 300", "99 32 100", "12 12 15"], 2)); // ["88", "99"]
threshold = 2

