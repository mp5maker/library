(function() {
    /* DOM */
    var GAME = document.querySelector('#game')
    var FPS = document.querySelector('#framePerSecond')


    var frameCount = 0;
    var lastTime;
    var framePerSecond;

    /* Measure Framer Per Second */
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


    /* Game Framework */
    var gameFramework = function() {
        var requestAnimationFrame = window.requestAnimationFrame

        var mainLoop = function(time) {
            GAME.innerHTML = Math.random();
            measureFramePerSecond(time);
            requestAnimationFrame(mainLoop);
        }

        var start = function() {
            requestAnimationFrame(mainLoop);
        }

        return {
            start
        }
    }

    /* After window load */
    function init() {
        var game = new gameFramework();
        game.start();
    }

    window.onload = init;
})();