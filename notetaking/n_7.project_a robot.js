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
  // the viallage's state to the minimal set of values that define it
  // (robot's current situation, the collection of undelivered parcel, each of which has a current location and a destination address)

  // where the robot is and where the parcels are
  class VillageState {
      constructor(place, parcels) {
          this.place = place;
          this.parcels = parcels;
      }
      // check if there is a road it can go and return old state if not
      // creates new state with the destination as the robot's new palce
      // map: move, filter: deliver
      move(destination) {
        if(!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return {place: destination, address: p.place};
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
      }
  }

  let first = new VillageState(
      "Post Office",
      [{place: "Post Office", address: "Alice's House"}]
  );
  let next = first.move("Alice's House");

  console.log(next.place);
  // -> Alice's House
  console.log(next.parcels);
  // -> []
  console.log(first.place);
  // -> Post Office



  // 3. Persistanct data
  let object = Object.freeze({value: 5});
  object.value = 10;
  console.log(object.value);
  // ->5



  // 4. Simulation
  // a robot is a function that takes a VillageState object and returns the name of a nearby place
  function runRobot(state, robot, memory) {
      for (let turn = 0;; turn++) {
          if (state.parcels.length == 0) {
              console.log( `Done in ${turn} turns`);
              break;
          }
          let action = robot(state, memory);
          state = state.move(action.direction);
          memory = action.memory;
          console.log(`Moved to ${action.direction}`);
      }
  } 

  function randomPick(array) {
      let choice = Math.floor(Math.ramdom() * array.length);
      return array[choice];
  }

  function randomRobot(state) {
      return {direction: randomPick(roadGraph[state.place])};
  }

  VillageState.random = function(parcelCount = 5) {
      let parcels = [];
      for (let i = o; i < parcelCount; i++) {
          let address = randomPick(Object.keys(roadGraph));
          let place;
          do {
              place = randomPick(Object.keys(roadGraph));
          } while (place == address);
          parcels.push({place, address});
      }
      return new VillageState("Post Office", parcels)
  }
