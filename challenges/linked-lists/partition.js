'use strict';

function partition(list, value) {
  let current = list.head;
  let left = new LinkedList();
  let leftEnd = null;
  let right = new LinkedList();
  let rightEnd = null;

  while (current) {
    let next = current.next;
    if (current.data < value) {
      if (left.head === null) {
        left.head = current;
        leftEnd = current;
      }
      else {
        leftEnd.next = current;
        leftEnd = current;
      }
    }
    else {
      if (right.head === null) {
        right.head = current;
        rightEnd = current;
      }
      else {
        rightEnd.next = current;
        rightEnd = current;
        rightEnd.next = null;
      }
    }
    current = next;
  }

  if (left.head === null) {
    list = right;
    return list;
  }

  leftEnd.next = right.head;
  list = left;
  return list;
}
