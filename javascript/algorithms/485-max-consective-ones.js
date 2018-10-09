// Given a binary array, find the maximum number of consecutive 1s in this array.
//
// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:
//
// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000

function findMaxConsecutiveOnes(nums) {
  let max = 0;
  let currentCount = 0;

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    if (num === 1 && currentCount >= max) {
      currentCount += 1;
      max = currentCount;
    } else if (num === 1) currentCount += 1;
    else currentCount = 0;
  }

  return max;
}
