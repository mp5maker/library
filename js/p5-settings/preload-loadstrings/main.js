var lines;
function preload() {
    lines = loadStrings('./sample.txt');
}

function setup() {
    createCanvas(500, 500);
    text(lines, 0, 0, width, height);
}

function draw() {
    /* Clear Rect */
    // background(255);
}