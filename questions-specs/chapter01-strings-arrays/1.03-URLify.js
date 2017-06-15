'use strict';
// QUESTION: Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the
// "true" length of the string.
// EXAMPLE: "Mr John Smith    ", 13 ==> "Mr%20John%20Smith"

// YP: O(N) TIME, O(N) SPACE
export const URLifyYP = (str) => {
  return str ? str.replace(/\s/g, '%20') : str;
}

export const URLify1 = (str) => str ? str.split` `.join`%20` : str;

export const URLify2 = (str) => str ? str.replace(/\s/g, '%20') : str;

// SOLUTION FROM BOOK
// function URLify(str, trueLength) {
//   let newString = '';
//   for (var i = 0; i < trueLength; i++) {
//     if (str[i] === ' ') newString += '%20';
//     else newString += str[i];
//   }
//   return newString;
// }
