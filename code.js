// code.js
// Maxie Machado 
// Dijkstra's Algorithm


function dijkstra(graph, source) 
{
    let dists = {};
    let visd = new Set()
    const pq = []

    for (let node in graph) 
    {
        dists[node] = Infinity;
    }

    dists[source] = 0;
    pq.push({node: source, distance: 0});

    while (pq.length > 0) 
    {
        pq.sort((a, b) => a.distance - b.distance);
        const { node: currentNode, distance: currentDistance } = pq.shift();

        if (visd.has(currentNode)) continue;
        visd.add(currentNode);

        for (let neighbor in graph[currentNode]) {
            const edgeWeight = graph[currentNode][neighbor];
            const newDist = currentDistance + edgeWeight;
            
            if (newDist < distance[neighbor]) {
                dists[neighbor] = newDist;
                pq.push({ node: neighbor, distance: newDist });
            }
        }
    }
    return dists;
}
module.exports = { dijkstra };
