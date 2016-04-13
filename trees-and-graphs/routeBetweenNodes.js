'use strict';
const Graph = require('./Graph').Graph;
const Queue = require('../stacks-and-queues/Queue').Queue;

function routeBetweenNodes(start, end) {
  if (start === end) return true;

  const queue = new Queue();
  start.visited = true;
  queue.add(start);

  while (!queue.isEmpty()) {
    let n = queue.remove();
    if (n.data === end) {
      return true;
    }
    debugger;

    for (let edge of n.data.edges) {
      if (edge.visited === false) {
        edge.visited = true;
        queue.add(edge);
      }
    }
  }

  return false;
}

// TESTS
const testGraph = new Graph();
let n1 = testGraph.add(1);
let n2 = testGraph.add(2);
let n3 = testGraph.add(3);
console.log(testGraph);

testGraph.addEdge(n1, n2);
testGraph.addEdge(n2, n3);

console.log(routeBetweenNodes(n1, n3));

debugger;
