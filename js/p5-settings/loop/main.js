function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255)
    for(var i = 0; i < 100; i++) {
        /* Bar */
        rect(i * 5, 10, 10, 100)
        /* Pringles */
        arc(i * 5, 250, 100, 100, 0, 2 * Math.PI)
        /* Slanting Left Line */
        line((i * 5) - 10, 400, i * 5, 500)
        /* Slanting Right Line */
        line((i * 5) + 10, 550, i * 5, 650)
        /* Grid */
        line((i * 5) + 10, 700, (i * 5) + 10, 1100)
        line(15, 700 + (i * 5), 510, 700 + (i * 5))
    }
}