'use strict';
const Stack = require('./Stack').Stack;

function sortStack(stack) {
  const otherStack = new Stack();
  while (!stack.isEmpty()) {
    let temp = stack.pop();
    while (!otherStack.isEmpty() && otherStack.peek().data > temp) {
      stack.push(otherStack.pop());
    }
    otherStack.push(temp);
  }
  return otherStack;
}

// TEST
const testStack = new Stack();
testStack.push(5);
testStack.push(8);
testStack.push(1);
testStack.push(7);
testStack.push(3);
testStack.push(12);
testStack.push(9);
testStack.push(14);

console.log(testStack);
console.log(sortStack(testStack));
