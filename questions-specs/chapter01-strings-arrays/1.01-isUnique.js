'use strict';

// USING REGEX
export const isUniqueRegex = str => !/(.).*\1/.test(str);

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(Nˆ2) TIME --- O(1) SPACE
export function isUnique1(str) {
  const strLength = str.length;

  for (let i = 0; i < strLength; i++) {
    for (let x = i + 1; x < strLength; x++) {
      if (str[i] === str[x]) return false;
    }
  }

  return true;
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// USING A SET

export const isUniqueSet = str => new Set(str).size === str.length;

// O(N) TIME --- O(N) SPACE
export function isUnique2(str) {
  const letterSet = new Set();

  for (const letter of str) {
    if (letterSet.has(letter)) return false;
    letterSet.add(letter);
  }

  return true;
}


// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(N log N) TIME --- O(1) SPACE
export function isUnique3(str) {
  str = str.split``.sort();
  const length = str.length;

  for (let i = 0; i < length; i++) {
    if (str[i] === str[i + 1]) return false;
  }

  return true;
}

// YP: O(N^2) TIME, O(N) SPACE ?
export function isUnique4(str) {
  let compare = '';
  for(const letter of str) {
    if(compare.indexOf(letter) === -1) compare += letter;
    else return false
  }
  return true;
}

// YP: O(N) TIME, O(N) SPACE ?
export function isUnique5(str) {
  const chars = {};
  for (const letter of str){
    if(chars[letter]) return false;
    else chars[letter] = true;
  }
  return true;
}