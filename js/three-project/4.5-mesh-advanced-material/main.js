import * as THREE from '../node_modules/three/build/three.module.js'
import Stats from '../node_modules/three/examples/jsm/libs/stats.module.js'
import { GUI, color } from '../node_modules/three/examples/jsm/libs/dat.gui.module.js'
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js'

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
var spotLight = new THREE.SpotLight(colors.white, 50)
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;
spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;
scene.add(spotLight)

/* Ambient Light */
// var ambient = new THREE.AmbientLight(colors.white, 1);
// ambient.position.set(10, 10, 10)
// scene.add(ambient)

// /* Spot Light */
// var spot = new THREE.SpotLight(colors.white, 1, 100, Math.PI / 2);
// spot.position.set(10, 10, 10)
// scene.add(spot)

var light = new THREE.DirectionalLight(0xffffff, 1.3);
light.position.set(15, 15, 15)
scene.add(light);


/* Plane */
var planeGeometry = new THREE.PlaneGeometry(500, 500, 500)
var planeMaterial = new THREE.MeshBasicMaterial({ color: colors.gray })
var planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
planeMesh.rotation.set(-Math.PI / 2, 0, 0)
scene.add(planeMesh)

/* Box */
var boxGeometry = new THREE.BoxGeometry(10, 10, 10)
var meshLambertMaterial = new THREE.MeshLambertMaterial({ color: colors.red })
var meshPhongMaterial = new THREE.MeshPhongMaterial({
    color: colors.red,
    shininess: 100,
    ambient: new THREE.Color(colors.white),
    specular: 0x111111,
    emissive: new THREE.Color(colors.black),
    opacity: 1
})
var box = new THREE.Mesh(boxGeometry, meshPhongMaterial)
box.position.set(5, 5, 5)
scene.add(box)

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
    material: 'lambert'
}

/* GUI */
var gui = new GUI()
var materialGUI = gui.addFolder('Material')
materialGUI.addColor(controls, 'ambient').name('Ambient').onChange((color) => {
    box.material.ambient = new THREE.Color(color)
})
materialGUI.addColor(controls, 'emissive').name('Emissive').onChange((color) => {
    box.material.emissive = new THREE.Color(color)
})
materialGUI.addColor(controls, 'specular').name('Specular').onChange((color) => {
    if (controls.material == 'phong') box.material.specular = new THREE.Color(color)
})
materialGUI.add(controls, 'shininess').name('Shininess').min(0).max(300).step(1).onChange((value) => {
    if (controls.material == 'phong') box.material.shininess = value
})
materialGUI.add(controls, 'material', { lambert: 'lambert', phong: 'phong'}).onChange((material) => {
    if (material == 'lambert') box.material = meshLambertMaterial
    if (material == 'phong') box.material = meshPhongMaterial
    box.updateMatrix();
})

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