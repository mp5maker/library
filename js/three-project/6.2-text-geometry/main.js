import * as THREE from '../node_modules/three/build/three.module.js'
import Stats from '../node_modules/three/examples/jsm/libs/stats.module.js'
import { GUI, color } from '../node_modules/three/examples/jsm/libs/dat.gui.module.js'
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js'
import { ConvexGeometry } from '../node_modules/three/examples/jsm/geometries/ConvexGeometry.js'
import { SVGLoader } from '../node_modules/three/examples/jsm/loaders/SVGLoader.js'

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
renderer.setClearColor(colors.white)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
renderer.setPixelRatio(window.devicePixelRatio || 1)

/* Scene */
var scene = new THREE.Scene()


/* Camera */
var camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    15000
)
camera.position.set(-75, 100, -75)

/* Spot Light */
// var spotLight = new THREE.SpotLight(colors.white, 50)
// spotLight.castShadow = true;
// spotLight.shadow.mapSize.width = 1024;
// spotLight.shadow.mapSize.height = 1024;
// spotLight.shadow.camera.near = 500;
// spotLight.shadow.camera.far = 4000;
// spotLight.shadow.camera.fov = 30;
// scene.add(spotLight)

/* Ambient Light */
var ambient = new THREE.AmbientLight(colors.white, 1);
ambient.position.set(10, 10, 10)
scene.add(ambient)

// /* Spot Light */
var spot = new THREE.SpotLight(colors.white, 1, 100, Math.PI / 2);
spot.position.set(10, 10, 10)
scene.add(spot)

var light = new THREE.DirectionalLight(0xffffff, 1.3);
light.position.set(15, 15, 15)
scene.add(light);


var loader = new THREE.FontLoader();
const onSuccess = (font) => {
    var textGeometry = new THREE.TextGeometry('Hello three.js!', {
        font: font,
        size: 80,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 8,
        bevelOffset: 0,
        bevelSegments: 5
    } )
    var textMaterial = new THREE.MeshBasicMaterial({ color: colors.red })
    const mesh = new THREE.Mesh(textGeometry, textMaterial)
    scene.add(mesh)
}
loader.load('./helvetiker_regular.typeface.json', onSuccess)

/* Axes Helper */
var axesHelper = new THREE.AxesHelper(15)
scene.add(axesHelper)

/* Stats */
var stats = new Stats()
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px'
stats.domElement.style.top = '0px'
$('#stats-output').append(stats.domElement);

/* Random Range */
const randomRange = (min, max) => {
    return  (Math.random() * (max - min) + 1) + min
}

var controls = {
    ambient: colors.white,
    specular: colors.white,
    emissive: colors.black,
    shininess: 100,
    material: 'phong'
}

/* GUI */
var gui = new GUI()
var materialGUI = gui.addFolder('Material')

/* Orbits */
var orbitControls = new OrbitControls(camera, renderer.domElement)
orbitControls.update()

/* Animate */
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