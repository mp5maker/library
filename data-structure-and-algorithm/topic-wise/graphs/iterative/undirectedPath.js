const convertToGraph = (edges) => {
  let graph = {};
  for (let i = 0; i < edges.length; i++) {
    const [first, second] = edges[i];
    graph[first] = [...(graph[first] ? [...graph[first], second] : [second])];
    graph[second] = [...(graph[second] ? [...graph[second], first] : [first])];
  }
  return graph;
};

const hasPath = (graph, src, dest) => {
  const stack = [src];
  const visited = [];

  while (stack.length) {
    const current = stack.pop();
    if (!visited.includes(current)) {
      visited.push(current);
      if (current == dest) return true;
      const neighbors = graph[current];
      for (let neighbor of neighbors) {
        stack.push(neighbor);
      }
    }
  }

  return false;
};

const undirectedPath = (edges, src, dest) => {
  const graph = convertToGraph(edges);
  return hasPath(graph, src, dest);
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.log(undirectedPath(edges, "j", "m"));
