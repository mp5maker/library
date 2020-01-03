class Particle {
    constructor({
        speed = 5.0,
        lifespan = 255,
        location = { x: 0, y: 0 },
        width = 20,
        height = 20,
    } = {}) {
        this.speed = speed;
        this.lifespan = lifespan;
        this.location = location
        this.width = width
        this.height = height
    }

    bounce() {
        if ((this.getLocation().y >= height) || (this.getLocation().y < 0)) {
            this.setSpeed(this.getSpeed() * -1)
        }
        this.setLocation({
            x: this.getLocation().x,
            y: this.getLocation().y + this.getSpeed()
        })
        if (this.lifespan > 0) this.lifespan--;
    }

    getWidth() {
        return this.width;
    }

    setWidth(width) {
        this.width = width;
    }

    getHeight() {
        return this.height;
    }

    setHeight(height) {
        this.height = height;
    }

    getLifeSpan() {
        return this.lifespan;
    }

    setLifeSpane(lifespan) {
        return this.lifespan = lifespan;
    }

    getSpeed() {
        return this.speed;
    }

    setSpeed(speed) {
        return this.speed = speed;
    }

    getLocation() {
        return this.location
    }

    setLocation(location) {
        this.location = location
    }
}

var particles = []

/* P5 */
function setup() {
    createCanvas(500, 500);
    noStroke();
}

function draw() {
        /* Clear Rect */
    background(255);

    for(let i = 0; i < particles.length; i++) {
        const currentParticle = particles[i]
        ellipse(currentParticle.getLocation().x, currentParticle.getLocation().y, currentParticle.getWidth(), currentParticle.getHeight())
        let particleColor = lerpColor(color(255), color(255, 0, 0), currentParticle.getLifeSpan() / 255)
        fill(particleColor)
        currentParticle.bounce()
        if (currentParticle.getLifeSpan() <= 0) particles.splice(i, 1);
    }
}


function keyPressed() {
    particles.push(new Particle({
        location: {
            x: random(width),
            y: random(height)
        }
    }))
}