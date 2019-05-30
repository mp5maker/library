(function() {
    "use strict";

    window.onload = init;

    function init() {
        /**
         * Blob as url
         */
        // Create a blob from a string
        let blob = new Blob(["<html></html>"], {type: 'text/html'});
        console.log(blob);

        // Create a hello world blob
        let hello = new Uint8Array([72, 101, 108, 108, 111]); // Hello in binary form
        let helloWorldBlob = new Blob([hello, ' ', 'world'], { type: 'text/html'});
        console.log(helloWorldBlob);

        // Force Download
        let newBlob = new Blob(['Hello World!'], {type: 'text/plain'});
        let link = document.getElementById('link');
        link.href = URL.createObjectURL(newBlob);

        // Link Created dynamically by javascript
        window.downloadMe = () => {
            let aTag = document.createElement('a')
            aTag.download = "hello.txt"
            let dynamicBlob = new Blob(['Hello World'], {type: 'text/plain'});
            link.href = URL.createObjectURL(dynamicBlob);
            link.click();
            URL.revokeObjectURL(link.href); // Free from memory
        }
        /**
         * Blob to base64
         */
        window.downloadAsBase64 = () => {
            let aTagTwo = document.createElement('a');
            aTagTwo.download = 'hello.txt';
            let blobWorld = new Blob(['Hello world!'], {type: 'text/plain'});

            let reader = new FileReader();
            reader.readAsDataURL(blobWorld);
            reader.onload = function() {
                aTagTwo.href = reader.result;
                aTagTwo.click();
            }
        }
    }
})();