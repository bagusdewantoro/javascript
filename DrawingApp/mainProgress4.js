class Vec2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    minus(other) {
        return new Vec2D(this.x - other.x, this.y - other.y);
    };
    // div(scalar) {
    //     return new Vec2D(this.x / scalar, this.y / scalar);
    // };
    len() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
};


class Shape {
    constructor(points = [], closed = false, fillColor = "#ccffcc") {
        this.points = points;
        this.closed = closed;
        this.fillColor = fillColor;
    }
};

// class SpatialIndex {
//     constructor(maxDist) {
//         this.grid = [];
//         this.cellSize = maxDist;
//     }
//     getLoc(p) {
//         return new Vec2D(Math.ceil(p.x / this.cellSize), Math.ceil(p.y / this.cellSize));
//     };
//     insert(p) {
//         const loc = this.getLoc(p);
//         if (typeof this.grid[loc.x] === "undefined") {
//             this.grid[loc.x] = [];
//         }
//         if (typeof this.grid[loc.x][loc.y] === "undefined") {
//             this.grid[loc.x][loc.y] = [];
//         }
//         this.grid[loc.x][loc.y].push(p);
//     };
//     remove(p) {
//         const loc = this.getLoc(p);
//         try {
//             const idx = this.grid[loc.x][loc.y].indexOf(p);
//             delete this.grid[loc.x][loc.y][idx];
//         }
//         finally { }
//     };
//     get(p, r) {
//         if (r > this.cellSize) {
//             throw new Error("unsupported search radius");
//         }
//         const loc = this.getLoc(p);
//         let minDist = Number.MAX_VALUE;
//         let ret = null;
//         for (let i = loc.x - 1; i <= loc.x + 1; i++) {
//             for (let j = loc.y - 1; j <= loc.y + 1; j++) {
//                 if (this.grid[i] && this.grid[i][j]) {
//                     for (let k = 0; k < this.grid[i][j].length; k++) {
//                         if (typeof this.grid[i][j][k] !== "undefined") {
//                             let dist = this.grid[i][j][k].minus(p).len();
//                             if (dist < minDist) {
//                                 ret = this.grid[i][j][k];
//                                 minDist = dist;
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//         if (minDist <= r) {
//             return ret;
//         }
//         else {
//             return null;
//         }
//     };
// };

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

// let closePoint = null;

const mouseLoc = new Vec2D(0, 0);

cnv.onmousemove = e => {
    mouseLoc.x = e.clientX;
    mouseLoc.y = e.clientY;

    switch (state) {
        case State.AddingPoints:
        case State.Finishing:
            mouseLoc.minus(scene[scene.length - 1].points[0]).len() < 20 // snap radius from first point
                ? state = State.Finishing
                : state = State.AddingPoints;
            break;
    //     case State.Nothing:
    //         closePoint = spatialIdx.get(mouseLoc, 20);
    //         break;
    //     case State.DraggingPoint:
    //         closePoint.x = mouseLoc.x;
    //         closePoint.y = mouseLoc.y;
    }
};

cnv.onmousedown = e => {
    // if (e.button == 0 && state == State.Nothing && closePoint != null) {
    //     state = State.DraggingPoint;
        // spatialIdx.remove(closePoint);
    // }
    console.log(`state = ${Object.keys(State)[state]}`)
};

cnv.onmouseup = e => {
    const p = new Vec2D(e.clientX, e.clientY);
    if (e.button == 0) {
        switch (state) {
//             case State.DraggingPoint:
//                 state = State.Nothing;
//                 spatialIdx.insert(closePoint);
//                 break;
            case State.Nothing:
                scene.push(new Shape([p]));
                // spatialIdx.insert(p);
                state = State.AddingPoints;
                break;
            case State.AddingPoints:
                const lastShape = scene[scene.length - 1];
                lastShape.points.push(p);
                // spatialIdx.insert(p);
                break;
            case State.Finishing:
                scene[scene.length - 1].fillColor = document.getElementById("colorPicker").value;
                scene[scene.length - 1].closed = true;
                state = State.Nothing; // create new shape
        }
    }
    console.log('p = ', p)
    console.log(scene[scene.length - 1])
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

    // Draw shapes
    scene.forEach(function (shape) {
        if (shape.points.length > 0) {
            ctx.fillStyle = shape.fillColor;
            ctx.strokeStyle = "#000";
            ctx.beginPath();
            ctx.moveTo(shape.points[0].x, shape.points[0].y);
            for (let i = 1; i < shape.points.length; i++) {
                ctx.lineTo(shape.points[i].x, shape.points[i].y);
            }
            if (shape.closed) {
                ctx.closePath();
                ctx.fill();
            }
            ctx.stroke();
        }
    });

    // Draw current line
    if (state == State.AddingPoints || state == State.Finishing) {
        ctx.strokeStyle = "#000";
        const lastShape = scene[scene.length - 1];
        const lastVert = lastShape.points[lastShape.points.length - 1];
        ctx.moveTo(lastVert.x, lastVert.y);
        if (state == State.Finishing) {
            // Snap
            ctx.lineTo(lastShape.points[0].x, lastShape.points[0].y);
        }
        else {
            ctx.lineTo(mouseLoc.x, mouseLoc.y);
        }
        ctx.stroke();
    }

    // // Draw highlighted point
    // if (closePoint !== null) {
    //     ctx.fillStyle = "#f00";
    //     ctx.beginPath();
    //     ctx.arc(closePoint.x, closePoint.y, 4, 0, Math.PI * 2);
    //     ctx.fill();
    // }

    // Draw mouse cursor
    drawCursor(mouseLoc);

    // Repeat
    window.requestAnimationFrame(loop);
}

// Start
window.requestAnimationFrame(loop);
