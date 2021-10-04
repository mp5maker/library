const explore = (grid, row, col, visited) => {
  const key = `${row}-${col}`;
  if (visited.has(key)) return 0;

  const queue = [[row, col]];
  let perimeter = 0;

  const check = (r, c) =>
    r >= 0 && r < grid.length && c >= 0 && c < grid[0].length;

  while (queue.length) {
    const [r, c] = queue.shift();
    const newKey = `${r}-${c}`;
    if (!visited.has(key) && grid[r][c] === 1) {
      visited.add(key);

      const down = check(r + 1, c);
      const up = check(r - 1, c);
      const right = check(r, c + 1);
      const left = check(r, c - 1);

      let counter = 0;
      if (!down || grid[r + 1][c] != 1) counter++;
      if (!up || grid[r - 1][c] != 1) counter++;
      if (!right || grid[r][c + 1] != 1) counter++;
      if (!left || grid[r][c - 1] != 1) counter++;
      perimeter += counter;

      const neighbors = [
        ...(down ? [[r + 1, c]] : []),
        ...(up ? [[r - 1, c]] : []),
        ...(right ? [[r, c + 1]] : []),
        ...(left ? [[r + 1, c - 1]] : []),
      ];

      queue.push(...neighbors);
    }
  }

  return perimeter;
};

var islandPerimeter = function (grid) {
  const rowLength = grid.length;
  const colLength = grid[0].length;
  const visited = new Set();
  let perimeter = 0;

  for (let r = 0; r < rowLength; r++) {
    for (let c = 0; c < colLength; c++) {
      const explored = explore(grid, r, c, visited);
      if (explored) perimeter += explored;
    }
  }

  return perimeter;
};
