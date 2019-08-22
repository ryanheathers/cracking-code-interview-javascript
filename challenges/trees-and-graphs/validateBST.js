'use strict';
const BinaryTree = require('./Graph').BinaryTree;

function validateBST(node, min, max) {
  if (node === null) return true;

  if ((min !== null && node.data <= min) || (max !== null && node.data > max)) {
    return false;
  }

  if (!validateBST(node.left, min, node.data) || !validateBST(node.right, node.data, max)) {
    return false;
  }

  return true;
}

// TESTS
let testTree = new BinaryTree();
testTree.append(2);
testTree.append(1);
testTree.append(3);

console.log(validateBST(testTree.root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY));
