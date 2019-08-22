'use strict';
const BinaryNode = require('./Graph').BinaryNode;

function minimalTree(array) {
  return createTree(array, 0, array.length - 1);

  function createTree(arr, start, end) {
    if (end < start) return null;

    let mid = (start + end) / 2;
    let node = new BinaryNode(arr[mid]);
    node.left = createTree(arr, start, mid - 1);
    node.right = createTree(arr, mid + 1, end);
    return node;
  }
}

// TESTS
let testArr = [1,2,3,4,5,6,7];
let testTree = minimalTree(testArr);
console.log(testTree);
