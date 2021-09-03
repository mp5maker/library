const hasPath = (graph, src, dst) => {
  const queue = [src]

  while (queue.length > 0) {
    const current = queue.shift()
    if (current == dst) return true
    for (let neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }

  return false
};

const graph = {
  f: ["g", "i"],
  i: ["g", "k"],
  g: ["h"],
  j: ["i"],
  h: [],
};

console.log(hasPath(graph, "f", "k"));
