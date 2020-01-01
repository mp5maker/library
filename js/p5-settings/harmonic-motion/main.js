var amplitude = 20;
var period = 100;
var shapeWidth;
var shapeHeight;
var vertCount;

function setup() {
    createCanvas(windowWidth, windowHeight);
    shapeWidth = random(0, shapeWidth)
    shapeHeight = random(0, shapeHeight);
}

function draw() {
    /* Clear Rect */
    background(255);

    let oscillation = floor(amplitude * sin(2 * Math.PI * (frameCount / period)))
    if (oscillation == 0) {
        shapeWidth = random(width / 2)
        shapeHeight = random(height / 2)
        vertCount = random(20)
    }
    makeShape(shapeWidth, shapeHeight, vertCount)
}

function makeShape(sWidth, sHeight, verts) {
    noFill();
    beginShape();
    translate(width / 2, height / 2)
    for (let i = 0; i < verts; i ++) {
        let x = cos(i * verts / (Math.PI * 2)) * sWidth;
        let y = sin(i * verts / (Math.PI * 2)) * sHeight;
        curveVertex(x, y)
    }
    endShape(CLOSE);
}