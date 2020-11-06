(function() {
    const init = () => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register("/sw.js")
                .then((reg) => console.debug(reg))
                .catch((error) => console.debug(error))
        }
    }

    window.addEventListener('DOMContentLoaded', init)
})();