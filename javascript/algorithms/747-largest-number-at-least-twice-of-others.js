// In a given integer array nums, there is always exactly one largest element.
//
// Find whether the largest element in the array is at least twice
// as much as every other number in the array.
//
// If it is, return the index of the largest element, otherwise return -1.
//
// Example 1:
//
// Input: nums = [3, 6, 1, 0]
// Output: 1
// Explanation: 6 is the largest integer, and for every other number in the array x,
// 6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
//
//
// Example 2:
//
// Input: nums = [1, 2, 3, 4]
// Output: -1
// Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
//
//
// Note:
//
// nums will have a length in the range [1, 50].
// Every nums[i] will be an integer in the range [0, 99].

function dominantIndex(nums) {
  let largest = null;
  let largestI = null;

  nums.forEach((num, i) => {
    if (largest === null || largest < num) {
      largest = num;
      largestI = i;
    }
  });

  for (let i = 0; i < nums.length; i += 1) {
    if (i !== largestI) {
      const num = nums[i];
      if (largest < num * 2) return -1;
    }
  }

  return largestI;
}

// Better O(n) time.
function dominantIndex(nums) {
  let largest = 0;
  let largestIndex = -1;
  for (let i = 0; i < nums.length; i += 1) {
    const current = nums[i];
    if (current / 2 >= largest) {
      largest = current;
      largestIndex = i;
    } else if (largest / 2 < current) {
      largestIndex = -1;
    }
  }
  return largestIndex;
}
