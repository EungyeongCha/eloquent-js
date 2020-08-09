// Our project in this chapter is to build an automaton, a little program that performs a task in a virtual world. Our automaton will be a mail-delivery robot picking up and dropping off parcels.

// 1. Meadoafield
const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
  ];


  // Given an array of edges, buildGraph creates a map object that, for each node, stores an array of connected nodes.
  function buildGraph(edges) {
      let graph = Object.create(null);
      function addEdge(from, to) {
          if(graph[from] == null) {
              graph[from] = graph[to];
          } else {
              graph[from].push(to);
          }
      }
      for (let [from, to] of edges.map(r => r.split("-"))) {
          addEdge(from, to);
          addEdge(to, from);
      }
      return graph;

  }

  const roadGraph = buildGraph(roads);



  // 2. The task
  