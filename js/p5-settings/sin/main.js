var period = 20;
var x = 0;
var y = 0;
var angle = 0.0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(RADIANS)
    frameRate(10)
    noStroke();
}

function draw() {
    background(255)
    let amplitude = height / 2

    translate(0, height / 2)
    fill(255, 0, 0)

    angle += 5.0;
    y = sin(radians(angle)) * amplitude
    ellipse(x, y, 50, 50)
    x += period;
    x = x % width;
}