var p = "";
function setup() {
    createCanvas(windowWidth, windowHeight);
    p = createP("Hello, I am a paragraph")
    frameRate(1);
}

function draw() {
    /* Clear Rect */
    p.position(random(windowWidth), random(windowHeight))
}