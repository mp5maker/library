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
    anotherRandom: 0x000000,
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
camera.position.set(-40, 60, 40)
camera.lookAt(scene.position)

var planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1)
var planeMaterial = new THREE.MeshLambertMaterial({ color: colors.gray })
var plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.rotation.x = -0.5 * Math.PI
plane.receiveShadow = true
scene.add(plane)

var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
var sphereMaterial = new THREE.MeshLambertMaterial({ color: colors.blue })
var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
sphere.position.set(5, 7, 2)
sphere.castShadow = true
scene.add(sphere)

var boxGeometry = new THREE.BoxGeometry(5, 5, 5)
var boxMaterial = new THREE.MeshLambertMaterial({ color: colors.red })
var box = new THREE.Mesh(boxGeometry, boxMaterial)
box.position.set(-20, 5, 0)
box.castShadow = true
scene.add(box)

/* Hemisphere Light */
var hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1)
scene.add(hemisphereLight)

/* Dat GUI */
var controls = {
    color: 0xffffbb,
    groundColor: 0x080820,
    intensity: 1
}
var gui = new GUI()
var hemisphereGUI = gui.addFolder('Hemisphere')
hemisphereGUI.addColor(controls, 'color').name('Sky').onChange((color) => {
    hemisphereLight.color = new THREE.Color(color)
})
hemisphereGUI.addColor(controls, 'groundColor').name('Ground').onChange((color) => {
    hemisphereLight.groundColor = new THREE.Color(color)
})
hemisphereGUI.add(controls, 'intensity').min(0).max(1000).onChange((value) => {
    hemisphereLight.intensity = value
})


gui.domElement.style.position = 'absolute';
gui.domElement.style.right = '0px'
gui.domElement.style.top = '0px'

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