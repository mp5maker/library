const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

let arr = []
const depthFirstPrint = (graph, source) => {
  arr.push(source)
  for (let neighbor of graph[source]) {
    depthFirstPrint(graph, neighbor)
  }
  return arr
}

console.log(depthFirstPrint(graph, 'a'))