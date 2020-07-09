import * as THREE from '../node_modules/three/build/three.module.js'
import Stats from '../node_modules/three/examples/jsm/libs/stats.module.js'
import { GUI } from '../node_modules/three/examples/jsm/libs/dat.gui.module.js'

/* Colors */
const colors = {
    white: 0xEEEEEE,
    gray: 0xcccccc,
    red: 0xff0000,
    blue: 0x7777ff,
    whiteShade: 0xffffff,
    ambientLight: 0x0c0c0c,
    random: 0x44ff44,
    anotherRandom: 0x000000
}

/* Renderer */
var renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setClearColor(colors.white)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.shadowMap.enabled = true

/* Scene */
var scene = new THREE.Scene()

/* Camera */
var camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.set(120, 60, 180)
camera.lookAt(scene.position)

var planeGeometry = new THREE.PlaneGeometry(60, 20, 1,)
var planeMaterial = new THREE.MeshLambertMaterial({ color: colors.blue })
var plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.rotation.x = -0.5 * Math.PI
plane.position.set(15, 0, 0)
scene.add(plane)

/* Ambient Light */
var ambientLight = new THREE.AmbientLight(colors.ambientLight)
scene.add(ambientLight)

/* SpotLight */
var spotLight = new THREE.SpotLight(colors.whiteShade, 0.5)
spotLight.position.set(-40, 60, -10)
spotLight.castShadow = true
spotLight.shadow.mapSize.width = 1024 * 5;
spotLight.shadow.mapSize.height = 1024 * 5;
scene.add(spotLight)

/* Stats */
const prepareStats = () => {
    let stats = new Stats()
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px'
    stats.domElement.style.top = '0px'
    $('#stats-output').append(stats.domElement);
    return stats
}
var stats = prepareStats()

/* Dat GUI */
var controls = {
    perspective: 'Perspective',
    switchCamera: function() {
        if (camera instanceof THREE.PerspectiveCamera) {
            camera = new THREE.OrthographicCamera(
                window.innerWidth / - 16,
                window.innerWidth / 16,
                window.innerHeight / 16,
                window.innerHeight / -16,
                -200,
                500
            )
            camera.position.set(2, 1, 3)
            camera.lookAt(scene.position.x, scene.position.y, scene.position.z)
            this.perspective = 'Orthographic'
        } else {
            camera = new THREE.PerspectiveCamera(
                45,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            )
            camera.position.set(120, 60, 180)
            camera.lookAt(scene.position.x, scene.position.y, scene.position.z)
            this.perspective = 'Perspective'
        }
    }
}
var gui = new GUI()
const cameraGUI = gui.addFolder('Camera')
cameraGUI.add(controls, 'perspective').name('Current Camera')
cameraGUI.add(controls, 'switchCamera').name('Switch Camera')

gui.domElement.style.position = 'absolute';
gui.domElement.style.right = '0px'
gui.domElement.style.top = '0px'


/* Render/Animate */
const animate = () => {
    stats.update()
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}
requestAnimationFrame(animate)

/* Resize */
const onWindowResize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = (window.innerWidth / window.innerHeight)
    camera.updateProjectionMatrix();
}
window.addEventListener('resize', onWindowResize)

$('#webgl-output').append(renderer.domElement)
$('#gui-output').append(gui.domElement)