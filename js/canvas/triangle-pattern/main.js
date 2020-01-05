(function() {
    triangleWidth = 50;
    triangleHeight = 50;
    noOfTriangles = 5;

    function trianglePattern({ canvas, context, canvasHeight, canvasWidth }) {
        context.save()

        for(let i = 0; i < noOfTriangles; i++) {
            context.save()
            context.beginPath()
            context.translate(i * triangleWidth, 0)
            context.moveTo(0,  triangleHeight);
            context.lineTo(triangleWidth / 2, 0)
            context.lineTo(triangleWidth, triangleHeight)
            context.closePath()
            context.fill()
            context.restore()
        }


        context.restore()
    }


    function start() {
        let canvas = document.getElementById('canvas');
        canvas.width = 500;
        canvas.height = 500;
        let canvasHeight = canvas.width;
        let canvasWidth = canvas.height
        let context = canvas.getContext('2d')
        trianglePattern({ canvas, context, canvasHeight, canvasWidth })
    }

    function init() {
        start();
    }


    window.onload = init
})();
