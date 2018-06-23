// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Example
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

function LinkedList(val) {
  this.val = val;
  this.next = null;
}
// Original attempt
function addTwoNumbers(list1, list2) {
  let current1 = list1;
  let current2 = list2;
  const result = [];
  let carry = 0;

  while (current1 || current2) {
    if (!current1) {
      let sum = current2.val + carry;
      if (sum >= 10) {
        sum -= 10;
        carry = 1;
      } else carry = 0;
      result.push(sum);
    } else if (!current2) {
      let sum = current1.val + carry;
      if (sum >= 10) {
        sum -= 10;
        carry = 1;
      } else carry = 0;
      result.push(sum);
    } else {
      let sum = current1.val + current2.val + carry;
      if (sum >= 10) {
        sum -= 10;
        carry = 1;
      } else carry = 0;
      result.push(sum);
    }
    if (!current1) current2 = current2.next;
    else if (!current2) current1 = current1.next;
    else {
      current1 = current1.next;
      current2 = current2.next;
    }
  }
  if (carry === 1) result.push(1);
  if (result[result.length - 1] >= 10) {
    result[result.length - 1] -= 10;
    result.push(1);
  }
  return result;
}

// Refactor with linked list
function addTwoNumbers(link1, link2) {
  let current1 = link1;
  let current2 = link2;
  const dummyHead = new LinkedList(0);
  let current = dummyHead;
  let carry = 0;

  while (current1 || current2) {
    const x = current1 ? current1.val : 0;
    const y = current2 ? current2.val : 0;
    const sum = x + y + carry;
    carry = sum >= 10 ? 1 : 0;
    current.next = new LinkedList(sum % 10);
    current = current.next;
    if (current1) current1 = current1.next;
    if (current2) current2 = current2.next;
  }

  if (carry > 0) current.next = new LinkedList(1);

  return dummyHead.next;
}

// Refactor to pass LeetCode
function addTwoNumbers(link1, link2) {
  let current1 = link1;
  let current2 = link2;
  let carry = 0;
  const result = [];

  while (current1 || current2) {
    const x = current1 ? current1.val : 0;
    const y = current2 ? current2.val : 0;
    const sum = x + y + carry;
    carry = sum >= 10 ? 1 : 0;
    result.push(sum % 10);
    if (current1) current1 = current1.next;
    if (current2) current2 = current2.next;
  }

  if (carry > 0) result.push(1);

  return result;
}
