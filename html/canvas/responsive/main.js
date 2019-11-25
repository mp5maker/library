(function() {
    "use strict";
    var canvas;
    var context;
    var canvasContainer;

    function init() {
        canvasContainer = document.querySelector('.circle-container');

        canvas = document.getElementById('circle');
        context = canvas.getContext('2d');

        setDimension();
        draw();
        window.addEventListener('resize', responsive, false)
    }

    function setDimension() {
        let dimension = canvasContainer.getBoundingClientRect()
        canvas.width = dimension.width
        canvas.height = dimension.height

        if (canvas.width < 200) {
            const scaleX = canvas.width / 200
            const scaleY = scaleX
            context.scale (scaleX, scaleY)
        }
    }

    function draw() {
        context.beginPath();
        circle(100, 100, 50, 0, 2 * Math.PI);
        context.stroke();
    }

    function responsive(event) {
        setDimension();
        draw();
    }

    function circle(xCoordinate, yCoordiante, radius, startAngle, endAngle, counterClockwise = false) {
        context.save();
        context.arc(xCoordinate, yCoordiante, radius, startAngle, endAngle, counterClockwise);
        context.restore();
    }

    window.onload = init
})();