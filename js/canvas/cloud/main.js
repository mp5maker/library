(function() {

    function cloud({ canvas, context, canvasHeight, canvasWidth }) {
        context.save()
        context.beginPath()
        context.translate(250, 250);
        let gradient = context.createRadialGradient(30, 30, 10, 90, 90, 200);
        gradient.addColorStop(0, '#8ED6FF');
        gradient.addColorStop(1, '#004CB3');
        context.fillStyle = gradient;
        let initialCoords = {
            x: 30,
            y: 30,
        }
        let coords = Object.assign({}, initialCoords)
        context.moveTo(30, 30)
        for (let i = 0; i < 2; i++) {
            coords.x += 30

            let controlOne = {
                x: coords.x - 30,
                y: coords.y - (Math.random() * 30),
            }
            let controlTwo = {
                x: coords.x,
                y: coords.y - (Math.random() * 30),
            }
            let endPoint = {
                x: coords.x,
                y: coords.y,
            }
            context.bezierCurveTo(controlOne.x, controlOne.y, controlTwo.x, controlTwo.y, endPoint.x, endPoint.y)
        }
        let lastCoords = Object.assign({}, coords);
        coords = {
            x: 40,
            y: 40,
        }
        context.moveTo(coords.x, coords.y)
        context.lineTo(initialCoords.x, initialCoords.y)
        context.fill();
        context.moveTo(coords.x, coords.y)
        for (let i = 0; i < 2; i++) {
            coords.x += 30

            let controlOne = {
                x: coords.x - 30,
                y: coords.y + (Math.random() * 30),
            }
            let controlTwo = {
                x: coords.x,
                y: coords.y + (Math.random() * 30),
            }
            let endPoint = {
                x: coords.x,
                y: coords.y,
            }
            context.bezierCurveTo(controlOne.x, controlOne.y, controlTwo.x, controlTwo.y, endPoint.x, endPoint.y)
        }
        context.lineTo(lastCoords.x, lastCoords.y)
        context.fill();
        context.stroke()
        context.fill();
        context.restore()
    }


    function start() {
        let canvas = document.getElementById('canvas');
        canvas.width = 1000;
        canvas.height = 1000;
        let canvasHeight = canvas.width;
        let canvasWidth = canvas.height
        let context = canvas.getContext('2d')
        cloud({ canvas, context, canvasHeight, canvasWidth })
    }

    function init() {
        start();
    }


    window.onload = init
})();
