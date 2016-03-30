"use strict";

// Example:
// Input: ("Mr John Smith   ", 13)
// Output: "Mr%20John%20Smith"
function urlify(string) {
  return string.trim().split(' ').join('%20');
}

console.log('Urlify "Mr John Smith   ": ' + urlify("Mr John Smith   "));


