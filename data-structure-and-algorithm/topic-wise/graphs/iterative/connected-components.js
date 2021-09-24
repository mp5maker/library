const explore = (graph, node, visited) => {
  if (visited.has(node)) return false

  let stack = [node]
  while(stack.length) {
    const current = String(stack.pop())
    if (!visited.has(current)) {
      visited.add(current)
      const neighbors = graph[current]
      for (let neighbor of neighbors) stack.push(neighbor)
    }
  }

  return true
}


const connectedComponents = (graph) => {
  let count = 0
  const nodes = Object.keys(graph)
  let visited = new Set()

  for (let node of nodes) {
    if (explore(graph, node, visited)) count++
  }

  return count
};

console.log(
  connectedComponents({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  })
); // 2
