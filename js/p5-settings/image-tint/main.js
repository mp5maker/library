function setup() {
    createCanvas(windowWidth, windowHeight);

    loadImage('https://picsum.photos/500/500', function (img) {
        image(img, 0, 0, width, height);
        tint(102, 0, 0);
        image(img, width / 2, 0, width, height);
    })
}

function draw() {
}