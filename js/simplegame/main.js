(function() {
    "use strict";

    let canvas;
    let context;
    let dinasaur;
    let obstacle;
    let animationFrame;
    let isPlaying;
    let score = 0;
    let showScore;

    const clear = () => context.clearRect(0, 0, canvas.width, canvas.height)

    const createLine = ({start, end }) => {
        context.save()
        context.beginPath()
        context.moveTo(start.x, start.y)
        context.lineTo(end.x, end.y)
        context.stroke()
        context.restore()
    }

    /* Objects */
    class Component {
        constructor({ width, height, color, x, y, speed}) {
            this.width = width;
            this.height = -height;
            this.color = color;
            this.x = x;
            this.y = y;
            this.verticalAccelaration = 0.03
            this.update()
            this.jumpActivate = false
            this.speed = speed ? speed : 10
            return this
        }

        update() {
            context.save()
            context.fillStyle = this.color
            context.fillRect(this.x, this.y, this.width, this.height)
            context.restore()
        }

        detectCollision({ object }) {
            const collisionX = this.x < (object.x + object.width)
            const collisionY = (object.y + object.height) >= (this.y + this.height)
            if (collisionX && collisionY) return true
            return false
        }

        resetIfOutOfCanvas() {
            if (this.x < -10) {
                this.width = 20
                this.height = -20
                this.x = window.innerWidth + 10
                this.update()
            }
        }

        jump() {
            let timeout;
            let counter = 0;
            if (!this.jumpActivate) {
                this.jumpActivate = true
                const presentLocation = this.y
                const smoothJump = () => {
                    if (timeout) clearTimeout(timeout)
                    timeout = setTimeout(() => {
                        if (counter < 40) {
                            this.y -= (1 - this.verticalAccelaration)
                            counter++;
                            this.update()
                            smoothJump()
                        } else {
                            if (this.y < presentLocation) {
                                this.y += (1 + this.verticalAccelaration)
                                this.update()
                                smoothJump()
                            } else {
                                this.y = presentLocation
                                this.jumpActivate = false
                                this.update()
                                return
                            }
                        }
                    }, 20)
                }
                smoothJump()
            }
        }

        move({ direction }) {
            if (direction == 'left') this.left()
            if (direction == 'right') this.right()
            if (direction == 'top') this.top()
            if (direction == 'bottom') this.bottom()
        }

        left() {
            this.x -= this.speed
            this.update()
        }

        right() {
            this.x += this.speed
            this.update()
        }

        up() {
            this.y -= 1
            this.update()
        }

        down() {
            this.y += 1
            this.update()
        }
    }

    const animate = () => {
        clear();
        dinasaur.update()
        obstacle.move({ direction: 'left'})
        obstacle.resetIfOutOfCanvas()
        const isCollided = obstacle.detectCollision({ object: dinasaur })
        createLine({
            start: { x: 0, y: (window.innerHeight / 2)},
            end: { x: window.innerWidth, y: (window.innerHeight / 2)}
        })
        if (!isCollided) {
            isPlaying = true
            score++;
            showScore.innerHTML = `Your Score: ${score}`;
            animationFrame = window.requestAnimationFrame(animate)
        } else {
            isPlaying = false
            window.cancelAnimationFrame(animationFrame)
        }
    }

    const start = () => {
        dinasaur = new Component({
            width: 20,
            height: 20,
            color: `red`,
            x: 5,
            y: (window.innerHeight / 2)
        })

        obstacle = new Component({
            width: 20,
            height: 20,
            color: `blue`,
            x: window.innerWidth + 10,
            y: (window.innerHeight / 2),
            speed: 3
        })

        animationFrame = window.requestAnimationFrame(animate)
    }

    const onWindowKeyUp = (event) => {
        const UP = 38
        const DOWN = 40
        const LEFT = 37
        const RIGHT = 39
        const SPACE_BAR = 32
        const currentKeyCode = event.keyCode

        if (currentKeyCode == UP) {
            return dinasaur.jump()
        }

        // if (currentKeyCode == DOWN) {
        //     return dinasaur.down()
        // }

        // if (currentKeyCode == LEFT) {
        //     return dinasaur.left()
        // }

        // if (currentKeyCode == RIGHT) {
        //     return dinasaur.right()
        // }

        if (currentKeyCode == SPACE_BAR) {
            if (!isPlaying) {
                score = 0;
                start()
            }
            return
        }
    }

    const onWindowResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - 60;
    }

    function init() {
        canvas = document.querySelector('#game');
        showScore = document.querySelector('#show-score');
        context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - 60;
        start()
        window.addEventListener('resize', onWindowResize);
        window.addEventListener('keyup', onWindowKeyUp);
    }


    window.onload = init
})();