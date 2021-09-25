const countPaths = (grid) => {
  const rows = grid.length - 1;
  const columns = grid[0].length - 1;

  const gridTraveller = (m, n, grid, memo = {}) => {
    const key = `${m}-${n}`;
    if (m == 0 && n == 0) return 1;
    if (m < 0 || n < 0) return 0;
    if (key in memo) memo[key];

    if (grid[m][n] === "O") {
      memo[key] =
        gridTraveller(m - 1, n, grid, memo) +
        gridTraveller(m, n - 1, grid, memo);
    } else memo[key] = 0;

    return memo[key];
  };

  return gridTraveller(rows, columns, grid);
};

const grid = [
  ["O", "O", "X"],
  ["O", "O", "O"],
  ["O", "O", "O"],
];
console.log(countPaths(grid)); // 5
