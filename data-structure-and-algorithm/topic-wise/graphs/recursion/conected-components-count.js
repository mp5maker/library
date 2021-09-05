const explore = (graph, node, visited) => {
  if (visited.has(String(node))) return false;
  visited.add(String(node));

  for (let neighbor of graph[node]) {
    explore(graph, neighbor, visited);
  }

  return true;
};

const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let counter = 0;

  for (let node in graph) {
    if (explore(graph, node, visited)) counter++;
  }

  return counter;
};

console.log(connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
}));
