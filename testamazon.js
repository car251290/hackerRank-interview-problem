class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(item) {
        this.heap.push(item);
        this.bubbleUp();
    }

    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let element = this.heap[index];
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            if (parent[0] <= element[0]) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild[0] < element[0]) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild[0] < element[0]) ||
                    (swap !== null && rightChild[0] < leftChild[0])
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}

function getMinTime(n, requests, minGap) {
    const nextAvailableTime = {}; // Track next available time for each region
    const requestTimes = {}; // Track times when requests are processed for each region
    const pq = new MinHeap(); // MinHeap to manage requests by the earliest time they can be processed
    let currentTime = 0; // Initialize current time

    // Initialize request tracking
    for (const region of requests) {
        requestTimes[region] = (requestTimes[region] || 0) + 1;
    }

    // Insert each request into the priority queue with initial time
    for (const [region, count] of Object.entries(requestTimes)) {
        for (let i = 0; i < count; i++) {
            const earliestTime = nextAvailableTime[region] || 0;
            pq.insert([earliestTime, region]);
            nextAvailableTime[region] = earliestTime + minGap;
        }
    }

    // Process requests and calculate total time
    while (pq.heap.length > 0) {
        const [time, region] = pq.extractMin(); // Get the request with the earliest time
        currentTime = Math.max(currentTime, time); // Update current time to the earliest time
        currentTime++; // Process the request, taking 1 unit of time
        // Update the next available time for the region considering minGap
        nextAvailableTime[region] = currentTime + minGap;
    }

    return currentTime; // Return the total time taken to process all requests
}

// Example usage:
const n = 12;
const requests = "abacadaeafag";
const minGap = 2;
console.log(getMinTime(n, requests, minGap)); // Expected output: 16