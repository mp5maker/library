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
camera.position.set(-30, 40, 30)
camera.lookAt(scene.position)


/* Custom Geometry */
var vertices = [
    new THREE.Vector3(-1, -1, 1), // 0
    new THREE.Vector3(1, -1, 1), // 1
    new THREE.Vector3(-1, 1, 1), // 2
    new THREE.Vector3(1, 1, 1), // 3
    new THREE.Vector3(-1, -1, -1), // 4
    new THREE.Vector3(1, -1, -1), // 5
    new THREE.Vector3(-1, 1, -1), // 6
    new THREE.Vector3(1, 1, -1), // 7
]

var faces = [
    new THREE.Face3(0, 3, 2), // Front
    new THREE.Face3(0, 1, 3), // Front
    new THREE.Face3(1, 5, 3), // Right
    new THREE.Face3(1, 7, 3), // Right
    new THREE.Face3(5, 7, 6), // Back
    new THREE.Face3(5, 6, 4), // Back
    new THREE.Face3(4, 6, 2), // Left
    new THREE.Face3(4, 2, 0), // Left
    new THREE.Face3(3, 6, 2), // Top
    new THREE.Face3(3, 7, 6), // Top
    new THREE.Face3(0, 5, 4), // Bottom
    new THREE.Face3(0, 1, 5), // Bottom
]
var geometry = new THREE.Geometry()
geometry.vertices = vertices
geometry.faces = faces
geometry.computeFaceNormals();
geometry.computeVertexNormals();
var material = new THREE.MeshLambertMaterial({ color: colors.red })
var shape = new THREE.Mesh(geometry, material)
scene.add(shape)

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
    rotationSpeed: 0.03,
    numberOfObjects: scene.children.length,
}
var gui = new GUI()
gui.add(controls, 'rotationSpeed').min(0).max(0.5).step(0.01).name('Rotation Speed')
gui.domElement.style.position = 'absolute';
gui.domElement.style.right = '0px'
gui.domElement.style.top = '0px'


/* Render/Animate */
const animate = () => {
    stats.update()
    shape.geometry.verticesNeedUpdate = true;
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