'use strict';

// Given a string, write a function to check if it is a permutation of a palindrome.

// YP: O(N) TIME, O(N) SPACE
export function palindromePerm(str){
  // aabb
  if (!str) return false;
  str = str.replace(/\s+/g, '');

  const letterHash = {};
  let oddCounter = 0;

  for (let i = 0; i<str.length; i++){
    const letter = str[i];
    if(!letterHash[letter]) letterHash[letter] = 1;
    else letterHash[letter]++;
  }

  for (const key in letterHash){
    if (letterHash[key] % 2 !== 0) oddCounter++;
  }

  return !(oddCounter > 1);
}




// 0(N) TIME -- O(N) SPACE
export function palindromePermutation(str) {
  if (!str) return false;

  str = str.toLowerCase();

  const letterMap = new Set();
  for (const letter of str) {
    if (letter !== ' ') {
      if (letterMap.has(letter)) letterMap.delete(letter);
      else letterMap.add(letter);
    }
  }

  return letterMap.size <= 1;
}
