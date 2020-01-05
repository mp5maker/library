(function() {
    var circle = 3;
    var iteration = 50;
    var angle = 0;
    var radius = 0;

    function drawBranches({ context, startX, startY, trunkWidth, level }) {
        if (level < 12) {
            const changeX = 100 / (level + 1);
            const changeY = 200 / (level + 1)

            const leftX = startX - (Math.random() * changeX)
            const leftY = startY - (Math.random() * changeY)
            const rightX = startX + (Math.random() * changeX)
            const rightY = startY - (Math.random() * changeY)

            context.beginPath()
            context.moveTo(startX, startY)
            context.lineWidth = trunkWidth;
            context.quadraticCurveTo(startX + (trunkWidth / 4), startY - (trunkWidth), leftX, leftY)
            context.lineCap = 'round'
            // context.lineTo(leftX, leftY)
            context.stroke()

            context.beginPath()
            context.moveTo(startX, startY)
            context.lineWidth = trunkWidth;
            context.quadraticCurveTo(startX - (trunkWidth / 4), startY - (trunkWidth), rightX, rightY)
            context.lineCap = 'round'
            // context.lineTo(rightX, rightY)
            context.stroke()

            drawBranches({
                context,
                startX: leftX,
                startY: leftY,
                trunkWidth: (trunkWidth * 0.7),
                level: level + 1
            })

            drawBranches({
                context,
                startX: rightX,
                startY: rightY,
                trunkWidth: (trunkWidth * 0.7),
                level: level + 1
            })
        }
    }

    function fractal({ canvas, context, canvasHeight, canvasWidth }) {
        context.save()
        context.beginPath()

        drawBranches({
            context,
            startX: (canvasWidth / 2),
            startY: (canvasHeight / 2),
            trunkWidth: 50,
            level: 0
        })

        context.stroke()
        context.restore()
    }


    function start() {
        let canvas = document.getElementById('canvas');
        canvas.width = 1000;
        canvas.height = 1000;
        let canvasHeight = canvas.width;
        let canvasWidth = canvas.height
        let context = canvas.getContext('2d')
        fractal({ canvas, context, canvasHeight, canvasWidth })
    }

    function init() {
        start();
    }


    window.onload = init
})();
