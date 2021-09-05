const buildGraph = (edges) => {
  let graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const hasPath = (graph, src, dst, visited) => {
  if (visited.has(src)) return false;
  visited.add(src)
  if (src == dst) return true;
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited)) {
      return true;
    }
  }
  return false;
};

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const hasPath = (graph, nodeA, nodeB, new Set());
  return hasPath;
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

undirectedPath(edges, "j", "m");
