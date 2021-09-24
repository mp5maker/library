const explore = (graph, node, visited) => {
  if (visited.has(node)) return 0

  const stack = [node]
  let counter = 0

  while(stack.length) {
    const current = String(stack.pop())
    if (!visited.has(current)) {
      counter++
      visited.add(current)
      const neighbors = graph[current]
      for (let neighbor of neighbors) stack.push(neighbor)
    }
  }

  return counter
}

const largestComponent = (graph) => {
  const visited = new Set()
  let max = 0
  const nodes = Object.keys(graph)

  for (let node of nodes) {
    const explored = explore(graph, node, visited)
    if (explored) max = Math.max(max, explored)
  }

  return max
}






console.log(
  largestComponent({
    0: ["8", "1", "5"],
    1: ["0"],
    5: ["0", "8"],
    8: ["0", "5"],
    2: ["3", "4"],
    3: ["2", "4"],
    4: ["3", "2"],
  })
); // 4