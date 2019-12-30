function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(255);
    beginShape(LINES)
    /* Vertex */
    let x = 0;
    while(x < width) {
        let y = 0;
        // line(x * 10, 0, x * 10, height)
        // line(0, x * 10 , width, x * 10)
        while(y < height) {
            vertex(x, y);
            y += 10;
        }
        x += 10;
    }
    endShape();
}