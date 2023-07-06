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
  update = function(time, state, keys) {
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
    this.dom.className = `game ${state.status}`;
  };
}

class State {
  constructor(level, actors, status) {
    this.level = level;
    this.actors = actors;
    this.status = status;
  }
  update = function(time, keys) {
    let actors = this.actors
      .map(actor => actor.update(time, this, keys));
    let newState = new State(this.level, actors, this.status);
    if (newState.status != "playing") return newState;
    let player = newState.player;
    return newState;
  };
}

function trackKeys(keys) {
  let down = Object.create(null);
  function track(event) {
    if (keys.includes(event.key)) {
      down[event.key] = event.type == "keydown";
      event.preventDefault();
    }
  }
  window.addEventListener("keydown", track);
  window.addEventListener("keyup", track);
  return down;
}

var arrowKeys =
  trackKeys(["ArrowLeft", "ArrowRight", "ArrowUp"]);

function runAnimation(frameFunc) {
  let lastTime = null;
  function frame(time) {
    if (lastTime != null) {
      let timeStep = Math.min(time - lastTime, 100) / 1000;
      if (frameFunc(timeStep) === false) return;
    }
    lastTime = time;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

let display = new DOMDisplay(document.body, new Level(simpleLevelPlan));
let state = new State(
              new Level(simpleLevelPlan), 
              new Level(simpleLevelPlan).startActors, 
              "playing"
            );

runAnimation(time => {
  state = state.update(time, arrowKeys);
  display.syncState(state);
});



