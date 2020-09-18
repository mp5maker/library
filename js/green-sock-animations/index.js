(function() {

    function init () {
        gsap.to(".rotating-box", { x: 500 });
        gsap.to(".scrolling-box-3", {
            scrollTrigger: {
                trigger: ".scrolling-box-3",
                // top center bottom pixels percentage
                start: "top center",
                markers: true,
                // play pause resume reverse reset complete none
                // [top-to-bottom top-to-bottom-passing bottom-to-top bottom-to-top-passing]
                toggleActions:  "restart pause reverse pause"
            },
            x: 500,
            rotation: 360,
            duration: 2,
        });
    }



    window.onload = init
})();