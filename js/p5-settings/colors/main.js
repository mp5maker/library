function setup() {
    createCanvas(500, 500);
}

function draw() {
    /* Clear Rect */
    background(255);

    /* Colors */
    noStroke();
    let redColor = color(255, 0, 0)
    let greenColor = color(0, 255, 0)

    /* Rectangles */
    fill(redColor)
    rect(0, 0, width / 2, height / 2)

    fill(greenColor)
    rect(width/ 2, 0 , width / 2, height / 2)

    let mixColor = color(
        red(redColor) + red(greenColor),
        green(redColor) + green(greenColor),
        blue(redColor) + blue(greenColor)
    )
    fill(mixColor)
    rect(0, height / 2, width, height / 2)
}