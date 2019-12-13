(function() {
    /* DOM */
    CANVAS = ""
    FPS = ""

    /* Game Framework */
    var width = "";
    var height = "";
    var context = "";
    var gameFramework = function () {
        var requestAnimationFrame = window.requestAnimationFrame

        var mainLoop = function (time) {
            clearCanvas();
            drawBall();
            measureFramePerSecond(time);
            requestAnimationFrame(mainLoop);
        }

        var start = function () {
            CANVAS = document.querySelector('#game')
            width = CANVAS.width
            height = CANVAS.height
            context = CANVAS.getContext('2d')

            FPS = document.querySelector('#framePerSecond')
            requestAnimationFrame(mainLoop);
        }

        return {
            start
        }
    }

    /* Canvas */
    function clearCanvas() {
        context.clearRect(0, 0, width, height)
    }

    function drawBall() {
        context.save()
        context.beginPath()
        context.arc(100, 100, 10, 0, 2 * Math.PI)
        context.fill()
    }


    /* Measure Framer Per Second */
    var frameCount = 0;
    var lastTime;
    var framePerSecond;

    var measureFramePerSecond = function(newTime) {
        if (lastTime == undefined) return lastTime = newTime;

        /* Delta */
        var differenceInTime = newTime - lastTime;
        if (differenceInTime > 1000) {
            framePerSecond = frameCount;
            frameCount = 0;
            lastTime = newTime
        }

        FPS.innerHTML = 'FPS: ' + framePerSecond;
        frameCount++;
    }

    /* After window load */
    function init() {
        var game = new gameFramework();
        game.start();
    }

    window.onload = init;
})();