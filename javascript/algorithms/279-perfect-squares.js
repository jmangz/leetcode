// Given a positive integer n, find the least number of perfect
// square numbers (for example, 1, 4, 9, 16, ...) which sum to n.
//
// Example 1:
//
// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.
// Example 2:
//
// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.

function numSquares(n) {
  const pSquares = [];
  const counts = [];

  for (let i = 1; i <= n; i += 1) {
    if (Math.sqrt(i) % 1 === 0) pSquares.push(i);
  }

  let result = n;

  function check(squares, num, count) {
    if (num === 0) {
      // counts.push(count);
      if (count <= result) result = count;
      return;
    }
    for (let i = squares.length - 1; i >= 0; i -= 1) {
      const square = squares[i];
      if (square <= num) {
        check(squares, num - square, count + 1);
      } else {
        squares = squares.slice(0, i);
      }
    }
  }

  check(pSquares, n, 0);
  // console.log(counts);
  // console.log(pSquares);
  return result;
}

const a = [4, 1, 2];
const b = a.sort();
console.log(b);
// console.log(a.slice(0, a.length - 1));
// console.log(numSquares(54));
