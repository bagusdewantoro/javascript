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
  console.log(jalur);
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
  console.log(`${dari}, ${menuju}`);
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

let graph = Object.create(null)

const addEdge = (from, to) => {
  if (graph[from] == null) {
    graph[from] = [to];
  } else {
    graph[from].push(to);
  }
  return graph;
};

console.log(graph);
// [Object: null prototype] {}
console.log(addEdge('Setiabudi', 'Mb. Pipit'));
// [Object: null prototype] { Setiabudi: [ 'Mb. Pipit' ] }
console.log(addEdge(null, 'Mb. Pipit'));
// [Object: null prototype] {
//   Setiabudi: [ 'Mb. Pipit' ],
//   null: [ 'Mb. Pipit' ]
// }
console.log(addEdge('Setiabudi', null));
// [Object: null prototype] {
//   Setiabudi: [ 'Mb. Pipit', null ],
//   null: [ 'Mb. Pipit' ]
// }
