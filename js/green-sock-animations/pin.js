(function () {
    function init() {
        const { ScrollTrigger, gsap } = window;
        gsap.registerPlugin(ScrollTrigger);
        gsap.defaults({ ease: "none", duration: 2 });

        const t1 = gsap.timeline();
        t1.from(".content-3", { xPercent: -100 });
        t1.from(".content-4", { xPercent: 100 });
        t1.from(".content-5", { yPercent: 100 });

        ScrollTrigger.create({
            animation: t1,
            trigger: ".main-content",
            start: "top top",
            end: "+=4000",
            scrub: true,
            pin: true,
            anticipatePin: 1,
        });
    }

    window.onload = init;
})();
