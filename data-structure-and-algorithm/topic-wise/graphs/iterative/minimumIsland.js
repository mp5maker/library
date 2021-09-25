const explore = (grid, r, c, visited) => {
  if (visited.has(`${r}-${c}`) || grid[r][c] == "W") {
    visited.add(`${r}-${c}`);
    return 0;
  }

  const rl = { min: 0, max: grid.length };
  const cl = { min: 0, max: grid[0].length };
  const check = (rr, cc) =>
    rr >= rl.min && rr < rl.max && cc >= cl.min && cc < cl.max;

  const queue = [[r, c]];
  let counter = 0

  while (queue.length) {
    const [rr, cc] = queue.shift();
    const key = `${rr}-${cc}`
    if (!visited.has(key) && grid[rr][cc] == 'L') {
      visited.add(key)
      counter++
      const neighbors = [
        ...(check(rr - 1, cc) ? [[rr - 1, cc]] : []),
        ...(check(rr, cc - 1) ? [[rr, cc - 1]] : []),
        ...(check(rr + 1, cc) ? [[rr + 1, cc]] : []),
        ...(check(rr, cc + 1) ? [[rr, cc + 1]] : []),
      ]
      for (let neighbor of neighbors) queue.push(neighbor)
    }
  }

  return counter
};

const minimumIsland = (grid) => {
  let min = null;
  const visited = new Set();

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const explored = explore(grid, r, c, visited);
      if (explored !== 0 && (min == null || explored < min)) min = explored;
    }
  }

  return min
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(minimumIsland(grid)); // -> 2
