(function() {
    var circle = 3;
    var iteration = 50;
    var angle = 0;
    var radius = 0;

    function line({ canvas, context, canvasHeight, canvasWidth }) {
        context.save()
        context.beginPath()

        context.moveTo(0, 0)
        context.strokeStyle = "firebrick"
        context.lineWidth = 4
        context.lineTo(canvasWidth, canvasHeight)
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
        line({ canvas, context, canvasHeight, canvasWidth })
    }

    function init() {
        start();
    }


    window.onload = init
})();
