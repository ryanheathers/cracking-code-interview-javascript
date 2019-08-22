'use strict';
const BinaryTree = require('./Graph').BinaryTree;
const LinkedList = require('../linked-lists/LinkedList').LinkedList;

function listOfDepths(binaryTree) {
  if (binaryTree.root === null) return;

  const lists = [];
  treeTraversal(binaryTree.root, 0); // build up arr of lists by traversing tree recursively
  return lists;

  function treeTraversal(node, depth) {
    if (node !== null) {
      // check if arr has an existing list at [depth]
      // if so push new node into linked list
      if (lists[depth]) {
        lists[depth].add(node);
      }
      // if not, create new linked list at arr[depth]
      else {
        let list = new LinkedList();
        list.add(node);
        lists[depth] = list;
      }

      // continue recursing through tree
      treeTraversal(node.left, depth + 1);
      treeTraversal(node.right, depth + 1);
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
console.log(testTree);

let lists = listOfDepths(testTree)
console.log(lists);
