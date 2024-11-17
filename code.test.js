// code.js
// Maxie Machado 
// Dijkstra's Algorithm

const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync(code.js) + '');

const graph1 = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 6 },
    C: { A: 4, B: 2, D: 3 },
    D: { B: 6, C: 3 },
};

const expected1 = { A: 0, B: 1, C: 3, D: 6};
assert.deepStrictEqual(dijkstra(graph1, 'A'), expected1);

const graph2 = {
    A : { B: 2 },
    B: { A: 2, C: 1 },
    C: { B: 1 },
};

const expected2 = { A: 0, B: 2, C: 3 };
assert.deepStrictEqual(dijkstra(graph2, 'A'), expected2);

const graph3 = {
    0: {1: 2, 2: 5 },
    1: { 0: 2, 2: 1 },
    2: { 0: 5, 1: 1},
};

const expected3 = { 0: 0, 1: 2, 2: 3 };
assert.deepStrictEqual(dijkstra(graph3, 'A'), expected3);

const graph4 = {
    A: { B: 1 }, 
    B: { C: 2 },
    C: { D: 3 },
    D: {},
};

const expected4 = { A: 0, B: 1, C: 3, D: 6 };
assert.deepStrictEqual(dijkstra(graph4, 'A'), expected4);

console.log('All Tests Passed!');
