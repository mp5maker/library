var noOfColumns = 3
var h = 0
var colorRange = 45

function setup() {
    createCanvas(600, 600);
    colorMode(HSB, 360, 100, 100)
    noStroke()
    noLoop()
}

function draw() {
    /* Clear Rect */
    background(255);

    /* Colors */
    for (let i = 0; i < noOfColumns; i++) {
        let randomHue = random(h  - colorRange, h + colorRange);
        fill(randomHue, 100, 100)
        rect(i * 200, 0, 200, 600)
    }
}

function keyPressed() {
    h = random(0, 360)
    redraw()
}