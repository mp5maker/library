var widthMultiplier = 10;
var heightMutliplier = 20;
var rotationSpeed = 0.001;
var theta = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER)
}

function draw() {
    background(255);
    noFill();
    translate(width / 2, height / 2);

    /* Stationary Rectangle */
    for (let i = 0; i < 25; i++) {
        rect(0, 0, i * widthMultiplier, i * heightMutliplier)
    }

    /* Rotating Rectangle */
    rotate(theta)
    for(let i = 0; i < 25; i++) {
        rect(0, 0, i * widthMultiplier, i * heightMutliplier);
    }
    theta += rotationSpeed;
}