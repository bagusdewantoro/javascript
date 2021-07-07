// Run this file by one of these two ways:
// node ch07robot.js
// npm run 7

// THE VILLAGE
const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

// BUILD GRAPH (ROADS NETWORK)
function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push[to];
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    //console.log('=='.repeat(Object.keys(graph).length) + '> from - to : ', from, " - ", to);
    addEdge(from, to);
    addEdge(to, from);
    //console.log(`graph[${from}] = `, graph[from]);
    //console.log(Object.keys(graph)[Object.keys(graph).length -1], ":",
      //graph[Object.keys(graph)[Object.keys(graph).length -1]]);
    //console.log(graph, "\n");
  }
  return graph;
}

// EXECUTE GRAPH
const roadGraph = buildGraph(roads);
//console.log(roadGraph);
//console.log(Object.keys(roadGraph)[3])
//console.log(Object.values(roadGraph)[3])
//console.log(roadGraph["Farm"]);

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }
  //move(destination) {
    //if (!roadGraph[])
  //}
}
