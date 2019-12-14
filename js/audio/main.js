(function() {
    let CANVAS = ""
    let AUDIO = ""

    let canvasContext = ""
    let canvasWidth = ""
    let canvasHeight = ""

    let audioContext = ""
    let audioSource = ""
    let audioDestination = ""

    function buildAudioGraph() {
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 1024;
        bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength)

        audioSource.connect(analyser)
        analyser.connect(audioDestination)
    }

    function visualize() {
        canvasContext.fillStyle = 'rgba(0, 0, 0, 0.5)';
        canvasContext.fillRect(0, 0, canvasWidth, canvasHeight);
        analyser.getByteTimeDomainData(dataArray);

        canvasContext.lineWidth = 2;
        canvasContext.strokeStyle = 'lightBlue';

        canvasContext.beginPath();
        var sliceWidth = canvasWidth / bufferLength;
        var x = 0;

        for (var i = 0; i < bufferLength; i++) {
            var v = dataArray[i] / 255;
            var y = v * canvasHeight;

            if (i === 0) {
                canvasContext.moveTo(x, y);
            } else {
                canvasContext.lineTo(x, y);
            }

            x += sliceWidth;
        }

        canvasContext.lineTo(canvasWidth, canvasHeight / 2);
        canvasContext.stroke();
        requestAnimationFrame(visualize);

    }


    function init() {
        /* DOM */
        CANVAS = document.querySelector('#visual')
        AUDIO = document.querySelector('#song')

        /* Canvas */
        canvasContext = CANVAS.getContext('2d')
        canvasWidth = CANVAS.width;
        canvasHeight = CANVAS.height;

        /* AUDIO */
        audioContext = new window.AudioContext()
        audioSource = audioContext.createMediaElementSource(AUDIO)
        audioDestination = audioContext.destination

        buildAudioGraph();

        window.requestAnimationFrame(visualize)
    }

    window.onload = init
})();