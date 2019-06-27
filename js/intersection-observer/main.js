(function() {
    "use strict";

    window.onload = init;

    function init() {
        const sectionOne = document.querySelector('.section-one');
        const callbackFunc = (entries, observer) => {
            entries.forEach(entry => console.log(entry));
        }

        // root: null ==> It is the viewport
        const options = {
            root: null,
            threshold: 0,
            rootMargin: "-150px"
        };
        const observer = new IntersectionObserver(callbackFunc, options)
        observer.observe(sectionOne)


        const sections = document.querySelectorAll("[class|='section']");
        const allSectionsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                const isSectionOne = entry.isIntersecting && entry.target.classList.contains('section-one')
                const isSectionTwo = entry.isIntersecting && entry.target.classList.contains('section-two')
                if (isSectionOne) {
                    entry.target.classList.add('bg-success');
                    document.querySelector('.section-two').classList.remove('bg-info');
                }
                if (isSectionTwo) {
                    entry.target.classList.add('bg-info');
                    document.querySelector('.section-one').classList.remove('bg-success');
                }
            })
        },{})
        sections.forEach((section) => {
            allSectionsObserver.observe(section)
        })
    }
})();