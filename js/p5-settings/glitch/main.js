function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(5)
}

function draw() {
    background(255);
    fill('firebrick')
    beginShape();
    for (let i = 0; i < 25; i ++) {
        vertex(i * random(100), random(height))
    }
    endShape(CLOSE);
}