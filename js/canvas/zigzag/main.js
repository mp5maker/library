(function() {
    var lines = 20;
    var spacing = 50;

    function zigzag({ canvas, context, canvasHeight, canvasWidth }) {
        context.save()
        context.beginPath()
        context.strokeStyle = "firebirck";
        context.lineWidth = "3"

        context.moveTo(0, 0)
        for (let i = 0; i < lines; i++) {
            let isOdd = i % 2;
            context.lineTo(spacing * i, isOdd ? canvasHeight : 0)
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
        zigzag({ canvas, context, canvasHeight, canvasWidth })
    }

    function init() {
        start();
    }


    window.onload = init
})();
