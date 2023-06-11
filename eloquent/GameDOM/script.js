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

class State {
  constructor(level, actors) {
    this.level = level;
    this.actors = actors;
  }
  static start(level) {
    return new State(level, level.startActors);
  }
  get player() {
    return this.actors.find(a => a.type == "player");
  }
  update(time) {
    let actors = this.actors.map(actor => actor.update(time, this));
    return new State(this.level, actors);
  };
}

class Vec {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  plus(other) {
    return new Vec(this.x + other.x,  this.y + other.y)
  }
}

class Player {
  constructor(pos, speed) {
    this.pos = pos        // Vec object
    this.speed = speed;
  }
  get type() { return "player" }
  static create(pos) {
    return new Player(pos.plus(new Vec(0, -0.5)), new Vec(0, 0))
  }
  size = new Vec(0.8, 1.5);
}

const levelChars = {
  ".": "empty", 
  "#": "wall", 
  "+": "lava",
  "@": Player, 
  "o": "coin",
  "=": "lava", 
};

class Level {
  constructor(plan)  {
    let rows = plan.trim().split("\n").map(l => [...l])
    this.height = rows.length
    this.width = rows[0.].length
    this.startActors = []
    this.rows = rows.map((row, y) => {
      return row.map((ch, x) => {
        let type = levelChars[ch]
        if (typeof type == "string") return type
        this.startActors.push(
          type.create(new Vec(x, y), ch)
        )
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

class DOMDisplay {
  constructor(parent, level) {
    this.dom = elt("div", {class: "game"}, drawGrid(level));
    parent.appendChild(this.dom);
  }
  syncState(state) {
    this.actorLayer = drawActors(state.actors);
    this.dom.appendChild(this.actorLayer);
  }
}

function drawGrid(level) {
  return elt("table", {
    class: "background",
    style: `width: ${level.width * scale}px`
  }, ...level.rows.map(row =>
    elt("tr", {style: `height: ${scale}px`},
        ...row.map(type => elt("td", {class: type})))
  ));
}

function drawActors(actors) {
  return elt("div", {}, ...actors.map(actor => {
    let rect = elt("div", {class: `actor ${actor.type}`});
    rect.style.width = `${actor.size.x * scale}px`;
    rect.style.height = `${actor.size.y * scale}px`;
    rect.style.left = `${actor.pos.x * scale}px`;
    rect.style.top = `${actor.pos.y * scale}px`;
    return rect;
  }));
}

function runAnimation(frameFunc) {
  let lastTime = null;
  function frame(time) {
    let timeStep = Math.min(time - lastTime, 100) / 1000;
    if (frameFunc(timeStep) === false) return;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function runLevel(level, Display) {
  let display = new Display(document.body, level);
  let state = State.start(level);
  runAnimation(() => display.syncState(state))
}

runLevel(new Level(simpleLevelPlan), DOMDisplay);


