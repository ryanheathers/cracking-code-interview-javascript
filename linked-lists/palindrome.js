'use strict';
let LinkedList = require('./LinkedList').LinkedList;

function palindrome(list) {
  let arr = [];
  let current = list.head;

  while (current) {
    arr.push(current.data);
    current = current.next;
  }

  return arr.toString() === arr.reverse().toString();
}

// TEST
let list = new LinkedList();
list.add('t');
list.add('a');
list.add('c');
list.add('o');
list.add('c');
list.add('a');
list.add('t');

console.log(palindrome(list));
