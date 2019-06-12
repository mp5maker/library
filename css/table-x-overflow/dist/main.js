(function() {
    "use strict";

    window.onload = init;

    function init() {

        const onScroll = () => {
            const contentContainer = document.querySelector('.content-container');
            const contentContainerOffset = contentContainer.offsetTop;
            if (window.pageYOffset > contentContainerOffset) {
                if (!contentContainer.classList.contains('sticky')) {
                    contentContainer.classList.add('sticky')
                }
            }
            else {
                if (contentContainer.classList.contains('sticky')) {
                    contentContainer.classList.remove('sticky')
                }
            }
        }

        window.addEventListener('scroll', onScroll);
    }
})();