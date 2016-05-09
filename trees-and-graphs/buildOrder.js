'use strict';

class DependencyNode {
  constructor(data) {
    this.data = data;
    this.dependents = [];
    this.dependencies = [];
    this.dependencyCounter = 0;
  }
  addDependent(node) {
    this.dependents.push(node);
  }
  addDependency(node) {
    this.dependencies.push(node);
    this.dependencyCounter++;
  }
  getDependents() {
    return this.dependents;
  }
  getDependencies() {
    return this.dependencies;
  }
  decrementDependencies() {
    this.dependencyCounter--;
  }
  getNumberDependencies() {
    return this.dependencyCounter;
  }
}

class DependencyGraph {
  constructor() {
    this.nodes = [];
  }
  add(data) {
    const node = new DependencyNode(data);
    this.nodes.push(node);
    return node;
  }
  // the end node is dependent on the start node
  addEdge(start, end) {
    const startIndex = this.nodes.indexOf(start);
    const endIndex = this.nodes.indexOf(end);

    if (startIndex === -1) return 'Starting point not found';
    if (endIndex === -1) return 'End point not found';

    this.nodes[startIndex].addDependent(this.nodes[endIndex]);
    this.nodes[endIndex].addDependency(this.nodes[startIndex]);
  }
  getNodes() {
    return this.nodes;
  }
}

function buildOrder(graph) {
  const order = [];

  // initialize order with nodes that start with zero dependencies
  addNonDependents(order, graph.getNodes());

  let toBeProcessed = 0;
  while (toBeProcessed < order.length) {
    let current = order[toBeProcessed];

    // remove current as a dependency of its children
    let dependents = current.getDependents();
    for (let dependent of dependents) {
      dependent.decrementDependencies();
    }

    addNonDependents(order, dependents);
    toBeProcessed++;
  }

  if (toBeProcessed < graph.getNodes().length) {
    return new Error("Circular graph detected, no build order possible");
  }
  else {
    return order;
  }
}

// Helper function to find and add nodes with zero remaining dependencies
function addNonDependents(order, projects) {
  for (let project of projects) {
    if (project.getNumberDependencies() === 0) {
      order.push(project);
    }
  }
}

// TESTS
let testGraph = new DependencyGraph();
let a = testGraph.add('a');
let b = testGraph.add('b');
let c = testGraph.add('c');
let d = testGraph.add('d');
let e = testGraph.add('e');
let f = testGraph.add('f');
let g = testGraph.add('g');

testGraph.addEdge(f, c);
testGraph.addEdge(f, b);
testGraph.addEdge(f, a);
testGraph.addEdge(c, a);
testGraph.addEdge(b, a);
testGraph.addEdge(a, e);
testGraph.addEdge(d, g);

console.log(buildOrder(testGraph));
