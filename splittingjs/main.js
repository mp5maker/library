window.onload = init

function init() {
    Splitting({
        target: "[data-splitting]",
        by: "chars",
        key: null
    });

    const animationList = ["bounce", "flash", "pulse", "rubberBand", 
        "shake", "headShake", "swing", "tada", "wobble",	
        "jello", "bounceIn", "bounceInDown", "bounceInLeft", 
        "bounceInRight", "bounceInUp", "bounceOut", "bounceOutDown", 
        "bounceOutLeft", "bounceOutRight", "bounceOutUp", 
        "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", 
        "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp",
        'fadeInUpBig', 'fadeOut', 'fadeOutDown', "fadeOutDownBig", "fadeOutLeft",	
        'fadeOutLeftBig',	'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp',	
        'fadeOutUpBig', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY',	'lightSpeedIn',
        'lightSpeedOut', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft',
        'rotateInUpRight', 'rotateOut',	'rotateOutDownLeft', 'rotateOutDownRight',
        'rotateOutUpLeft', 'rotateOutUpRight', 'hinge', 'jackInTheBox',
        'rollIn',	'rollOut', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight',
        'zoomInUp', 'zoomOut', 'zoomOutDown',	'zoomOutLeft', 'zoomOutRight', 'zoomOutUp',
        'slideInDown', 'slideInLeft', 'slideInRight',	'slideInUp', 
        'slideOutDown', 'slideOutLeft',	'slideOutRight', 'slideOutUp', 'heartBeat'
    ];

    const requiredTexts = document.querySelectorAll(".text-wrapper span .char");
    _.each(requiredTexts, (element, key) => {
        element.classList.add('animated')
        element.classList.add('1')
        element.classList.add(animationList[_.random(0, animationList.length - 1)])
    });
    _.delay(function () {
        _.each(requiredTexts, (element) => {
            element.classList.remove('animated')
        });
    }, 2000)
}

