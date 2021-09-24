/**
 * Acycle graph
 */
const hasPath = (graph, src, dest) => {
  if (src == dest) return true;

  const neightbors = graph[src];
  for (let neighbor of neightbors) {
    if (hasPath(graph, neighbor, dest)) return true;
  }

  return false;
};

const graph = {
  f: ["g", "i"],
  i: ["g", "k"],
  g: ["h"],
  j: ["i"],
  h: [],
};

console.log(hasPath(graph, "f", "k"));
