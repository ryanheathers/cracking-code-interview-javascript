'use strict';

// Implement Graph and Tree classes
class Node {
  constructor(data) {
    this.data = data;
    this.edges = [];
    this.visited = false;
  }
  addEdge(end) {
    this.edges.push(end);
  }
}

class Graph {
  constructor() {
    this.nodes = [];
  }
  add(data) {
    const node = new Node(data);
    this.nodes.push(node);
    return node;
  }
  addEdge(start, end) {
    const first = this.nodes.indexOf(start);
    const second = this.nodes.indexOf(end);

    if (first === -1) return 'Starting point not found';
    if (second === -1) return 'End point not found';

    this.nodes[first].addEdge(end);
  }
  addUndirectedEdge(start, end) {
    const first = this.nodes.indexOf(start);
    const second = this.nodes.indexOf(end);

    if (first === -1) return 'Starting point not found';
    if (second === -1) return 'End point not found';

    this.nodes[first].addEdge(end);
    this.nodes[second].addEdge(start);
  }
  printNodes() {
    for (let i = 0; i < this.nodes.length; i++) {
      console.log(`${this.nodes[i].data} :`);
      console.log(this.nodes[i].edges);
    }
  }
}

class BinaryNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = new BinaryNode(null);
  }
  prettyPrint(node = this.root) {
    if (node.left !== null) {
      this.prettyPrint(node.left);
    }
    console.log(node.data + ', ');
    if (node.right !== null) {
      this.prettyPrint(node.right);
    }
  }
  append() {
    // TODO
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(data) {
    super(data);
  }
  append(data) {
    if (this.root.data === null) {
      this.root.data = data;
    }
    else {
      const current = this.root;
      this.appendTo(current, data);
    }
  }
  appendTo(current, data) { // Buggy, doesn't rebalance tree
    if (data <= current.data) {
      if (current.left === null) {
        current.left = new BinaryNode(data);
      }
      else {
        this.appendTo(current.left, data);
      }
    }
    else {
      if (current.right === null) {
        current.right = new BinaryNode(data);
      }
      else {
        this.appendTo(current.right, data);
      }
    }
  }
}

module.exports = {
  Node,
  Graph,
  BinaryNode,
  BinaryTree,
  BinarySearchTree
};
