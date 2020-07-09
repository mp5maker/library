import * as THREE from '../node_modules/three/build/three.module.js'
import Stats from '../node_modules/three/examples/jsm/libs/stats.module.js'
import { GUI } from '../node_modules/three/examples/jsm/libs/dat.gui.module.js'
import { SceneUtils } from '../node_modules/three/examples/jsm/utils/SceneUtils.js'

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
camera.position.set(-30, 40, 30)
camera.lookAt(scene.position)

/* Ambient Light */
var ambientLight = new THREE.AmbientLight(colors.ambientLight)
scene.add(ambientLight)

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

/* Materials */
var materials = [
    new THREE.MeshLambertMaterial({
        opacity: 0.6,
        color: colors.random,
        transparent: true
    }),
    new THREE.MeshBasicMaterial({
        color: colors.anotherRandom,
        wireframe: true
    })
]
var mesh = SceneUtils.createMultiMaterialObject(geometry, materials)
mesh.children.forEach((obj) => obj.castShadow = true)
scene.add(mesh)


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
    rotationX: 0.01,
    rotationY: 0.01,
    rotationZ: 0.01,
    scaleX: 2,
    scaleY: 2,
    scaleZ: 2,
    positionX: 1,
    positionY: 1,
    positionZ: 1,
    translateX: 1,
    translateY: 1,
    translateZ: 1,
    clone: function() {
        let cloned = mesh.children[0].geometry.clone()
        let materials = [
            new THREE.MeshLambertMaterial({
                opacity: 0.6,
                color: 0xff44ff,
                transparent: true
            }),
            new THREE.MeshBasicMaterial({
                color: colors.anotherRandom,
                wireframe: true
            })
        ]
        let clonedMesh = SceneUtils.createMultiMaterialObject(cloned, materials)
        clonedMesh.translateX(5)
        clonedMesh.translateZ(5)
        clonedMesh.name="clone"
        scene.remove(scene.getObjectByName('clone'))
        scene.add(clonedMesh)
    }
}
var gui = new GUI()
const rotationGUI = gui.addFolder('Rotation')
rotationGUI.add(controls, 'rotationX').min(0).max(0.5).step(0.01).name('Rotation X')
rotationGUI.add(controls, 'rotationY').min(0).max(0.5).step(0.01).name('Rotation Y')
rotationGUI.add(controls, 'rotationZ').min(0).max(0.5).step(0.01).name('Rotation Z')

const scaleGUI = gui.addFolder('Scale')
scaleGUI.add(controls, 'scaleX').min(0).max(100).step(1).name('Scale X')
scaleGUI.add(controls, 'scaleY').min(0).max(100).step(1).name('Scale Y')
scaleGUI.add(controls, 'scaleZ').min(0).max(100).step(1).name('Scale Z')

const positionGUI = gui.addFolder('Position')
positionGUI.add(controls, 'positionX').min(0).max(100).step(1).name('Postion X')
positionGUI.add(controls, 'positionY').min(0).max(100).step(1).name('Postion Y')
positionGUI.add(controls, 'positionZ').min(0).max(100).step(1).name('Postion Z')

const translateGUI = gui.addFolder('Translate')
translateGUI.add(controls, 'translateX').min(0).max(100).step(1).name('Translate X')
translateGUI.add(controls, 'translateY').min(0).max(100).step(1).name('Translate Y')
translateGUI.add(controls, 'translateZ').min(0).max(100).step(1).name('Translate Z')

gui.add(controls, 'clone').name('Clone')
gui.domElement.style.position = 'absolute';
gui.domElement.style.right = '0px'
gui.domElement.style.top = '0px'


/* Render/Animate */
const animate = () => {
    stats.update()

    mesh.rotation.x += controls.rotationX
    mesh.rotation.y = controls.rotationY
    mesh.rotation.z = controls.rotationZ

    mesh.position.x = controls.positionX
    mesh.position.y = controls.positionY
    mesh.position.z = controls.positionZ

    mesh.scale.x = controls.scaleX
    mesh.scale.y = controls.scaleY
    mesh.scale.z = controls.scaleZ

    mesh.translateX = controls.translateX
    mesh.translateY = controls.translateY
    mesh.translateZ = controls.translateZ

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