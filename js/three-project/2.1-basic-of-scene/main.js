import * as THREE from '../node_modules/three/build/three.module.js'
import Stats from '../node_modules/three/examples/jsm/libs/stats.module.js'
import { GUI } from '../node_modules/three/examples/jsm/libs/dat.gui.module.js'

/**
 * SCENE PROPERTIES
 * add
 * children
 * fog
 * overrideMaterial
 *
 * SCENE METHODS
 * getChildByName(string)
 * remove(object)
 * tranverse(function)
 */

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

/* Plane */
var planeGeometryWidth = 60
var planeGeometryHeight = 20
var planeGeometry = new THREE.PlaneGeometry(planeGeometryWidth, planeGeometryHeight, 1, 1)
var planeMaterial = new THREE.MeshLambertMaterial({ color: colors.whiteShade })
var plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.rotation.x = -0.5 * Math.PI
plane.position.set(15, 0, 0)
plane.receiveShadow = true
scene.add(plane)

var ambientLight = new THREE.AmbientLight(colors.ambientLight)
scene.add(ambientLight)

/* SpotLight */
var spotLight = new THREE.SpotLight(colors.whiteShade, 0.5)
spotLight.position.set(-40, 60, -10)
spotLight.castShadow = true
spotLight.shadow.mapSize.width = 1024 * 5;
spotLight.shadow.mapSize.height = 1024 * 5;
scene.add(spotLight)

/* Shade */
// scene.fog = new THREE.Fog(colors.whiteShade, 0.015, 100)
scene.fog = new THREE.FogExp2(colors.whiteShade, 0.015)
// var shade = new THREE.FogExp2()

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
    addCube: function () {
        let cubeSize = Math.ceil(Math.random() * 3)
        let cubeGeometry = new THREE.CubeGeometry(cubeSize, cubeSize, cubeSize)
        let cubeMaterial = new THREE.MeshLambertMaterial({
            color: Math.random() * 0xffffff
        })
        let cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
        cube.castShadow = true
        cube.name = 'cube-' + scene.children.length
        cube.position.x = Math.round(Math.random() * planeGeometryWidth)
        cube.position.y = Math.round(Math.random() * 5)
        cube.position.z = -20 + Math.round(Math.random() * planeGeometryHeight)
        this.numberOfObjects = scene.children.length
        scene.add(cube)
    },
    removeCube: function() {
        let allChildren = scene.children
        let lastObject = allChildren[allChildren.length - 1]
        if (lastObject instanceof THREE.Mesh) {
            scene.remove(lastObject)
            this.numberOfObjects = scene.children.length
        }
    },
    outputObjects: function() {
        console.log(scene.children)
    },
    overrideMaterial: false
}
var gui = new GUI()
gui.add(controls, 'rotationSpeed').min(0).max(0.5).step(0.01).name('Rotation Speed')
gui.add(controls, 'addCube').name('Add Cube')
gui.add(controls, 'removeCube').name('Remove Cube')
gui.add(controls, 'outputObjects').name('Output Scene')
gui.add(controls, 'overrideMaterial').name('Override Material')
gui.domElement.style.position = 'absolute';
gui.domElement.style.right = '0px'
gui.domElement.style.top = '0px'


/* Render/Animate */
const animate = () => {
    stats.update()

    if (controls.overrideMaterial) {
        scene.overrideMaterial = new THREE.MeshLambertMaterial({ color: colors.whiteShade })
    } else scene.overrideMaterial = null

    scene.traverse(function(obj) {
        if (obj instanceof THREE.Mesh && obj != plane) {
            obj.rotation.x += controls.rotationSpeed
            obj.rotation.y += controls.rotationSpeed
            obj.rotation.z += controls.rotationSpeed
        }
    })

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