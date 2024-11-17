const fs = require('fs');
const assert = require("assert");
eval(fs.readFileSync('code.js') + '');

const testCases = [
    {
        graph: [
            [0, 2, 5],
            [2, 0, 1],
            [5, 1, 0],
        ],
        source: 0,
        expected: [0, 2, 3],
    },
    {
        graph: [
            [0, 1],
            [0, 0],
        ],
        source: 0,
        expected: [0, 1],
    },
    {
        graph: [
            [0, 4, 0, 0, 0, 0, 0, 8, 0],
            [4, 0, 8, 0, 0, 0, 0, 11, 0],
            [0, 8, 0, 7, 0, 4, 0, 0, 2],
            [0, 0, 7, 0, 9, 14, 0, 0, 0],
            [0, 0, 0, 9, 0, 10, 0, 0, 0],
            [0, 0, 4, 14, 10, 0, 2, 0, 0],
            [0, 0, 0, 0, 0, 2, 0, 1, 6],
            [8, 11, 0, 0, 0, 0, 1, 0, 7],
            [0, 0, 2, 0, 0, 0, 6, 7, 0],
        ],
        source: 0,
        expected: [0, 4, 12, 19, 21, 11, 9, 8, 14],
    },
];

testCases.forEach(({ graph, source, expected }, index) => {
    const result = dijkstra(graph, source);
    assert.deepStrictEqual(result, expected, `Test case ${index + 1} failed`);
});

console.log("All tests passed!");


const expected4 = { A: 0, B: 1, C: 3, D: 6 };
assert.deepStrictEqual(dijkstra(graph4, 'A'), expected4);

console.log('All Tests Passed!');
