// Given a 32-bit signed integer, reverse digits of an integer.
//
// Example 1:
//
// Input: 123
// Output: 321
// Example 2:
//
// Input: -123
// Output: -321
// Example 3:
//
// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers
// within the 32-bit signed integer range: [−231,  231 − 1].
// For the purpose of this problem, assume that your function
// returns 0 when the reversed integer overflows.

function reverse(int) {
  let strForm = String(int).split('').reverse().join('');
  if (int < 0) strForm = `${-strForm.slice(0, strForm.length - 1)}`;
  if (Number(strForm) > ((2 ** 31) - 1) || Number(strForm) < -1 * (2 ** 31)) return 0;

  return Number(strForm);
}

console.log(reverse(-123));
