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
  update = function(time, keys) {
    let xSpeed = 0;
    if (keys.ArrowLeft) xSpeed -= 7;
    if (keys.ArrowRight) xSpeed += 7;
    let pos = this.pos;
    let movedX = pos.plus(new Vec(xSpeed * time, 0));
    return new Player(movedX, new Vec(xSpeed, 0));
  };
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

class DOMDisplay {
  constructor(parent, level) {
    this.dom = elt("div", {class: "game"}, drawGrid(level));
    this.actorLayer = null;
    parent.appendChild(this.dom);
  }
  syncState = function(state) {
    if (this.actorLayer) this.actorLayer.remove();
    this.actorLayer = drawActors(state.actors);
    this.dom.appendChild(this.actorLayer);
  };
}

class State {
  constructor(level, actors) {
    this.level = level;
    this.actors = actors;
  }
  update = function(time, keys) {
    let actors = this.actors
      .map(actor => actor.update(time, keys));
    return new State(this.level, actors);
  };
}

const logging = () => console.log(('state.actors[0].pos = ', state.actors[0].pos))

let display = new DOMDisplay(document.body, simpleLevel);
let state = new State(simpleLevel,simpleLevel.startActors);
display.syncState(state);
logging()

function trackKeys(keys) {
  let down = Object.create(null);
  function track(event) {
    if (keys.includes(event.key)) {
      down[event.key] = event.type == "keydown";
      event.preventDefault();

      state = state.update(0.1, arrowKeys);

      display.syncState(state);
      logging()
    }
  }
  window.addEventListener("keydown", track);
  window.addEventListener("keyup", track);
  return down;
}

const arrowKeys =  trackKeys(["ArrowLeft", "ArrowRight", "ArrowUp"]);

