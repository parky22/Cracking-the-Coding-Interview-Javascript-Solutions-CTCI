'use strict';

//QUESTION: Implement an algorithm to find the kth to last element of a singly linked list.

// YP: (counter) O(N) TIME, O(1) SPACE
// [8, 5, 1], 0
export function KthToLastYP(list, k) {
  if(!list) throw Error('invalid list');

  let counter = -1;
  let currentNode = list;
  // First count all the nodes
  while(currentNode){
    counter++;
    currentNode = currentNode.next;
  }
  // Check if k is greater than counter.
  if(k > counter) throw Error('list is not long enough');

  // k=0, counter=2
  // k=1, counter=1
  // k=2, counter=0
  while(counter > k){
    list = list.next;
    counter--;
  }

  return list.value;
}


















// USING A RUNNER
// O(N) TIME --- O(1) SPACE

export function KthToLast1(list, k) {
  if (!list) throw Error('invalid list');

  let aheadPointer = list, behindPointer = list;

  for (let i = 0; i < k; i++) {
    if (!aheadPointer.next) throw Error('list is not long enough');
    aheadPointer = aheadPointer.next;
  }

  while (aheadPointer.next) {
    aheadPointer = aheadPointer.next;
    behindPointer = behindPointer.next;
  }

  return behindPointer.value;
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// USING A COUNTER

export function KthToLast2(list, k) {
  if (!list) throw Error('invalid list');

  let indexCounter = -1, head = list;

  while (head) {
    indexCounter++;
    head = head.next;
  }

  if (indexCounter < k) throw Error('list is not long enough');

  while (indexCounter-- > k) list = list.next;

  return list.value;
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// RECURSIVE METHOD. ONLY PRINTS THE Kth TO LAST NODE. DOES NOT RETURN IT.
// O(N) SPACE

function printKthToLast(list, k) {
  if (!list) return 0; // Can Return -1 if input for k is 0
  let index = printKthToLast(list.next, k) + 1;
  if (index === k) console.log(k + 'th to last node is' + list.value);
  return index;
}

// printKthToLast({value: 8, next: {value: 5, next: {value: 1, next: null}}}, 2);
