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


/**
  * DRAWING
  * Draw Player & Input Handler
  */

const speed = 0.4

// Game object later will be changed to State class
let Game = {
  level: simpleLevel,
  actors: simpleLevel.startActors
}

// DOMDisplay object later will be changed to DOMDisplay class
let DOMDisplay = {
  actorLayer: null,
  dom: elt("div", {class: "game"}, drawGrid(simpleLevel)),
  get generate(){
    return document.body.appendChild(this.dom)
  }
}

// updatePlayer function later will be changed to update function of Player class
function updatePlayer(keys) {
  let xSpeed = 0;
  if (keys.ArrowLeft) xSpeed -= speed;
  if (keys.ArrowRight) xSpeed += speed;
  let pos = Game.actors[0].pos
  let movedX = pos.plus(new Vec(xSpeed, 0));
  return new Player(movedX, new Vec(xSpeed, 0));
};

// updateDisplay function later will be changed to syncState function of DOMDisplay class
function updateDisplay(game, display) {
  if (display.actorLayer) display.actorLayer.remove();
  display.actorLayer = drawActors(game.actors);
  display.generate.appendChild(display.actorLayer)
};

// updateGame function later will be changed to update function of State class
function updateGame( keys){
  let actors = Game.actors
    .map(() => updatePlayer(keys));
  Game.actors = actors
  return Game;
}

const logging = () => console.log(('Game.actors[0].pos = ', Game.actors[0].pos))

// initial display before press the key
updateDisplay(Game, DOMDisplay);
logging()

function trackKeys(keys) {
  let down = Object.create(null);
  function track(event) {
    if (keys.includes(event.key)) {
      down[event.key] = event.type == "keydown";
      event.preventDefault();
      // update the display after press the key
      Game = updateGame(arrowKeys);
      updateDisplay(Game, DOMDisplay);
      logging()
    }
  }
  window.addEventListener("keydown", track);
  window.addEventListener("keyup", track);
  return down;
}

const arrowKeys =  trackKeys(["ArrowLeft", "ArrowRight", "ArrowUp"]);

