'use strict';
const BinaryTree = require('./Graph').BinaryTree;

function findSuccessor(node) {
  if (node === null) return null;

  // if right child, traverse subtree
  if (node.right !== null) {
    return leftMostChild(node.right);
  }
  // no subtree available, look for upstream parent
  else {
    let parent = node.parent;
    // wait until we find a left child, if present
    while (parent !== null && parent.left !== node) {
      node = parent;
      parent = parent.parent;
    }
    return parent;
  }

  function leftMostChild(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
}

// TESTS
let testTree = new BinaryTree();
testTree.append(2);
testTree.append(1);
testTree.append(3);

console.assert(findSuccessor(testTree.root.left).data === 2);
console.assert(findSuccessor(testTree.root.right) === null);
