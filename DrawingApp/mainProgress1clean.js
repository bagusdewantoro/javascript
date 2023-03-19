class Vec2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};

const windowSize = new Vec2D(window.innerWidth, window.innerHeight);
const cnv = document.createElement("canvas");
cnv.width = windowSize.x;
cnv.height = windowSize.y;
document.body.appendChild(cnv);
const ctx = cnv.getContext("2d");

const mouseLoc = new Vec2D(0, 0);

cnv.onmousemove = e => {
    mouseLoc.x = e.clientX;
    mouseLoc.y = e.clientY;
};

const drawCursor = pos => {
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 4, 0, Math.PI * 2);
    ctx.fill();
}

const loop = () => {
    // Clear screen
    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, windowSize.x, windowSize.y);
    // Draw mouse cursor
    drawCursor(mouseLoc);
    // Repeat
    window.requestAnimationFrame(loop);
}

// Start
window.requestAnimationFrame(loop);
