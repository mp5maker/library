var periodOne = 125.0;
var periodTwo = 90.0;
var amplitude = 200;
var pointCount = 0;

function setup() {
    createCanvas(500, 500);
    noFill()
}

function draw() {
    background(255);
    strokeWeight(1);
    stroke(100)
    translate(width / 2, height / 2)

    if (pointCount > 10000) noLoop();

    beginShape()
    for(let i = 0; i < pointCount; i++) {
        let angle;
        angle = i / periodOne * TWO_PI;
        var x = sin(angle) * amplitude;
        angle = i / periodTwo * TWO_PI;
        var y = sin(angle) * amplitude;
        vertex(x, y)
    }
    endShape()
    pointCount++;
}