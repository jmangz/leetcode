// Given a sorted array and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
//
// You may assume no duplicates in the array.
//
// Example 1:
//
// Input: [1,3,5,6], 5
// Output: 2
// Example 2:
//
// Input: [1,3,5,6], 2
// Output: 1
// Example 3:
//
// Input: [1,3,5,6], 7
// Output: 4
// Example 4:
//
// Input: [1,3,5,6], 0
// Output: 0

// Original attempt
function searchInsert(nums, target) {
  const { length } = nums;

  if (nums[0] > target) return 0;

  for (let i = 0; i < length; i += 1) {
    const num = nums[i];
    const next = nums[i + 1];
    if (num === target) return i;
    if (num < target && next > target) return i + 1;
    if (num < target && i === length - 1) return length;
  }
}

// Optimized solution
function searchInsert(nums, target) {
  const { length } = nums;

  for (var i = 0; i < length; i += 1) {
    if (nums[i] >= target) return i;
  }

  return length;
}
