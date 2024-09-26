async function getNumberTransactions() {
    // API endpoint: https://jsonmock.hackerrank.com/api/article_users?username=<username>
    // API endpoint: https://jsonmock.hackerrank.com/api/transactions?&userId=<userId>


    // get 
    try {
        const { data } = await axios.get(`https://jsonmock.hackerrank.com/api/transactions?&userId=${userId}`);
        return data.total;
    } catch (error) {
        throw new Error(error);
    }
}