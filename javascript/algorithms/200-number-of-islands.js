// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
// An island is surrounded by water and is formed by connecting adjacent
// lands horizontally or vertically.
// You may assume all four edges of the grid are all surrounded by water.
//
// Example 1:
//
// Input:
// 11110
// 11010
// 11000
// 00000
//
// Output: 1
// Example 2:
//
// Input:
// 11000
// 11000
// 00100
// 00011
//
// Output: 3

function checkAdjacent(map, x, y) {
  if (x < 0 || x >= map.length || y < 0 || y >= map[0].length) return undefined;

  if (map[x][y] === '1') {
    map[x][y] = '#';
    checkAdjacent(map, x - 1, y);
    checkAdjacent(map, x, y + 1);
    checkAdjacent(map, x + 1, y);
    checkAdjacent(map, x, y - 1);
  }
}

function numIslands(grid) {
  let count = 0;
  const { length } = grid;

  for (let i = 0; i < length; i += 1) {
    const row = grid[i];
    for (let j = 0; j < row.length; j += 1) {
      const coordinate = row[j];
      if (coordinate === '1') {
        count += 1;
        checkAdjacent(grid, i, j);
      }
    }
  }

  return count;
}
