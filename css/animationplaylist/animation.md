## Advanced Animation ##

**Translate**
> Move from one place to another

    transform: translateX(200px);
    transform: translateY(200px);
    transform: translate(200px);
    transform: translate(200px, 200px);


**Scale**
> Stretch or Expand

    transform: scaleX(1.2);
    transform: scaleY(1.2);
    transform: scale(1.2);
    transform: scale(1.2, 1.2);


**Rotate**
> Rotate in x,y,z axis

    transform: rotate(120deg);
    transform: rotateX(120deg);
    transform: rotateY(120deg);
    transform: rotateZ(120deg);

**Combine All Transform**
> Combining all translate, scale, rotate
   
   transform: translate(1.2) scale(1.2) rotate(120deg);

**Transition**
> Property, duration

    transition: background 1s;

> Property, duration, delay, timing-function

    transition: background 1s 0.5s ease-in-out;
    transition: transform 2s 0.5s linear;
    transition: background 1s; transform 2s 0.5s ease-in;

**Keyframes**
> Animation

    animation-name: cloud-move;
    aniamtion-duration: 60s;
    animation-fill-mode: backwards;
    animation-fill-mode: forwards;
    animation-fill-mode: both;
    animation-iteration-count: 3;
    animation-iteration-count: infinite;
    animation-direction: reverse;
    animation-direction: normal;
    animation-direction: alternate;
    animation-direction: alternate-reverse;
    animation-timing-function: ease;
    animation-timing-function: linear;
    animation-timing-function: ease-in-out;
    animation-timing-function: cubic-bezier(-52, 0, -50, 1);

**Animation Shorthand**
> Property, duration, delay, timing-function, iteration-count, direction 

    animation: cloud-move 60s linear infinite reverse;



