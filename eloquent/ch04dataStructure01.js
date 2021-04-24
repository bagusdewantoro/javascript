const records = [
  {"events": ["rain", "cloudy"], "dry": False},
  {"events": ["rain", "cloudy"], "dry": True},
  {"events": ["cloudy"], "dry": False},
  {"events": ["cloudy", "wind"], "dry": True},
  {"events": ["cloudy"], "dry": True},
  {"events": ["rain", "cloudy"], "dry": False},
  {"events": ["rain", "cloudy", "storm"], "dry": False},
]

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}
