function computePath(StartNodeId:number,fromIds:Number[], toIds:number[]): number {
    let result = 0;
    let currentNodeId = StartNodeId;
    let currentIndex = 0;

    while (currentIndex < fromIds.length) {
        if (currentNodeId === fromIds[currentIndex]) {
            result += toIds[currentIndex];
            currentNodeId = toIds[currentIndex];
        }
        currentIndex++;
    }

    return result;
}

function compute(StartNodeId: number, fromIds: number[], toIds: number[]): number {
    let currentNodeId = StartNodeId;

    while (true) {
        // Find the index of the current node in the `fromIds` array
        const currentIndex = fromIds.indexOf(currentNodeId);

        // If the current node has no outgoing link, return it as the last node
        if (currentIndex === -1) {
            return currentNodeId;
        }

        // Move to the next node in the network
        currentNodeId = toIds[currentIndex];
    }
}