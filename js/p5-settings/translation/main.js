var coords = {
    x: 0,
    y: 0
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    /* Clear Rect */
    background(255);

    translate(coords.x, coords.y)
    fill(255, 0, 0)
    circle(0, 0, 20, 20, 0, 2 * Math.PI)
    coords.x += 1
    coords.y += 1
}