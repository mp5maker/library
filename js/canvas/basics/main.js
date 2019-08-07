window.onload = init;

function init() {
    createLine();
    createSemiCircle();
    createSemiCircleUsingArcTo();
    quadraticCurve();
    bezierCurve();
    zigzag();
}

/**
 * Created a simple line
 */
function createLine() {
    let canvas = document.getElementById('line');
    let context = canvas.getContext('2d');
    context.lineWidth = 5;
    context.strokeStyle = 'black';
    // 5px on the left | 5px on the right
    context.lineCap = "round" // butt, square [round and square increases width by 10px]
    context.moveTo(50, 50); // Starting Point
    context.lineTo(50, 150); // Ending Point
    context.stroke();
}

function createSemiCircle() {
    let canvas = document.getElementById('semi-circle');
    let context = canvas.getContext('2d');
    context.lineWidth = 5;
    context.strokeStyle = 'black';
    // x, y, radius, starting angle, ending angle, counterclockwise / clockwise
    context.arc(40, canvas.height / 2, 40, 1.1 * Math.PI, 1.9 * Math.PI, false)
    context.stroke();
}

function createSemiCircleUsingArcTo() {
    let canvas = document.getElementById('arc-to');
    let context = canvas.getContext('2d');
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.lineCap = "round";
    context.moveTo(0, 50);
    // control x1, control y1, x2, y2, 50
    context.arcTo(75, 50, 75, 80, 50);
    context.stroke();

}

function quadraticCurve() {
    let canvas = document.getElementById('quadratic-curve');
    let context = canvas.getContext('2d');
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.lineCap = "round";
    context.moveTo(50, 50);
    // control x, control y, x2, y2
    context.quadraticCurveTo(50, 100, 150, 150);
    context.stroke();
}

function bezierCurve() {
    let canvas = document.getElementById('bezier-curve');
    context = canvas.getContext('2d');
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.moveTo(50, 50);
    // control x1, control y1, control x2, control y2, x3, y3
    context.bezierCurveTo(150, 10, 320, 10, 320, 180);
    context.stroke();
}

function zigzag() {
    let canvas = document.getElementById('zigzag');
    let context = canvas.getContext('2d');
    let startX = 10;
    let startY = 10;
    let zigzagSpacing = 60;

    context.lineWidth = 10;
    context.strokeStyle = "blue";
    context.beginPath();
    context.moveTo(startX, startY);

    for (let n = 0; n < 7; n++) {
        let x = startX + ((n + 1) * zigzagSpacing);
        let y;
        if (n % 2 == 0) {
            y = startY + 100;
        } else {
            y = startY;
        }
        context.lineTo(x, y)
    }

    context.stroke();
}