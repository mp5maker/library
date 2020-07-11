import * as THREE from '../node_modules/three/build/three.module.js'
import Stats from '../node_modules/three/examples/jsm/libs/stats.module.js'
import { GUI, color } from '../node_modules/three/examples/jsm/libs/dat.gui.module.js'
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js'
import { SceneUtils } from '../node_modules/three/examples/jsm/utils/SceneUtils.js'

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
renderer.setClearColor(colors.black)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
renderer.setPixelRatio(window.devicePixelRatio || 1)

/* Scene */
var scene = new THREE.Scene()
scene.fog = new THREE.Fog(scene.background, 3500, 15000)


/* Camera */
var camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    15000
)
camera.position.set(50, 0, 50)

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
var ambient = new THREE.AmbientLight(colors.white, 0.1);
scene.add(ambient)


/* Plane */
var planeGeometry = new THREE.PlaneGeometry(500, 500, 500)
var planeMaterial = new THREE.MeshBasicMaterial({ color: colors.black })
var planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
planeMesh.rotation.set(-Math.PI / 2, 0, 0)
scene.add(planeMesh)

/* Combine */
var cubeGeometry = new THREE.BoxGeometry(10, 10, 10)
var cubeMaterial = new THREE.MeshDepthMaterial()
var colorMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    transparent: true,
    blending: THREE.MultiplyBlending
})
var cube = new SceneUtils.createMultiMaterialObject(cubeGeometry, [cubeMaterial, colorMaterial])
cube.position.set(5, 5, 5)
scene.add(cube)


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
    add: function() {
        let mat = cubeGeometry.clone()
        let mesh = new SceneUtils.createMultiMaterialObject(mat, [cubeMaterial, colorMaterial])
        mesh.position.set(randomRange(-100, 100), randomRange(-100, 100), randomRange(-100, 100))
        mesh.name = "clone"
        scene.add(mesh)
    },
    remove: function() {
        const total = scene.children.length
        const lastChild = scene.children[total - 1]
        if (lastChild.name == 'clone') scene.remove(lastChild)
    },
    near: 1,
    far: 15000
}

/* GUI */
var gui = new GUI()
var materialGUI = gui.addFolder('Material GUI')
materialGUI.add(controls, 'add').name('Add')
materialGUI.add(controls, 'remove').name('Remove')
var cameraGUI = gui.addFolder('Camera GUI')
cameraGUI.add(controls, 'near').name('Near').step(1).min(1).max(1000).onChange((value) => {
    camera.near = value
    camera.updateProjectionMatrix();
    orbitControls.update();
})
cameraGUI.add(controls, 'far').name('Far').step(10).min(100).max(20000).onChange((value) => {
    camera.far = value
    camera.updateProjectionMatrix();
    orbitControls.update();
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