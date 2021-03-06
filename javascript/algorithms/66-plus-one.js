// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
//
// The digits are stored such that the most significant digit is at the head of the list,
// and each element in the array contain a single digit.
//
// You may assume the integer does not contain any leading zero, except the number 0 itself.
//
// Example 1:
//
// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:
//
// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

function plusOne(digits) {
  const results = [];
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i -= 1) {
    const digit = digits[i];
    let toUnshift = digit + carry;
    if (toUnshift >= 10) {
      toUnshift = 0;
      carry = 1;
    } else carry = 0;
    results.unshift(toUnshift);
  }

  if (carry === 1) results.unshift(1);

  return results;
}
