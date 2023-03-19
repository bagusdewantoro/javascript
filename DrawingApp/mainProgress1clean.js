const Vec2D = (function () {
    function Vec2D(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    return Vec2D;
}());


const windowSize = new Vec2D(window.innerWidth, window.innerHeight);
const cnv = document.createElement("canvas");
cnv.width = windowSize.x;
cnv.height = windowSize.y;
document.body.appendChild(cnv);
const ctx = cnv.getContext("2d");

const mouseLoc = new Vec2D(0, 0);

cnv.onmousemove = function (e) {
    mouseLoc.x = e.clientX;
    mouseLoc.y = e.clientY;
};

function drawCursor(pos) {
    // ctx.fillStyle = state == State.Finishing ? "#f00" : "#000";
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 4, 0, Math.PI * 2);
    ctx.fill();
}

function loop() {
    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, windowSize.x, windowSize.y);

    drawCursor(mouseLoc);

    window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
