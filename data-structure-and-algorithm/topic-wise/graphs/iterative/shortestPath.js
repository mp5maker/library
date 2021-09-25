const buildGraph = (edges) => {
  let graph = {};
  for (let edge of edges) {
    const [first, second] = edge;
    graph[first] = [...(graph[first] ? [...graph[first], second] : [second])];
    graph[second] = [...(graph[second] ? [...graph[second], first] : [first])];
  }

  return graph;
};

const shortestPath = (edges, src, dest) => {
  const graph = buildGraph(edges);
  const visited = new Set();
  let queue = [[String(src), 0]];

  while (queue.length) {
    const [current, distance] = queue.shift();
    if (!visited.has(current)) {
      visited.add(current);
      if (current == dest) return distance;
      const neighbors = graph[current];
      for (let neighbor of neighbors) queue.push([String(neighbor), distance + 1]);
    }
  }

  return -1
};

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

console.log(shortestPath(edges, "w", "z")); // 2
