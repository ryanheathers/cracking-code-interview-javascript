'use strict';
const BinaryTree = require('./Graph').BinaryTree;

function commonAncestor(root, n1, n2) {
  // Check if either node is not in tree, or if one covers the other
  if(!covers(root, n1) || !covers(root, n2)) {
    return null;
  }
  else if (covers(n1, n2)) {
    return n1;
  }
  else if (covers(n2, n1)) {
    return n2;
  }

  // Traverse tree, starting with n1 as reference point, until you find a node that covers n2
  let sibling = getSibling(n1);
  let parent = n1.parent;
  while (!covers(sibling, n2)) {
    sibling = getSibling(parent);
    parent = parent.parent;
  }
  return parent;
}

function covers(root, target) {
  if (root === null) return false;
  if (root === target) return true;
  return covers(root.left, target) || covers(root.right, target);
}

function getSibling(node) {
  if (node === null || node.parent === null) {
    return null;
  }
  let parent = node.parent;
  return parent.left === node ? parent.right : parent.left;
}

// TESTS
let testTree = new BinaryTree();
testTree.append(2);
testTree.append(5);
testTree.append(7);
testTree.append(1);
let n1 = testTree.append(3);
let n2 = testTree.append(9);

console.log(testTree);
console.log(commonAncestor(testTree.root, n1, n2));

debugger;

