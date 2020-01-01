function setup() {
    createCanvas(500, 500);
    noStroke();
    noLoop();
}

function draw() {
    /* Clear Rect */
    for(let i = 0; i < 20; i++) {
        push()
        fill(0, 0, 0, 4)
        translate(i * 20, height / 2)
        scale(i * 0.10, i * 0.10)
        ellipse(0, 0, 20, 20)
        pop()
    }
}

function keyPressed() {
    redraw()
}