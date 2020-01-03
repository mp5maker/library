var picture;

function setup() {
    createCanvas(windowWidth, windowHeight);

    loadImage('https://picsum.photos/500/500', function (img) {
        picture = img
    })
}

function draw() {
    background(255)

    if (picture) {
        push()
        const posterValue = map(mouseX, 0, width, 2, 255)
        filter(POSTERIZE, posterValue)
        image(picture,  0, 0, 500, 500)
        pop()
        push()
        const filterValue = map(mouseX, 0, width, 0, 1)
        filter(POSTERIZE, posterValue)
        // filter(THRESHOLD, filterValue)
        image(picture, 500, 0, 500, 500)
        pop()
    }
}