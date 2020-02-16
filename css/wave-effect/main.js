(function() {

    function init() {
        const root = document.documentElement;

        document.addEventListener('mousedown', (event) => {
            const element = event.target
            const x = (event.clientX - event.offsetLeft) / element.offsetWidth;
            const y = (event.clientY - event.offsetTop) / element.offsetHeight;
            console.log('hello')
            root.style.setProperty('--ripple-x', x);
            root.style.setProperty('--ripple-y', y);
        })
    }

    window.onload = init;

})();