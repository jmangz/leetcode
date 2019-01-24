// Given a collection of distinct integers, return all possible permutations.
//
// Example:
//
// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

function permute(nums) {
  const results = [];

  function permutations(current, remaining) {
    if (remaining.length <= 0) results.push(current.slice());
    else {
      for (let i = 0; i < remaining.length; i += 1) {
        current.push(remaining[i]);
        permutations(current.slice(), remaining.slice(0, i).concat(remaining.slice(i + 1)));
        current.pop();
      }
    }
  }

  permutations([], nums);

  return results;
}
