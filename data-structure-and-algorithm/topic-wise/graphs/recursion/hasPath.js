const hasPath = (graph, src, dst) => {
  if (src == dst) return true;

  for (let neightbor of graph[src]) {
    if (hasPath(graph, neightbor, dst)) {
      return true;
    }
  }
  return false;
};

const graph = {
  f: ['g', 'i'],
  i: ['g', 'k'],
  g: ['h'],
  j: ['i'],
  h: [],
};

console.log(hasPath(graph, 'f', 'k'));
