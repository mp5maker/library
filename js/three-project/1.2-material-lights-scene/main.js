import * as THREE from '../node_modules/three/build/three.module.js'
import Stats from '../node_modules/three/examples/jsm/libs/stats.module.js'
import { GUI } from '../node_modules/three/examples/jsm/libs/dat.gui.module.js'

/* Colors */
const colors = {
    white: 0xEEEEEE,
    gray: 0xcccccc,
    red: 0xff0000,
    blue: 0x7777ff,
}

/* Dat GUI */
var controls = {
    rotationSpeed: 0.03,
    bouncingSpeed: 0.03
}
var gui = new GUI()
gui.add(controls, 'rotationSpeed').min(0).max(0.5).step(0.01).name('Rotation Speed')
gui.add(controls, 'bouncingSpeed').min(0).max(0.5).step(0.01).name('Bouncing Speed')
gui.domElement.style.position = 'absolute';
gui.domElement.style.right = '0px'
gui.domElement.style.top = '0px'

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
camera.position.set(-30, 40, 30)
camera.lookAt(scene.position)

/* Axes */
var axes = new THREE.AxesHelper(20)
scene.add(axes)

/* Plane */
var planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1)
var planeMaterial = new THREE.MeshLambertMaterial({ color: colors.gray })
var plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.rotation.x = -0.5 * Math.PI
plane.position.set(15, 0, 0)
plane.receiveShadow = true
scene.add(plane)

/* Cube */
var cubeGeometry = new THREE.CubeGeometry(4, 4, 4)
var cubeMaterial = new THREE.MeshLambertMaterial({
    color: colors.red,
})
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
cube.position.set(-4, 3, 0)
cube.castShadow = true
scene.add(cube)

/* Sphere */
var sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
var sphereMaterial = new THREE.MeshLambertMaterial({
    color: colors.blue,
})
var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
sphere.castShadow = true
sphere.position.set(5, 5, 5)
scene.add(sphere)

/* SpotLight */
var spotLight = new THREE.SpotLight(colors.white)
spotLight.position.set(-20, 50, -5)
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

/* Render/Animate */
var step = 0;
const animate = () => {
    stats.update()

    /* Cube */
    cube.rotation.x += controls.rotationSpeed
    cube.rotation.y += controls.rotationSpeed
    cube.rotation.z += controls.rotationSpeed

    step += controls.bouncingSpeed
    sphere.position.x = 20 + (10 * Math.cos(step))
    sphere.position.y = 2 + (10 * Math.abs(Math.sin(step)))

    requestAnimationFrame(animate)
    renderer.render(scene, camera)
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