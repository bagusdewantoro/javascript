class Vec2D {
    x: number;
    y: number;
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }
    minus(other: Vec2D): Vec2D {
        return new Vec2D(this.x - other.x, this.y - other.y);
    }
    div(scalar: number): Vec2D {
        return new Vec2D(this.x / scalar, this.y / scalar);
    }
    len(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

class Shape {
    points: Vec2D[];
    closed: boolean;
    fillColor: string;
    constructor(points: Vec2D[] = [],
                closed: boolean = false,
                fillColor: string = "#ccffcc") {
        this.points = points;
        this.closed = closed;
        this.fillColor = fillColor;
    }
}

type Scene = Shape[];

class SpatialIndex {
    grid: Vec2D[][][];
    cellSize: number;
    constructor(maxDist: number) {
        this.grid = [];
        this.cellSize = maxDist;
    }
    private getLoc(p: Vec2D): Vec2D {
        return new Vec2D(
            Math.ceil(p.x / this.cellSize),
            Math.ceil(p.y / this.cellSize));
    }
    insert(p: Vec2D): void {
        let loc = this.getLoc(p);
        if (typeof this.grid[loc.x] === "undefined") {
            this.grid[loc.x] = [];
        }
        if (typeof this.grid[loc.x][loc.y] === "undefined") {
            this.grid[loc.x][loc.y] = [];
        }
        this.grid[loc.x][loc.y].push(p);
    }
    remove(p: Vec2D): void {
        let loc = this.getLoc(p);
        try {
            let idx = this.grid[loc.x][loc.y].indexOf(p);
            delete this.grid[loc.x][loc.y][idx];
        }
        finally { }
    }
    get(p: Vec2D, r: number): Vec2D | null {
        if (r > this.cellSize) {
            throw new Error("unsupported search radius");
        }
        let loc = this.getLoc(p);
        let minDist: number = Number.MAX_VALUE;
        let ret: Vec2D | null = null;
        for (var i = loc.x - 1; i <= loc.x + 1; i++) {
            for (var j = loc.y - 1; j <= loc.y + 1; j++) {
                if (this.grid[i] && this.grid[i][j]) {
                    for (var k = 0; k < this.grid[i][j].length; k++) {
                        if (typeof this.grid[i][j][k] !== "undefined") {
                            let dist = this.grid[i][j][k].minus(p).len();
                            if (dist < minDist) {
                                ret = this.grid[i][j][k];
                                minDist = dist;
                            }
                        }
                    }
                }
            }
        }
        if (minDist <= r) {
            return ret;
        }
        else {
            return null;
        }
    }
}

enum State {
    Nothing,
    AddingPoints,
    Finishing,
    DraggingPoint
}

let windowSize = new Vec2D(window.innerWidth, window.innerHeight);
let cnv = document.createElement("canvas");
cnv.width = windowSize.x;
cnv.height = windowSize.y;
document.body.appendChild(cnv);
let ctx = cnv.getContext("2d")!;

let scene: Scene = [];
let state = State.Nothing;
let spatialIdx = new SpatialIndex(50);
let closePoint: Vec2D | null = null;

let mouseLoc = new Vec2D(0, 0);

cnv.onmousemove = (e) => {
    mouseLoc.x = e.clientX;
    mouseLoc.y = e.clientY;

    if (state == State.AddingPoints || state == State.Finishing) {
        if (mouseLoc.minus(scene[scene.length-1].points[0]).len() < 20) {
            state = State.Finishing;
        }
        else {
            state = State.AddingPoints;
        }
    }
    else if (state == State.Nothing) {
        closePoint = spatialIdx.get(mouseLoc, 20);
    }
    else if (state == State.DraggingPoint) {
        closePoint!.x = mouseLoc.x;
        closePoint!.y = mouseLoc.y;
    }
}


cnv.onmousedown = (e) => {
    if (e.button == 0 && state == State.Nothing && closePoint != null) {
        state = State.DraggingPoint;
        spatialIdx.remove(closePoint);
    }
}

cnv.onmouseup = (e) => {
    let p = new Vec2D(e.clientX, e.clientY);
    if (e.button == 0) {    
        if (state == State.DraggingPoint) {
            state = State.Nothing;
            spatialIdx.insert(closePoint!);
        }
        else if (state == State.Nothing) {     
            scene.push(new Shape([p]));
            spatialIdx.insert(p);
            state = State.AddingPoints;
        }
        else if (state == State.AddingPoints) {
            let lastShape = scene[scene.length - 1];
            lastShape.points.push(p);
            spatialIdx.insert(p);
        }
        else if (state == State.Finishing) {
            scene[scene.length - 1].fillColor =
                (document.getElementById("colorPicker") as HTMLInputElement).value;
            scene[scene.length - 1].closed = true;
            state = State.Nothing;
        }
    }
}

function drawCursor(pos: Vec2D): void {
    ctx.fillStyle = state == State.Finishing ? "#f00" : "#000";
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 4, 0, Math.PI * 2);
    ctx.fill();
}

function loop(_: number): void {
    // Clear screen
    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, windowSize.x, windowSize.y);

    // Draw shapes
    scene.forEach(shape => {
        if (shape.points.length > 0) {
            ctx.fillStyle = shape.fillColor;
            ctx.strokeStyle = "#000";
            ctx.beginPath();

            ctx.moveTo(shape.points[0].x, shape.points[0].y);

            for (let i = 1; i < shape.points.length; i++) {
                ctx.lineTo(shape.points[i].x, shape.points[i].y);
            }

            if (shape.closed) {
                ctx.closePath()
                ctx.fill();
            }

            ctx.stroke();
        }
    });
    
    // Draw current line
    if (state == State.AddingPoints || state == State.Finishing) {
        ctx.strokeStyle = "#000";
        let lastShape = scene[scene.length - 1];
        let lastVert = lastShape.points[lastShape.points.length - 1];
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

    // Draw highlighted point
    if (closePoint !== null) {
        ctx.fillStyle = "#f00";
        ctx.beginPath();
        ctx.arc(closePoint.x, closePoint.y, 4, 0, Math.PI * 2);
        ctx.fill();
    }

    // Draw mouse cursor
    drawCursor(mouseLoc);

    // Repeat
    window.requestAnimationFrame(loop);
}

// Start
window.requestAnimationFrame(loop);