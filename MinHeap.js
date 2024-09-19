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
    const pq = new MinHeap();
    const nextAvailableTime = Array(n).fill(0);
    let currentTime = 0;

    // Insert requests into the priority queue
    for (let i = 0; i < requests.length; i++) {
        const region = requests.charCodeAt(i) - 'a'.charCodeAt(0);
        const earliestTime = Math.max(currentTime, nextAvailableTime[region]);
        pq.insert([earliestTime, region]);
        nextAvailableTime[region] = earliestTime + minGap;
    }

    // Process requests in the order of their time from the heap
    while (pq.heap.length > 0) {
        const [time, region] = pq.extractMin(); // Get the request with the earliest time
        currentTime = Math.max(currentTime, time) + 1; // Update current time by processing the request
    }

    return currentTime; // Return the total time taken to process all requests
}


const n = 6;
const requests = "aaabbb";
const minGap = 2;
console.log(getMinTime(n, requests, minGap)); 