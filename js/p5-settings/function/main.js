function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100)
    noStroke()
    noLoop()
}

function draw() {
    /* Clear Rect */
    background(255);

    var cursorFromOrigin = map(mouseX, 0, width, 0, width)
    for (let i = 0; i < Math.floor(cursorFromOrigin); i++) {
        let colorFrom = color(random(0, 360), random(0, 360), random(0, 360))
        let colorTo = color(random(0, 360), random(0, 360), random(0, 360))
        let interpolation = map(mouseX, 0, width, 0, 1)
        fill(lerpColor(colorFrom, colorTo, interpolation))
        rect(i * 10, 0, 50, 50);
        arc(i * 10, 100, 50, 50, 0, 2 * Math.PI, CHORD);

        const randomRadius = random(1, 50)
        arc(width / 2, height / 2, randomRadius, randomRadius, 0, 2 * Math.PI, CHORD);
    }
}

function keyPressed() {
    redraw();
}