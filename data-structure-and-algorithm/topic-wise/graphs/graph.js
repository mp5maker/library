class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices
    this.adjList = new Map()
  }

  addVertex(vertex) {
    this.adjList.set(vertex, [])
  }

  addEdge(vertex, edge) {
    this.adjList.get(vertex).push(edge)
  }

  printGraph() {
    let getKeys = this.adjList.keys()
    for (let i of getKeys) {
      const value = this.adjList.get(i)
      console.log(`${i} -> ${value.join(' ')}`)
    }
  }
}

let g = new Graph(6);
let vertices = ["A", "B", "C", "D", "E", "F"];

for (let i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");
console.log(g.printGraph())