(function() {
    var circle = 3;
    var iteration = 50;
    var angle = 0;
    var radius = 0;

    function spiral({ canvas, context, canvasHeight, canvasWidth }) {
        context.save()
        context.beginPath()

        context.moveTo(canvasWidth / 2, canvasHeight / 2)
        for (let i = 0; i < (circle * iteration); i++) {
            radius += 0.75
            angle += (2 * Math.PI) / iteration;
            let x = (canvasWidth / 2) + (radius * Math.cos(angle))
            let y = (canvasHeight / 2) + (radius * Math.sin(angle))
            context.lineTo(x, y)
        }

        context.stroke()
        context.restore()
    }


    function start() {
        let canvas = document.getElementById('canvas');
        canvas.width = 500;
        canvas.height = 500;
        let canvasHeight = canvas.width;
        let canvasWidth = canvas.height
        let context = canvas.getContext('2d')
        spiral({ canvas, context, canvasHeight, canvasWidth })
    }

    function init() {
        start();
    }


    window.onload = init
})();
