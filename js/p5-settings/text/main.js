var colorFrom;
var colorTo
var numOfColumns = 10

function greetings(name) {
    return `Hello, ${name}`
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    /* Clear Rect */
    background(255);

    textAlign(CENTER)
    text(greetings(`Photon`), width / 2, height / 2)
}