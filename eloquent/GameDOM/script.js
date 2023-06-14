/**
  * LEVEL PLAN
  * Class to create levels from strings
  */

let simpleLevelPlan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`;

const levelChars = {
  ".": "empty", 
  "#": "wall", 
  "+": "lava",
  "@": "player", 
  "o": "coin",
  "=": "lava", 
};

class Level {
  constructor(plan)  {
    let rows = plan.trim().split("\n").map(l => [...l])
    this.height = rows.length
    this.width = rows[0.].length
    this.rows = rows.map((row, y) => {
      return row.map((ch, x) => {
        let type = levelChars[ch]
        if (typeof type == "string") return type
        return "empty"
      })
    })
  }
}

let simpleLevel = new Level(simpleLevelPlan)



/**
  * DRAWING
  * Drawing using HTML DOM
  */

const scale = 20;

function elt(name, attrs, ...children) {
  let dom = document.createElement(name);
  for (let attr of Object.keys(attrs)) {
    dom.setAttribute(attr, attrs[attr]);
  }
  for (let child of children) {
    dom.appendChild(child);
  }
  return dom;
}

document.body.appendChild(elt(
  "div",                              // name
  {class: "game"},                    // attrs
  elt(                                // ...children
    "table",                              // name
    {                                     // attrs
      class: "background",
      style: `width: ${new Level(simpleLevelPlan).width * scale}px`
    }, 
    ...new Level(simpleLevelPlan).rows.map(row => elt(       // ...children
      "tr",                                   // name
      {style: `height: ${scale}px`},          // attrs
      ...row.map(type => elt(                 // ...children
        "td",                                     // name
        {class: type}                             // attrs
      ))
    ))
  )
))

