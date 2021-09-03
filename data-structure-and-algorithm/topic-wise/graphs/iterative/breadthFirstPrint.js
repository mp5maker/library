const breadthFirstPrint = (graph, source) => {
  const queue = [ source ];

  while (queue.length > 0) {
    const shift = queue.shift()
    console.log(shift)
    for (let neighbor of graph[shift]) {
      queue.push(neighbor)
    }
  }
}

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

breadthFirstPrint(graph, 'a')