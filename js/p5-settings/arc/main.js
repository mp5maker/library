function setup() {
    createCanvas(500, 500);
}

function draw() {
    /* Clear Rect */
    background(255);

    /* Circle  */
    arc(100, 100, 100, 100, 0, 2 * Math.PI)
    /* Semi Circle   */
    arc(200, 200, 100, 100, 0, Math.PI, CHORD)
    /* Semi Circle   */
    arc(300, 300, 100, 100, 0, Math.PI, PIE)
}