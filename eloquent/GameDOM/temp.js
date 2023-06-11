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
  constructor(level, actors, status) {
    this.level = level;
    this.actors = actors;
    this.status = status;
  }
  static start(level) {
    return new State(level, level.startActors, "playing");
  }
  get player() {
    return this.actors.find(a => a.type == "player");
  }
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
}

Player.prototype.size = new Vec(0.8, 1.5);

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
    this.actorLayer = null;
    parent.appendChild(this.dom);
  }
  clear() { this.dom.remove(); }
  syncState() {
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

DOMDisplay.prototype.syncState = function(state) {
  // if (this.actorLayer) this.actorLayer.remove();
  this.actorLayer = drawActors(state.actors);
  this.dom.appendChild(this.actorLayer);
  // this.dom.className = `game ${state.status}`;
  // this.scrollPlayerIntoView(state);
};

Level.prototype.touches = function(pos, size, type) {
  let xStart = Math.floor(pos.x);
  let xEnd = Math.ceil(pos.x + size.x);
  let yStart = Math.floor(pos.y);
  let yEnd = Math.ceil(pos.y + size.y);
  for (let y = yStart; y < yEnd; y++) {
    for (let x = xStart; x < xEnd; x++) {
      let isOutside = x < 0 || x >= this.width ||
                      y < 0 || y >= this.height;
      let here = isOutside ? "wall" : this.rows[y][x];
      if (here == type) return true;
    }
  }
  return false;
};

State.prototype.update = function(time, keys) {
  let actors = this.actors
    .map(actor => actor.update(time, this, keys));
  let newState = new State(this.level, actors, this.status);
  if (newState.status != "playing") return newState;
  let player = newState.player;
  if (this.level.touches(player.pos, player.size, "lava")) {
    return new State(this.level, actors, "lost");
  }
  for (let actor of actors) {
    if (actor != player && overlap(actor, player)) {
      newState = actor.collide(newState);
    }
  }
  return newState;
};

// const playerXSpeed = 7;
// const gravity = 30;
// const jumpSpeed = 17;

Player.prototype.update = function(time, state, keys) {
  let xSpeed = 0;
  // if (keys.ArrowLeft) xSpeed -= playerXSpeed;
  // if (keys.ArrowRight) xSpeed += playerXSpeed;
  let pos = this.pos;
  let movedX = pos.plus(new Vec(xSpeed * time, 0));
  if (!state.level.touches(movedX, this.size, "wall")) {
    pos = movedX;
  }
  // let ySpeed = this.speed.y + time * gravity;
  let ySpeed = this.speed.y + time;
  let movedY = pos.plus(new Vec(0, ySpeed * time));
  if (!state.level.touches(movedY, this.size, "wall")) {
    pos = movedY;
  // } else if (keys.ArrowUp && ySpeed > 0) {
  } else if (ySpeed > 0) {
    // ySpeed = -jumpSpeed;
    ySpeed = 0;
  } else {
    ySpeed = 0;
  }
  return new Player(pos, new Vec(xSpeed, ySpeed));
};

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

function runLevel(level, Display) {
  let display = new Display(document.body, level);
  let state = State.start(level);
  runAnimation(time => {
    state = state.update(time);
    display.syncState(state);
    if (state.status == "playing") {
      return true;
    } else if (ending > 0) {
      ending -= time;
      return true;
    } else {
      display.clear();
      resolve(state.status);
      return false;
    }
  });
}

runLevel(new Level(simpleLevelPlan), DOMDisplay);


