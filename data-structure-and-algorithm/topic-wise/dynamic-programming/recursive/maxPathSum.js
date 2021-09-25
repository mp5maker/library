const maxPathSum = (grid, r = 0, c = 0, memo = {}) => {
  const key = `${r}-${c}`;
  const m = grid.length;
  const n = grid[0].length;
  if (r >= m || c >= n) return 0;
  if (r == m - 1 && c == n - 1) return grid[r][c];
  if (key in memo) memo[key];

  const down = maxPathSum(grid, r + 1, c, memo);
  const right = maxPathSum(grid, r, c + 1, memo);
  memo[key] = grid[r][c] + Math.max(down, right);

  return memo[key];
};

const grid = [
  [1, 2, 8, 1],
  [3, 1, 12, 10],
  [4, 0, 6, 3],
];
console.log(maxPathSum(grid)); // -> 36
