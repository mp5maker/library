(function() {
    class Animation {
        constructor() {
            this.canvas = document.querySelector('#canvas')
            this.context = this.canvas.getContext('2d')
            this.t = 0
            this.timeInterval = 0
            this.startTime = 0
            this.lastTime = 0
            this.frame = 0
            this.animating = false
            this.animationFrame = ''
            this.animate = this.animate.bind(this)
        }

        getContext() {
            return this.context
        }

        getCanvas() {
            return this.canvas
        }

        clear() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        }

        setStage(func) {
            this.stage = func
        }

        isAnimating() {
            return this.animating
        }

        getFrame() {
            return this.frame
        }

        start() {
            this.animating = true
            this.startTime = new Date().getTime()
            this.animationFrame = window.requestAnimationFrame(this.animate)
        }

        animate(currentTime) {
            this.frame++
            if (!this.lastTime) this.lastTime = currentTime
            else {
                this.timeInterval = currentTime - this.lastTime
                this.t += this.timeInterval
                this.lastTime = currentTime
            }
            if (this.stage) this.stage()
            if (this.animating) this.animationFrame = window.requestAnimationFrame(this.animate)
            else window.cancelAnimationFrame(this.animationFrame)
        }

        getTimeInterval() {
            return this.timeInterval
        }

        stop() {
            this.animating = false
        }

        getTime() {
            return this.t
        }

        getFps() {
            return this.timeInterval > 0 ? 1000 / this.timeInterval : 0
        }
    }

    window.PhotonAnimation = Animation
})()