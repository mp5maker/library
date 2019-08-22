window.onload = init;

function init() {
    createLine();
    createSemiCircle();
    createSemiCircleUsingArcTo();
    quadraticCurve();
    bezierCurve();
    zigzag();
    spiral();
    someText();
    threeDeeText();
    branches();
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

function spiral() {
    let canvas = document.getElementById('spiral');
    let context = canvas.getContext('2d');

    let radius = 0;
    let angle = 0;

    context.lineWidth = 10;
    context.strokeStyle = 'black';

    context.beginPath();
    context.moveTo(canvas.width / 2, canvas.height / 2);

    for (let n = 0; n < 150; n++) {
        radius += 0.75;
        angle += (Math.PI * 2) / 50;
        let x = (canvas.width / 2) + (radius * Math.cos(angle));
        let y = (canvas.height / 2) + (radius * Math.sin(angle));
        context.lineTo(x, y)
    }

    context.stroke();
}

function someText() {
    let canvas = document.getElementById('some-text');
    let context = canvas.getContext('2d');

    context.font = '40pt Calibri';
    context.fillStyle = 'black';
    context.textAlign = 'center'; // Horizontal Center
    context.textBaseline = 'middle'; // Veritical Center
    context.fillText('Some Text!', canvas.width / 2, 120);
}

function threeDeeText() {
    let canvas = document.getElementById('three-dee-text');
    let context = canvas.getContext('2d');

    context.font = '40px Calibri';
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    const draw3dText = (context, text, x, y, textDepth) => {
        let n;
        for (n = 0; n < textDepth; n++) {
            context.fillText(text, x - n, y - n);
        }

        context.fillStyle = 'black';
        context.shadowColor = 'lightgrey';
        context.shadowBlur = 10;
        context.shadowOffsetX = textDepth + 2;
        context.shadowOffsetY = textDepth + 2;
        context.fillText(text, x - n, y - n);
    }

    draw3dText(context, '3D Text', canvas.width / 2, 120, 5);
}

function branches() {
    let canvas = document.getElementById('branches');
    let context = canvas.getContext('2d');

    drawBranches(context, canvas.width / 2, canvas.height, 50, 0);

    function drawBranches(context, startX, startY, trunkWidth, level) {
        if (level < 12) {
            var changeX = 100 / (level + 1);
            var changeY = 200 / (level + 1);
            var topRightX = startX + Math.random() * changeX;
            var topRightY = startY - Math.random() * changeY;
            var topLeftX = startX - Math.random() * changeX;
            var topLeftY = startY - Math.random() * changeY;

            // Right Branch
            context.beginPath();
            context.moveTo(startX + trunkWidth / 4, startY);
            context.quadraticCurveTo(startX + trunkWidth / 4, startY - trunkWidth, topRightX, topRightY);
            context.lineWidth = trunkWidth;
            context.lineCap = "round";
            context.stroke();

            // Left Branch
            context.beginPath();
            context.moveTo(startX - trunkWidth / 4, startY);
            context.quadraticCurveTo(startX - trunkWidth / 4, startY - trunkWidth, topLeftX, topLeftY);
            context.lineWidth = trunkWidth;
            context.lineCap = "round";
            context.stroke();

            drawBranches(context, topRightX, topRightY, trunkWidth * 0.7, level + 1);
            drawBranches(context, topLeftX, topLeftY, trunkWidth * 0.7, level + 1);
        }
    }
}