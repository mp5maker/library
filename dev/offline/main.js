(function() {
    "use strict";

    window.onload = init

    function init() {
        registerServiceWorker();
    }

    async function registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            try {
                await navigator.serviceWorker.register('./sw.js');
            } catch (e) {
                console.log(`SW registration failed`);
            }
        }
    }
})()