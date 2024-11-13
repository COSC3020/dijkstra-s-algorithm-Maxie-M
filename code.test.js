// code.test.js
// Maxie Machado
// Dijkstra's Algorithm

const assert = require("assert");

const graph1 = {
    A: { B: 4, C: 1 },
    B: { A: 4, C: 2, D: 5 },
    C: { A: 1, B: 2, D: 8, E: 10 },
    D: { B: 5, C: 8, E: 2 },
    E: { C: 10, D: 2 },
};
const expectedDistances1 = { A: 0, B: 3, C: 1, D: 7, E: 9 };
const result1 = dijkstra(graph1, "A");
assert.deepStrictEqual(result1, expectedDistances1, "Test 1 Failed");

const graph2 = {
    A: { B: 1 },
    B: { A: 1, C: 2 },
    C: { B: 2 },
    D: {},
};
const expectedDistances2 = { A: 0, B: 1, C: 3, D: Infinity };
const result2 = dijkstra(graph2, "A");
assert.deepStrictEqual(result2, expectedDistances2, "Test 2 Failed");

console.log("All tests passed!");

