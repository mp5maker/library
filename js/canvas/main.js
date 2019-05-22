(function() {
    "use strict";

    window.onload = init;

    function init() {
        let shapes = {
            rectangle: document.getElementById('rectangle'),
            coordinates: document.getElementById('coordinates'),
            circle: document.getElementById('circle'),
        }

        let context = {
            rectangle: shapes.rectangle.getContext('2d'),
            coordinates: shapes.coordinates.getContext('2d'),
            circle: shapes.circle.getContext('2d'),
        }

        const degreeToRad = (degree) => (parseFloat(degree) / 180) * Math.PI;

        // Simple Rectangle
        context.rectangle.fillStyle = "firebrick";
        context.rectangle.fillRect(0, 0, 200, 200);

        // Simple Coordinates
        context.coordinates.moveTo(0, 0);
        context.coordinates.lineTo(200, 200);
        context.coordinates.stroke();

        // Simple Circle
        const START = degreeToRad(-90);
        context.circle.clearRect(0, 0, 200, 200);

        context.circle.beginPath();
        context.circle.arc(100, 100, 80, START, degreeToRad(360) + START, false);
        context.circle.strokeStyle = '#e7f2ba';
        context.circle.lineWidth="4";
        context.circle.stroke();

        context.circle.beginPath();
        context.circle.arc(100, 100, 80, START, degreeToRad(15) + START, false);
        context.circle.strokeStyle = 'lightgrey';
        context.circle.lineWidth="4";
        context.circle.stroke();
    }
})();