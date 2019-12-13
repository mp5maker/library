(function() {
    /* DOM */
    var CANVAS = ""
    var FPS = ""

    /* Position */
    var currentPosition = { x: 100, y: 100 }

    /* Keyboard */
    function keyboardPressed(event) {
        const LEFT = 37
        const UP = 38
        const RIGHT = 39
        const DOWN = 40

        switch (event.keyCode) {
            case LEFT:
                return currentPosition.x = currentPosition.x - 5
            case UP:
                return currentPosition.y = currentPosition.y - 5
            case RIGHT:
                return currentPosition.x = currentPosition.x + 5
            case DOWN:
                return currentPosition.y = currentPosition.y + 5
            default: return
        }
    }

    function keyboard() {
        window.addEventListener('keyup', keyboardPressed, false)
        window.addEventListener('keydown', keyboardPressed, false)
    }


    /* Mouse */
    function mouseMoving(event) {
        const rect = CANVAS.getBoundingClientRect();
        currentPosition = {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        }
    }

    function mouse() {
        CANVAS.addEventListener('mousemove', mouseMoving, false)
        CANVAS.addEventListener('mouseup', mouseMoving, false)
        CANVAS.addEventListener('mousedown', mouseMoving, false)
    }

    /* Controls */
    function addControls() {
        keyboard();
        mouse();
    }

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
            addControls();
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
        context.arc(currentPosition.x, currentPosition.y, 10, 0, 2 * Math.PI)
        context.fill();

        context.restore();
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