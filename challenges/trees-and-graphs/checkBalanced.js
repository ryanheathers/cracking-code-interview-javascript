'use strict';
const BinaryTree = require('./Graph').BinaryTree;

function checkBalanced(tree) {
  return checkHeight(tree.root) !== Number.MIN_VALUE;

  function checkHeight(node) {
    if (node === null) return -1;

    let leftHeight = checkHeight(node.left);
    if (leftHeight === Number.MIN_VALUE) return Number.MIN_VALUE;

    let rightHeight = checkHeight(node.right);
    if (rightHeight === Number.MIN_VALUE) return Number.MIN_VALUE;

    let heightDiff = leftHeight - rightHeight;
    if (Math.abs(heightDiff) > 1) {
      return Number.MIN_VALUE;
    }
    else {
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
}

// TESTS
let testTree = new BinaryTree();
testTree.append(1);
testTree.append(2);
testTree.append(3);
testTree.append(4);
testTree.append(5);
testTree.append(6);
testTree.append(7);
testTree.append(8);
testTree.append(9);
testTree.append(10);
testTree.append(11);
testTree.append(12);
testTree.append(13);
testTree.append(14);
testTree.append(15);

console.log(testTree);

console.log(checkBalanced(testTree));
