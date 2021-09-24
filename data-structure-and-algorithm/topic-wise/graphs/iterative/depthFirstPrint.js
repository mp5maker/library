const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const depthFirstPrint = (graph, source) => {
  const stack = [source];
  const print = []

  while (stack.length) {
    const current = stack.pop();
    print.push(current)
    const neighbors = graph[current];
    for (let neighbor of  neighbors) stack.push(neighbor);
  }

  return print
};

console.log(depthFirstPrint(graph, "a"));
