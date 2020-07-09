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

/* Ambient Light */
var ambientLight = new THREE.AmbientLight(0xedebeb)
scene.add(ambientLight)

/* Point Light */
var pointLight = new THREE.PointLight(0xedebeb, 1, 100)
scene.add(pointLight)

/* Spot Light */
var spotLight = new THREE.SpotLight(0xedebeb, 1, 100)
spotLight.position.set(-20, 50, -5)
spotLight.castShadow = true
spotLight.shadow.mapSize.width = 1024 * 5;
spotLight.shadow.mapSize.height = 1024 * 5;
scene.add(spotLight)

/* Directional Light */
var directionalLight = new THREE.DirectionalLight(0xedebeb, 1, 100)
directionalLight.position.set(-20, 50, -5)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.width = 1024 * 5;
directionalLight.shadow.mapSize.height = 1024 * 5;
scene.add(directionalLight)


/* Dat GUI */
var controls = {
    /* Ambient */
    ambientColor: 0xedebeb,
    /* Point */
    pointColor: 0xedebeb,
    pointIntensity: 1,
    pointDistance: 100,
    pointVisible: true,
    pointPositionX: 0,
    pointPositionY: 0,
    pointPositionZ: 0,
    /* Spot */
    spotColor: 0xedebeb,
    spotIntensity: 1,
    spotDistance: 100,
    spotVisible: true,
    spotPositionX: -20,
    spotPositionY: 50,
    spotPositionZ: -5,
    spotCastShadow: true,
    spotShadowCameraNear: 0,
    spotShadowCameraFar: 0,
    spotShadowCameraFov: 0,
    spotShadowBias: 0,
    spotAngle: 0,
    spotExponent: 0,
    spotShadowDarkness: 0,
    spotShadowMapWidth: 1024 * 5,
    spotShadowMapHeight: 1024 * 5,
    /* Spot */
    directionalColor: 0xedebeb,
    directionalIntensity: 1,
    directionalDistance: 100,
    directionalVisible: true,
    directionalPositionX: -20,
    directionalPositionY: 50,
    directionalPositionZ: -5,
    directionalCastShadow: true,
    directionalShadowCameraNear: 0,
    directionalShadowCameraFar: 0,
    directionalShadowCameraFov: 0,
    directionalShadowBias: 0,
    directionalAngle: 0,
    directionalExponent: 0,
    directionalShadowDarkness: 0,
    directionalShadowMapWidth: 1024 * 5,
    directionalShadowMapHeight: 1024 * 5,
}
var gui = new GUI()
var ambientGUI = gui.addFolder('Ambient')

/* Ambient Light */
ambientGUI.addColor(controls, 'ambientColor').name('Color').onChange((color) => {
    ambientLight.color = new THREE.Color(color)
})

/* Point Light */
var pointGUI = gui.addFolder('Point')
pointGUI.add(controls, 'pointIntensity').min(1).max(100).name('Intensity').onChange((value) => {
    pointLight.intensity = value
})
pointGUI.add(controls, 'pointDistance').min(1).max(1000).name('Distance').onChange((value) => {
    pointLight.distance = value
})
pointGUI.addColor(controls, 'pointColor').name('Color').onChange((color) => {
    pointLight.color = new THREE.Color(color)
})
pointGUI.add(controls, 'pointVisible').name('Visible').onChange((status) => {
    pointLight.visible = status
})
pointGUI.add(controls, 'pointPositionX').name('Position X').min(-1000).max(1000).onChange((value) => {
    pointLight.position.x = value
})
pointGUI.add(controls, 'pointPositionY').name('Position Y').min(-1000).max(1000).onChange((value) => {
    pointLight.position.y = value
})
pointGUI.add(controls, 'pointPositionZ').name('Position Z').min(-1000).max(1000).onChange((value) => {
    pointLight.position.z = value
})

/* Spot Light */
var spotGUI = gui.addFolder('Spot')
spotGUI.add(controls, 'spotIntensity').min(1).max(100).name('Intensity').onChange((value) => {
    spotLight.intensity = value
})
spotGUI.add(controls, 'spotDistance').min(1).max(1000).name('Distance').onChange((value) => {
    spotLight.distance = value
})
spotGUI.addColor(controls, 'spotColor').name('Color').onChange((color) => {
    spotLight.color = new THREE.Color(color)
})
spotGUI.add(controls, 'spotVisible').name('Visible').onChange((status) => {
    spotLight.visible = status
})
spotGUI.add(controls, 'spotPositionX').name('Position X').min(-1000).max(1000).onChange((value) => {
    spotLight.position.x = value
})
spotGUI.add(controls, 'spotPositionY').name('Position Y').min(-1000).max(1000).onChange((value) => {
    spotLight.position.y = value
})
spotGUI.add(controls, 'spotPositionZ').name('Position Z').min(-1000).max(1000).onChange((value) => {
    spotLight.position.z = value
})
spotGUI.add(controls, 'spotCastShadow').name('Cast Shadow').onChange((status) => {
    spotLight.castShadow = status
})
spotGUI.add(controls, 'spotShadowCameraNear').name('S.C. Near').min(0).max(1000).onChange((value) => {
    spotLight.shadow.camera.near = value
})
spotGUI.add(controls, 'spotShadowCameraFar').name('S.C. Far').min(0).max(1000).onChange((value) => {
    spotLight.shadow.camera.far = value
})
spotGUI.add(controls, 'spotShadowCameraFov').name('S.C. Fov').min(-1000).max(1000).onChange((value) => {
    spotLight.shadow.camera.fov = value
})
spotGUI.add(controls, 'spotShadowBias').name('Shadow Bias').min(0).max(1).step(0.1).onChange((value) => {
    spotLight.shadow.bias = value
})
spotGUI.add(controls, 'spotAngle').name('Angle').min(0).max(2 * Math.PI).step(0.1).onChange((value) => {
    spotLight.angle = value
})
spotGUI.add(controls, 'spotShadowMapWidth').name('S. Map Width').min(0).max(5000).onChange((value) => {
    spotLight.shadow.mapSize.width = value
})
spotGUI.add(controls, 'spotShadowMapHeight').name('S. Map Height').min(0).max(5000).onChange((value) => {
    spotLight.shadow.mapSize.height = value
})
spotGUI.add(controls, 'spotShadowDarkness').name('Shadow Darkness').min(0.5).step(0.1).max(1000).onChange((value) => {
    spotLight.shadow.darkness = value
})

/* Directional Light */
var directionGUI = gui.addFolder('Directional')
directionGUI.add(controls, 'directionalIntensity').min(1).max(100).name('Intensity').onChange((value) => {
    directionalLight.intensity = value
})
directionGUI.add(controls, 'directionalDistance').min(1).max(1000).name('Distance').onChange((value) => {
    directionalLight.distance = value
})
directionGUI.addColor(controls, 'directionalColor').name('Color').onChange((color) => {
    directionalLight.color = new THREE.Color(color)
})
directionGUI.add(controls, 'directionalVisible').name('Visible').onChange((status) => {
    directionalLight.visible = status
})
directionGUI.add(controls, 'directionalPositionX').name('Position X').min(-1000).max(1000).onChange((value) => {
    directionalLight.position.x = value
})
directionGUI.add(controls, 'directionalPositionY').name('Position Y').min(-1000).max(1000).onChange((value) => {
    directionalLight.position.y = value
})
directionGUI.add(controls, 'directionalPositionZ').name('Position Z').min(-1000).max(1000).onChange((value) => {
    directionalLight.position.z = value
})
directionGUI.add(controls, 'directionalCastShadow').name('Cast Shadow').onChange((status) => {
    directionalLight.castShadow = status
})
directionGUI.add(controls, 'directionalShadowCameraNear').name('S.C. Near').min(0).max(1000).onChange((value) => {
    directionalLight.shadow.camera.near = value
})
directionGUI.add(controls, 'directionalShadowCameraFar').name('S.C. Far').min(0).max(1000).onChange((value) => {
    directionalLight.shadow.camera.far = value
})
directionGUI.add(controls, 'directionalShadowCameraFov').name('S.C. Fov').min(-1000).max(1000).onChange((value) => {
    directionalLight.shadow.camera.fov = value
})
directionGUI.add(controls, 'directionalShadowBias').name('Shadow Bias').min(0).max(1).step(0.1).onChange((value) => {
    directionalLight.shadow.bias = value
})
directionGUI.add(controls, 'directionalAngle').name('Angle').min(0).max(2 * Math.PI).step(0.1).onChange((value) => {
    directionalLight.angle = value
})
directionGUI.add(controls, 'directionalShadowMapWidth').name('S. Map Width').min(0).max(5000).onChange((value) => {
    directionalLight.shadow.mapSize.width = value
})
directionGUI.add(controls, 'directionalShadowMapHeight').name('S. Map Height').min(0).max(5000).onChange((value) => {
    directionalLight.shadow.mapSize.height = value
})
directionGUI.add(controls, 'directionalShadowDarkness').name('Shadow Darkness').min(0.5).step(0.1).max(1000).onChange((value) => {
    directionalLight.shadow.darkness = value
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