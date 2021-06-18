const records = [
  {"events": ["rain", "cloudy"], "dry": false},
  {"events": ["cloudy"], "dry": true},
  {"events": ["rain"], "dry": false},
  {"events": ["rain", "cloudy", "wind"], "dry": false},
  {"events": ["rain", "cloudy"], "dry": true},
  {"events": ["cloudy"], "dry": false}
]

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.dry) index += 2;
    table[index] += 1;

    console.log("index: " + index);
    console.log("table[index]: " + table[index]);
    console.log(table);
    console.log("\n");
  }
  return table;
}

tableFor("rain", records);