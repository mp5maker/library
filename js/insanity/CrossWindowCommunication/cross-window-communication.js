(function() {
    "use strict";

    window.onload = init;

    function init() {
        window.frames[0].parent === window;
        iframe.onload = () => {
            let iframeWindow = iframe.contentWindow;
            try {
                let doc = iframe.contentWindow;
            } catch(error) {
                console.log(error)
            }

            try {
                console.log(iframe.contentWindow.location);
            } catch(error) {
                console.log(error);
            }

            iframe.contentWindow.location = "/";
            iframe.onload = null;
        }
        let win = window.frames.example;
        window.postMessage([{ name: "Photon Khan", age: "27"}], '*');

        window.addEventListener('message', (event) => {
            if (event.origin == "http://127.0.0.1:5500") {
                console.log(event.data)
                return;
            }
        })
    }
})();