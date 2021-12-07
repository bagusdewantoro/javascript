const jalan = [
  'Setiabudi-Mb. Pipit', 'Setiabudi-Om Dul',
  'Setiabudi-Nanat', 'Mb. Pipit-Asem',
  'SMP DP-Puskesmas DP', 'SMP DP-Asem',
  'Puskesmas DP-Boncel', 'Boncel-Kampung Betawi',
  'Boncel-Pasar Lenteng', 'SD DP-Kampung Betawi',
  'SD DP-Nanat', 'SD DP-Pasar Lenteng',
  'SD DP-Asem', 'Pasar Lenteng-Asem'
];

for (let jalur of jalan.map(r => r.split("-"))) {
  // console.log(jalur);
}
  // [ 'Setiabudi', 'Mb. Pipit' ]
  // [ 'Setiabudi', 'Om Dul' ]
  // [ 'Setiabudi', 'Nanat' ]
  // [ 'Mb. Pipit', 'Asem' ]
  // [ 'SMP DP', 'Puskesmas DP' ]
  // [ 'SMP DP', 'Asem' ]
  // [ 'Puskesmas DP', 'Boncel' ]
  // [ 'Boncel', 'Kampung Betawi' ]
  // [ 'Boncel', 'Pasar Lenteng' ]
  // [ 'SD DP', 'Kampung Betawi' ]
  // [ 'SD DP', 'Nanat' ]
  // [ 'SD DP', 'Pasar Lenteng' ]
  // [ 'SD DP', 'Asem' ]
  // [ 'Pasar Lenteng', 'Asem' ]

for (let [dari, menuju] of jalan.map(r => r.split("-"))) {
  // console.log(`${dari}, ${menuju}`);
}
  // Setiabudi, Mb. Pipit
  // Setiabudi, Om Dul
  // Setiabudi, Nanat
  // Mb. Pipit, Asem
  // SMP DP, Puskesmas DP
  // SMP DP, Asem
  // Puskesmas DP, Boncel
  // Boncel, Kampung Betawi
  // Boncel, Pasar Lenteng
  // SD DP, Kampung Betawi
  // SD DP, Nanat
  // SD DP, Pasar Lenteng
  // SD DP, Asem
  // Pasar Lenteng, Asem

let bagusGraph = Object.create(null)

const bagusEdge = (from, to) => {
  if (bagusGraph[from] == null) {
    bagusGraph[from] = [to];
  } else {
    bagusGraph[from].push(to);
  }
  return bagusGraph;
};

// console.log(bagusGraph);
  // [Object: null prototype] {}
// console.log(bagusEdge('Setiabudi', 'Mb. Pipit'));
  // [Object: null prototype] { Setiabudi: [ 'Mb. Pipit' ] }
// console.log(bagusEdge(null, 'Mb. Pipit'));
  // [Object: null prototype] {
  //   Setiabudi: [ 'Mb. Pipit' ],
  //   null: [ 'Mb. Pipit' ]
  // }


function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
    // console.log(from, ', ', to);
    // console.log(`GRAPH:\n`, graph, `\n ================`);
  }
  return graph;
}

const roadGraph = buildGraph(jalan);
roadGraph;

// console.log(roadGraph);
  //  [Object: null prototype] {
  //   'Setiabudi': [ 'Mb. Pipit', 'Om Dul', 'Nanat' ],
  //   'Mb. Pipit': [ 'Setiabudi', 'Asem' ],
  //   'Om Dul': [ 'Setiabudi' ],
  //   'Nanat': [ 'Setiabudi', 'SD DP' ],
  //   'Asem': [ 'Mb. Pipit', 'SMP DP', 'SD DP', 'Pasar Lenteng' ],
  //   'SMP DP': [ 'Puskesmas DP', 'Asem' ],
  //   'Puskesmas DP': [ 'SMP DP', 'Boncel' ],
  //   'Boncel': [ 'Puskesmas DP', 'Kampung Betawi', 'Pasar Lenteng' ],
  //   'Kampung Betawi': [ 'Boncel', 'SD DP' ],
  //   'Pasar Lenteng': [ 'Boncel', 'SD DP', 'Asem' ],
  //   'SD DP': [ 'Kampung Betawi', 'Nanat', 'Pasar Lenteng', 'Asem' ]
  // }

// console.log( Object.keys(roadGraph)[3] ); // Nanat
// console.log( roadGraph[Object.keys(roadGraph)[3]] ); // [ 'Setiabudi', 'SD DP' ]
// console.log( Object.keys(roadGraph)[6] ); // Puskesmas DP
// console.log( roadGraph[Object.keys(roadGraph)[6]] ); // [ 'SMP DP', 'Boncel' ]


class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }
  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;
        return {place: destination, address: p.address};
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

let first = new VillageState(
  "Nanat",
  [{place: "Nanat", address: "Setiabudi"}]
);
let next = first.move("Setiabudi");

console.log(next.place);
// → Setiabudi
console.log(next.parcels);
// → []
console.log(first.place);
// → Nanat
