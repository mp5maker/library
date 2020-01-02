var angleIncrement = 10;
var xIncrement = 5;
var x = 0;
var angle = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(RADIANS)
    frameRate(10)
    noStroke();
}

function draw() {
    background(255)
    let amplitude = height / 4;
    translate(0, height / 2)

    while(x < width) {
        angle += angleIncrement
        let y = amplitude * sin(radians(angle));
        fill(255, 0, 0)
        ellipse(x, y, 10, 10)
        x += xIncrement;
    }
    x = x % width;
}