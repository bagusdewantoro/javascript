class Vec2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};

let State = {
    Nothing: 0,
    AddingPoints: 1,
    Finishing: 2,
    DraggingPoint: 3,
}

const windowSize = new Vec2D(window.innerWidth, window.innerHeight);
const cnv = document.createElement("canvas");
cnv.width = windowSize.x;
cnv.height = windowSize.y;
document.body.appendChild(cnv);
const ctx = cnv.getContext("2d");

const scene = [];

let state = State.Nothing;

// const spatialIdx = new SpatialIndex(50);

let closePoint = null;

const mouseLoc = new Vec2D(0, 0);

cnv.onmousemove = e => {
    mouseLoc.x = e.clientX;
    mouseLoc.y = e.clientY;
};

cnv.onmousedown = e => {
    if (e.button == 0 && state == State.Nothing && closePoint != null) {
        state = State.DraggingPoint;
    }
    console.log(`state = ${Object.keys(State)[state]}`)
};

cnv.onmouseup = e => {
    const p = new Vec2D(e.clientX, e.clientY);
    if (e.button == 0) {
        switch (state) {
            case State.Nothing:
                state = State.AddingPoints;
                break;
        }
    }
    console.log(state, p)
};

const drawCursor = pos => {
    ctx.fillStyle = state == State.Finishing ? "#f00" : "#000";
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 4, 0, Math.PI * 2);
    ctx.fill();
}

const loop = () => {
    // Clear screen
    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, windowSize.x, windowSize.y);

    // Draw current line
    if (state == State.AddingPoints || state == State.Finishing) {
        ctx.strokeStyle = "#000";
        const lastShape = scene[scene.length - 1];
        ctx.stroke();
    }

    // Draw mouse cursor
    drawCursor(mouseLoc);

    // Repeat
    window.requestAnimationFrame(loop);
}

// Start
window.requestAnimationFrame(loop);
