var list = []

function setup() {
    const onSuccessLoadJSON = (data) =>{
        list = data
        for (let index in list) {
            const latitude = map(Number(list[index].latitude), -180, 180, 0, width)
            const longitude = map(Number(list[index].longitude), -360, 360, 0, height)
            fill(255, 0, 0)
            ellipse(latitude, longitude, 5, 5)
        }
    }
    data = loadJSON("./sample.json", onSuccessLoadJSON)
    createCanvas(windowWidth, windowHeight);
}

function draw() {}