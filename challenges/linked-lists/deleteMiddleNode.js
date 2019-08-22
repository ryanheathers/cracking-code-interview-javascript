'use strict';

function deleteMiddleNode(node) {
  if (node === null || node.next === null) {
    return false;
  }

  let next = node.next;
  node.data = next.data;
  node.next = next.next;
  return true;
}
