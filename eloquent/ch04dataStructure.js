// Run this file by one of these two ways:
// node ch04dataStructure.js
// npm run 4

// load dependencies
require("./ch04journalData.js");

let journal = [];

// add entry
function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

// computing correlation
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
          Math.sqrt((table[2] + table[3]) *
                    (table[0] + table[1]) *
                    (table[1] + table[3]) *
                    (table[0] + table[2]));
}

// pizza example:
//  (0) no squirrel, no pizza = 76 times
//  (1) no squirrel, with pizza = 9 times
//  (2) becomes squirrel, no pizza = 4 times
//  (3) becomes squirrel, with pizza = 1 times

// check pizza correlation with squirrel tranformation
// console.log(phi([76, 9, 4, 1]));

//
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

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}

for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
  }
}

// 'penuts' & 'brushed teeth' are 2 stronge correlation factors than the others
for (let entry of JOURNAL) {
  if (entry.events.includes("peanuts") &&
     !entry.events.includes("brushed teeth")) {
    entry.events.push("peanut teeth");
  }
}
console.log("Peanuts & Not Brushed Teeth = " + phi(tableFor("peanut teeth", JOURNAL)));
