import * as THREE from '../node_modules/three/build/three.module.js'
import Stats from '../node_modules/three/examples/jsm/libs/stats.module.js'
import { GUI } from '../node_modules/three/examples/jsm/libs/dat.gui.module.js'
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js'
import { RectAreaLightUniformsLib } from '../node_modules/three/examples/jsm/lights/RectAreaLightUniformsLib.js'

/* Colors */
const colors = {
    white: 0xffffff,
    black: 0x080808,
    gray: 0x808080,
    red: 0xA00000,
}

/* Renderer */
var renderer = new THREE.WebGLRenderer({
    antialias: true
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.outputEncoding = THREE.sRGBEncoding
renderer.setPixelRatio(window.devicePixelRatio || 1)

/* Scene */
var scene = new THREE.Scene()

/* Camera */
var camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
)
camera.position.set(0, 20, 35)
camera.lookAt(scene.position)

/* Light */
var ambient = new THREE.AmbientLight(colors.white, 0.1);
scene.add(ambient)

RectAreaLightUniformsLib.init()
var rectLight = new THREE.RectAreaLight(colors.white, 1, 10, 10)
rectLight.position.set(5, 5, 0)
scene.add(rectLight)

var rectLightGeometry = new THREE.PlaneGeometry(rectLight.width, rectLight.height)
var rectLightMaterial = new THREE.MeshBasicMaterial({ side: THREE.BackSide })
var rectLightMesh = new THREE.Mesh(rectLightGeometry, rectLightMaterial)
rectLight.add(rectLightMesh)

var rectLightMeshBackGeometry = new THREE.PlaneGeometry(rectLight.width, rectLight.height)
var rectLightMeshBackMaterial = new THREE.MeshBasicMaterial({ color: colors.black })
var rectLightMeshBack = new THREE.Mesh(rectLightMeshBackGeometry, rectLightMeshBackMaterial)
rectLightMesh.add(rectLightMeshBack)

var floorGeometry = new THREE.BoxGeometry(2000, 0.1, 2000)
var floorMaterial = new THREE.MeshStandardMaterial({ color: colors.gray, roughness: 0, metalness: 0 })
var floorMesh = new THREE.Mesh(floorGeometry, floorMaterial)
scene.add(floorMesh)

var boxGeometry = new THREE.BoxGeometry(5, 5, 5)
var boxMaterial = new THREE.MeshStandardMaterial({ color: colors.red, roughness: 0, metalness: 0 })
var boxMesh = new THREE.Mesh(boxGeometry, boxMaterial)
boxMesh.position.set(0, 5, 0);
boxMesh.rotation.set(0, Math.PI / 2.0, 0);
boxMesh.castShadow = true
boxMesh.receiveShadow = true
scene.add(boxMesh)

/* Stats */
var stats = new Stats()
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px'
stats.domElement.style.top = '0px'
$('#stats-output').append(stats.domElement);

var controls = {
    motion: true
}

/* GUI */
var gui = new GUI()
gui.add(controls, 'motion').name('Motion')

/* Orbits */
var orbitControls = new OrbitControls(camera, renderer.domElement)
orbitControls.target.copy(boxMesh.position);
orbitControls.update()

/* Animate */
const origin = new THREE.Vector3()
var animate = () => {
    if (controls.motion) {
        var time = Date.now() / 2000
        var radius = 15.0;
        var lx = radius * Math.cos(time);
        var ly = 5.0 + 5.0 * Math.sin(time / 3.0);
        var lz = radius * Math.sin(time);

        rectLight.position.x = lx
        rectLight.position.y = ly
        rectLight.position.z = lz
        rectLight.lookAt(origin)
    }

    stats.update();
    orbitControls.update();
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}

const onWindowResize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix();
}

window.addEventListener('resize', onWindowResize)

requestAnimationFrame(animate)

/* Append */
$('#webgl-output').append(renderer.domElement)