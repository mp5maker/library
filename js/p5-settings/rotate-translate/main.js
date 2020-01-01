var colorFrom;
var colorTo
var numOfColumns = 10

function setup() {
    createCanvas(500, 500);
    noStroke();
}

function draw() {
    translate(frameCount % width, frameCount % height)
    rotate(radians(frameCount))
    fill(0, 0, 0, 4)
    rect(0, 0, 40, 40)
}