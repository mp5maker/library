var x = 0;
var y = 0;

function setup() {
    createCanvas(500, 500);
    noLoop()
    noStroke()
    colorMode(HSB, 360, 100, 100)
}

function draw() {
    /* Clear Rect */
    block();
}

function block() {
    background(255);
    fill(random(0, 255), random(0, 255), random(0, 255))
    rect(x, y, 50, 50)
}

function keyPressed() {
    if (key == 'ArrowUp') {
        y -= 5
        block()
    }
    if (key == 'ArrowDown') {
        y += 5
        block()
    }
    if (key == 'ArrowLeft') {
        x -= 5
        block()
    }
    if (key == 'ArrowRight') {
        x += 5
        block()
    }
}