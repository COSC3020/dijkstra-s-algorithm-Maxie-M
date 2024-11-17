// code.js
// Maxie Machado 
// Dijkstra's Algorithm

function dijkstra(adjMatrix, sourceNode) {
    const numNodes = adjMatrix.length;
    const dists = Array(numNodes).fill(Infinity);
    const visd = Array(numNodes).fill(false);
    dists[sourceNode] = 0;

    for (let i = 0; i < numNodes; i++) {
        let minDist = Infinity;
        let closestNode = -1;
        for (let node = 0; node < numNodes; node++) {
            if (!visd[node] && dists[node] < minDist) {
                minDist = dists[node];
                closestNode = node;
            }
        }

        if (closestNode === -1) break;

        visd[closestNode] = true;

        for (let neighbor = 0; neighbor < numNodes; neighbor++) {
            const edgeWeight = adjMatrix[closestNode][neighbor];
            if (edgeWeight > 0 && !visd[neighbor]) {
                const newDist = dists[closestNode] + edgeWeight;
                if (newDist < dists[neighbor]) {
                    dists[neighbor] = newDist;
                }
            }
        }
    }

    return dists;
}
