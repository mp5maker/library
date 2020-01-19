(function() {
    function transparentShapes({ canvas, context, canvasHeight, canvasWidth, composite }) {
        context.save()
        context.beginPath()
        context.rect(50, 50, 100, 100);
        context.fillStyle = 'blue'
        context.fill()

        context.globalCompositeOperation = composite
        // context.globalAlpha = 0.5
        context.beginPath()
        context.arc(100, 100, 45, 0, 2 * Math.PI, false)
        context.fillStyle = 'red'
        context.fill()
        context.restore()

        context.textAlign  = "center"
        context.fillText(composite, 400, 400);
    }

    function start() {
        let canvas = document.getElementById('canvas');
        canvas.width = 500;
        canvas.height = 500;
        let canvasHeight = canvas.width;
        let canvasWidth = canvas.height
        let context = canvas.getContext('2d')
        let globalCompositeOperations = [
            'source-atop',
            'source-in',
            'source-out',
            'source-over',
            'destination-in',
            'destination-over',
            'lighter',
            'xor',
            'copy'
        ]
        transparentShapes({
            canvas,
            context,
            canvasHeight,
            canvasWidth,
            composite: globalCompositeOperations[Math.floor(Math.random() * globalCompositeOperations.length)]
        })
    }

    function init() {
        start();
    }

    window.onload = init
})();
