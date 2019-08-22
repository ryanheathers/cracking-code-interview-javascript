"use strict";
var LinkedList = require('./LinkedList').LinkedList;
var Node = require('./LinkedList').Node;

let listA = new LinkedList();
listA.add(9);
listA.add(7);
listA.add(8);

let listB = new LinkedList();
listB.add(6);
listB.add(8);
listB.add(5);

function sumLists(listA, listB) {
  let p1 = listA.head;
  let p2 = listB.head;
  let sum = new LinkedList();
  let length = (listA._length > listB._length) ? listA._length: listB._length;
  let carryover = 0;

  while (length) {
    let result = carryover;
    if (p1 !== null) {
      result += p1.data;
    }
    if (p2 !== null) {
      result += p2.data;
    }

    carryover = (result >= 10) ? 1 : 0;
    result = result % 10;
    sum.add(result);

    p1 = (p1 !== null) ? p1.next : null;
    p2 = (p2 !== null) ? p2.next : null;
    length--;
  }

  // account for final carryover digit, if applicable
  if (carryover === 1) {
    sum.add(carryover);
  }

  return sum;
}

console.log(sumLists(listA, listB));

function sumListsRecursive(nodeA, nodeB, carry) {
  if (nodeA === null && nodeB === null && carry === 0) {
    return null;
  }

  let result = new Node(null);
  let value = carry;
  if (nodeA !== null) {
    value += nodeA.data;
  }
  if (nodeB !== null) {
    value += nodeB.data;
  }

  result.data = value % 10;

  if (nodeA !== null || nodeB !== null) {
    let more = sumListsRecursive(nodeA === null ? null : nodeA.next,
                    nodeB === null ? null : nodeB.next,
                    value >= 10 ? 1 : 0);
    result.next = more;
  }

  return result;
}

console.log(sumListsRecursive(listA.head, listB.head, 0));


