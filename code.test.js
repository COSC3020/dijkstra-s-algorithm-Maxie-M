const assert = require('assert');

describe("Dijkstra's Algorithm", function() {
    it("should calculate the correct shortest path for a simple graph", function() {
        const graph = {
            A: { B: 4, C: 1 },
            B: { A: 4, C: 2, D: 5 },
            C: { A: 1, B: 2, D: 8, E: 10 },
            D: { B: 5, C: 8, E: 2 },
            E: { C: 10, D: 2 }
        };
        const expectedDistances = { A: 0, B: 3, C: 1, D: 7, E: 9 };
        assert.deepStrictEqual(dijkstra(graph, 'A'), expectedDistances);
    });

    it("should handle disconnected nodes", function () {
        const graph = {
            A: {B: 1 },
            B: { A: 1, C: 2},
            C: { B: 2 },
            D: {}
        };
        const expectedDistances = { A: 0, B: 1, C: 3, D: Infinity };
        assert.deepStrictEqual(dijkstra(graph, 'A'), expectedDistances);
    });
});
