const Vec2D = (function () {
    function Vec2D(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Vec2D.prototype.minus = function (other) {
        return new Vec2D(this.x - other.x, this.y - other.y);
    };
    Vec2D.prototype.div = function (scalar) {
        return new Vec2D(this.x / scalar, this.y / scalar);
    };
    Vec2D.prototype.len = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    return Vec2D;
}());
const Shape = (function () {
    function Shape(points, closed, fillColor) {
        if (points === void 0) { points = []; }
        if (closed === void 0) { closed = false; }
        if (fillColor === void 0) { fillColor = "#ccffcc"; }
        this.points = points;
        this.closed = closed;
        this.fillColor = fillColor;
    }
    return Shape;
}());
const SpatialIndex = (function () {
    function SpatialIndex(maxDist) {
        this.grid = [];
        this.cellSize = maxDist;
    }
    SpatialIndex.prototype.getLoc = function (p) {
        return new Vec2D(Math.ceil(p.x / this.cellSize), Math.ceil(p.y / this.cellSize));
    };
    SpatialIndex.prototype.insert = function (p) {
        const loc = this.getLoc(p);
        if (typeof this.grid[loc.x] === "undefined") {
            this.grid[loc.x] = [];
        }
        if (typeof this.grid[loc.x][loc.y] === "undefined") {
            this.grid[loc.x][loc.y] = [];
        }
        this.grid[loc.x][loc.y].push(p);
    };
    SpatialIndex.prototype.remove = function (p) {
        const loc = this.getLoc(p);
        try {
            const idx = this.grid[loc.x][loc.y].indexOf(p);
            delete this.grid[loc.x][loc.y][idx];
        }
        finally { }
    };
    SpatialIndex.prototype.get = function (p, r) {
        if (r > this.cellSize) {
            throw new Error("unsupported search radius");
        }
        const loc = this.getLoc(p);
        let minDist = Number.MAX_VALUE;
        let ret = null;
        for (let i = loc.x - 1; i <= loc.x + 1; i++) {
            for (let j = loc.y - 1; j <= loc.y + 1; j++) {
                if (this.grid[i] && this.grid[i][j]) {
                    for (let k = 0; k < this.grid[i][j].length; k++) {
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
    };
    return SpatialIndex;
}());
let State;
(function (State) {
    State[State["Nothing"] = 0] = "Nothing";
    State[State["AddingPoints"] = 1] = "AddingPoints";
    State[State["Finishing"] = 2] = "Finishing";
    State[State["DraggingPoint"] = 3] = "DraggingPoint";
})(State || (State = {}));
const windowSize = new Vec2D(window.innerWidth, window.innerHeight);
const cnv = document.createElement("canvas");
cnv.width = windowSize.x;
cnv.height = windowSize.y;
document.body.appendChild(cnv);
const ctx = cnv.getContext("2d");
const scene = [];
let state = State.Nothing;
const spatialIdx = new SpatialIndex(50);
let closePoint = null;
const mouseLoc = new Vec2D(0, 0);
cnv.onmousemove = function (e) {
    mouseLoc.x = e.clientX;
    mouseLoc.y = e.clientY;
    if (state == State.AddingPoints || state == State.Finishing) {
        if (mouseLoc.minus(scene[scene.length - 1].points[0]).len() < 20) {
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
        closePoint.x = mouseLoc.x;
        closePoint.y = mouseLoc.y;
    }
};
cnv.onmousedown = function (e) {
    if (e.button == 0 && state == State.Nothing && closePoint != null) {
        state = State.DraggingPoint;
        spatialIdx.remove(closePoint);
    }
};
cnv.onmouseup = function (e) {
    const p = new Vec2D(e.clientX, e.clientY);
    if (e.button == 0) {
        if (state == State.DraggingPoint) {
            state = State.Nothing;
            spatialIdx.insert(closePoint);
        }
        else if (state == State.Nothing) {
            scene.push(new Shape([p]));
            spatialIdx.insert(p);
            state = State.AddingPoints;
        }
        else if (state == State.AddingPoints) {
            const lastShape = scene[scene.length - 1];
            lastShape.points.push(p);
            spatialIdx.insert(p);
        }
        else if (state == State.Finishing) {
            scene[scene.length - 1].fillColor =
                document.getElementById("colorPicker").value;
            scene[scene.length - 1].closed = true;
            state = State.Nothing;
        }
    }
};
function drawCursor(pos) {
    ctx.fillStyle = state == State.Finishing ? "#f00" : "#000";
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 4, 0, Math.PI * 2);
    ctx.fill();
}
function loop(_) {
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
