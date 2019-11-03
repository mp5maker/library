(function() {
    window.onload = init;

    function init() {
        console.log(document.querySelector(`#video-chapters`).textTracks)
        let webcamStream;
        let video;

        window.startWebcam = () => {
            navigator.mediaDevices.getUserMedia({
                audio: true,
                video: true
            }).then((stream) => {
                video = document.querySelector('#webcam');
                video.srcObject = stream;
                video.play();
            }).catch((error) => console.log(error))
        }

        window.stopWebcam = () => {
            webcamStream.getTracks()[0].stop();
            webcamStream.getTracks()[1].stop();
        }
    }
})()