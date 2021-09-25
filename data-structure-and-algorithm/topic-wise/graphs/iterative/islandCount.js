const explore = (grid, row, column, visited) => {
  if (visited.has(`${row}-${column}`) || grid[row][column] == "W") {
    visited.add(`${row}-${column}`);
    return false;
  }
  const rowLimit = {
    min: 0,
    max: grid.length,
  };
  const columnLimit = {
    min: 0,
    max: grid[0].length,
  };
  let queue = [[row, column]];

  const isValid = (r, c) => {
    return (
      r >= rowLimit.min &&
      r < rowLimit.max &&
      c >= columnLimit.min &&
      c < columnLimit.max
    );
  };

  while (queue.length) {
    const [cRow, cColumn] = queue.shift();
    const key = `${cRow}-${cColumn}`;
    if (!visited.has(key) && grid[cRow][cColumn] == 'L') {
      visited.add(key);
      const neighbors = [
        ...(isValid(cRow - 1, cColumn) ? [[cRow - 1, cColumn]] : []),
        ...(isValid(cRow, cColumn + 1) ? [[cRow, cColumn + 1]] : []),
        ...(isValid(cRow + 1, cColumn) ? [[cRow + 1, cColumn]] : []),
        ...(isValid(cRow, cColumn - 1) ? [[cRow, cColumn - 1]] : []),
      ];
      for (let neighbor of neighbors) queue.push(neighbor);
    }
  }

  return true;
};

const islandCount = (grid) => {
  let visited = new Set();
  let counter = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (explore(grid, row, column, visited)) counter++;
    }
  }

  return counter;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(islandCount(grid)); // -> 3
