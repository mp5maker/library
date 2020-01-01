function setup() {
    createCanvas(500, 500);
    noStroke();
    angleMode(DEGREES);
}

function draw() {
    /* Clear Rect */
    background(255);

    /* Rotate */
    push()
    fill(255, 0, 0)
    let cx = (width / 2)  + 20;
    let cy = (height / 2)  + 20 ;
    translate(cx, cy)
    rotate(frameCount)
    translate(-cx, -cy)
    rect(width / 2, height / 2, 40, 40)
    pop()
}