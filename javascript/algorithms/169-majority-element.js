// Given an array of size n, find the majority element.
// The majority element is the element that appears more than ⌊ n/2 ⌋ times.
//
// You may assume that the array is non-empty and the majority element always exist in the array.
//
// Example 1:
//
// Input: [3,2,3]
// Output: 3
// Example 2:
//
// Input: [2,2,1,1,1,2,2]
// Output: 2

function majorityElement(nums) {
  const count = {};
  const { length } = nums;
  const majority = length / 2;

  for (let i = 0; i < length; i += 1) {
    const num = nums[i];
    if (count[num] === undefined) count[num] = 1;
    else count[num] += 1;
    if (count[num] > majority) return num;
  }
}
