const breadthFirstPrint = (graph, source) => {
  const queue = [source]
  let arr = []

  while(queue.length > 0) {
    const current = queue.shift()
    arr.push(current)
    const neighbors = graph[current]
    for (let neighbor of neighbors) {
      queue.push(neighbor)
    }
  }

  return arr
}

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

console.log(breadthFirstPrint(graph, 'a'))