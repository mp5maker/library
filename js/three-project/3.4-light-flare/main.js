import * as THREE from '../node_modules/three/build/three.module.js'
import Stats from '../node_modules/three/examples/jsm/libs/stats.module.js'
import { GUI } from '../node_modules/three/examples/jsm/libs/dat.gui.module.js'
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js'
import { Lensflare, LensflareElement } from '../node_modules/three/examples/jsm/objects/Lensflare.js'
// import LensflareImage from '../node_modules/three/examples/textures/lensflare/lensflare0.png'
// import LensflareImage from '../node_modules/three/examples/textures/lensflare/lensflare2.png'
// import LensflareImage from '../node_modules/three/examples/textures/lensflare/lensflare3.png'

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
scene.background = colors.black
scene.fog = new THREE.Fog(scene.background, 3500, 15000)

/* Lensflare */
var textureLoader = new THREE.TextureLoader()
var textureFlare0 = textureLoader.load('lensflare0.png')
var textureFlare3 = textureLoader.load('lensflare3.png')

/* Light */
var pointLight = new THREE.PointLight(colors.white, 1.5, 2000)
pointLight.position.set(0, 0, -1000)
scene.add(pointLight)

var lensflare = new Lensflare()
lensflare.addElement(new LensflareElement(textureFlare0, 700, 0, pointLight.color));
lensflare.addElement(new LensflareElement(textureFlare3, 60, 0.6));
lensflare.addElement(new LensflareElement(textureFlare3, 70, 0.7));
lensflare.addElement(new LensflareElement(textureFlare3, 120, 0.9));
lensflare.addElement(new LensflareElement(textureFlare3, 70, 1));
pointLight.add(lensflare)

/* Camera */
var camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    15000
)
camera.position.z = 250;


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
orbitControls.update()

/* Animate */
const origin = new THREE.Vector3()
var animate = () => {

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