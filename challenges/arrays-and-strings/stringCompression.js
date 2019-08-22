"use strict";

function stringCompression(string) {
  let compressedArr = [];
  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    counter++;

    if (i + 1 >= string.length || string.charAt(i) !== string.charAt(i + 1)) {
      compressedArr.push(string.charAt(i));
      compressedArr.push(counter);
      counter = 0;
    }
  }
  let compressed = compressedArr.join('');
  return compressed.length < string.length ? compressed : string;
}

console.log('Compress the string "aabcccccaaa": ' + stringCompression('aabcccccaaa'));
