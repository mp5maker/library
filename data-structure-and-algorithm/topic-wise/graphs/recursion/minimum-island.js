const exploreSize = (grid, r, c, visited) => {
  const rowInbound = r >= 0 && r < grid.length;
  const colInbound = c >= 0 && c < grid[0].length;
  if (!rowInbound || !colInbound) return 0;
  if (grid[r][c] == "W") return 0;

  const pos = `${r},${c}`;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;
  size += exploreSize(grid, r - 1, c, visited);
  size += exploreSize(grid, r + 1, c, visited);
  size += exploreSize(grid, r, c - 1, visited);
  size += exploreSize(grid, r, c + 1, visited);
  return size;
};

const minimumIsland = (grid) => {
  let visited = new Set();
  let minSize = Infinity;
  for (let r = 0; r < grid.length; r++) {
    const row = grid[r];
    for (let c = 0; c < row.length; c++) {
      const size = exploreSize(grid, r, c, visited);
      if (size > 0 && size < minSize) minSize = size
    }
  }
  return minSize;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(minimumIsland(grid));
