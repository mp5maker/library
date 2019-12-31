function setup() {
    createCanvas(500, 500);
}

function draw() {
    /* Clear Rect */
    background(255);

    /* Colors */
    noStroke();
    colorMode(HSB, 360, 100, 100)
    for (i = 0; i < 360; i++) {
        for (j = 0; j < 100; j++) {
            fill(i, j, 100)
            rect(i, j, 10, 10)
        }
    }
}