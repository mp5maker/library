var amplitude = 200;
var x = 0;
var y = 0;
var x2 = 0;
var y2 = 0;
var period = 0.1;

function setup() {
    createCanvas(500, 500);
    angleMode(RADIANS)
    noStroke();
}

function draw() {
    background(255)

    push()
    translate(width / 2, height / 2)
    x = amplitude * sin(radians(2 * Math.PI * frameCount / 20))
    y = amplitude * cos(radians(2 * Math.PI * frameCount / 20))
    fill(255, 0, 0)
    ellipse(x, y, 20, 20)
    pop()

    push()
    translate(width / 2, height / 2)
    let x2 = amplitude * sin(radians(2 * Math.PI * frameCount / 20))
    let y2 = amplitude * sin(radians(2 * Math.PI * frameCount / 20))
    fill(0, 0, 255)
    ellipse(x2, y2, 20, 20)
    fill(0, 255, 255)
    ellipse(0, y2, 50, 50)
    pop()
}