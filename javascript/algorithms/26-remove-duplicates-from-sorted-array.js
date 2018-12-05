// Given a sorted array nums, remove the duplicates in-place such
// that each element appear only once and return the new length.
//
// Do not allocate extra space for another array, you must
// do this by modifying the input array in-place with O(1) extra memory.
//
// Example 1:
//
// Given nums = [1,1,2],
//
// Your function should return length = 2, with the first two
// elements of nums being 1 and 2 respectively.
//
// It doesn't matter what you leave beyond the returned length.
// Example 2:
//
// Given nums = [0,0,1,1,1,2,2,3,3,4],
//
// Your function should return length = 5, with the first five elements
// of nums being modified to 0, 1, 2, 3, and 4 respectively.
//
// It doesn't matter what values are set beyond the returned length.
// Clarification:
//
// Confused why the returned value is an integer but your answer is an array?
//
// Note that the input array is passed in by reference,
// which means modification to the input array will be known to the caller as well.
//
// Internally you can think of this:
//
// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeDuplicates(nums);
//
// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }

// function removeDuplicates(nums) {
//   let starting = 0;
//   let count = 0;
//   let dup = false;
//   const { length } = nums;
//
//   for (let i = 0; i < length - 1; i += 1) {
//     const num1 = nums[i];
//     const num2 = nums[i + 1];
//     if (dup && (num1 === num2)) {
//       count += 1;
//     } else if (num1 === num2) {
//       dup = true;
//       count += 1;
//     } else if (dup && num1 !== num2) {
//       dup = false;
//       nums.splice(starting, count);
//       i = starting;
//       starting = i + 1;
//       count = 0;
//     } else {
//       starting = i + 1;
//     }
//   }
//
//   if (count !== 0) nums.splice(starting, count);
//
//   return nums.length;
// }

// Leetcode solution
const removeDuplicates = function (nums) {
  let j = 0;
  for (let i = 0; i <= nums.length; i++) {
    // check if next number in array is a duplicate
    if (nums[j] !== nums[i]) {
      // if not duplicate, add it to the new nums array of unique numbers
      nums[++j] = nums[i];
    }
    console.log(nums);
  }

  return j;
};
