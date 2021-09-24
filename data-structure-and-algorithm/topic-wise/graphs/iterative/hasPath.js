const hasPath = (graph, src, dest) => {
  const stack = [src]

  while(stack.length > 0) {
    const current = stack.pop()
    if (current == dest) return true
    const neighbors = graph[current]
    for (let neighbor of neighbors) stack.push(neighbor)
  }

  return false
}

const graph = {
  f: ["g", "i"],
  i: ["g", "k"],
  g: ["h"],
  j: ["i"],
  h: [],
};

console.log(hasPath(graph, "f", "k"));
