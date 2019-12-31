var colorFrom;
var colorTo
var numOfColumns = 10

function setup() {
    createCanvas(500, 500);
    noStroke();
    colorMode(HSB, 360, 100, 100);
    colorFrom = color(0, 50, 100)
    colorTo = color(45, 80, 100)
}

function draw() {
    /* Clear Rect */
    background(255);

    for(let i = 0; i < numOfColumns; i++) {
        var interpolationValue = map(mouseX * i, 0, width, 0, 1)
        var colorHue = lerpColor(colorFrom, colorTo, interpolationValue)
        fill(colorHue)
        rect(i * (width / numOfColumns), 0, (width / numOfColumns) , height)
    }
}