//code.js
//Maxie Machado 
// Dijkstra's Algorithm 

function dijkstra(graph, sourceNode) 
{
    let dist = {};
    let vis = new Set()

    for (let node in graph)
    {
        dist[node] = Infinity;
    }
    dist[sourceNode] = 0;

    function getClosestUnvisitedNode()
    {
        let minDist = Infinity;
        let clstNode = null;

        for (let node in dist)
        {
            If (!vis.has(node) && dist[node] < minDist)
            {
                minDist = dist[node];
                clstNode = node; 
            }
        }
        return clstNode;
    }

    let currentNode = getClosestUnvisitedNode();

    while (currentNode !== null)
    {
        let currDist = dist[currentNode];
        vis.add(currentNode);

        for (let neighbor in graph[currentNode])
        {
            if (!vis.has(neighbor))
            {
                let newDist = currDist + graph[currentNode][neighbor];
                dist[neighbor] = Math.min(dist[neighbor], newDist);
            }
        }
        currentNode = getClosestUnvisitedNode();
    }
    return dist;
}
