import * as THREE from '../node_modules/three/build/three.module.js'
import Stats from '../node_modules/three/examples/jsm/libs/stats.module.js'
import { GUI, color } from '../node_modules/three/examples/jsm/libs/dat.gui.module.js'
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js'
import { Lensflare, LensflareElement } from '../node_modules/three/examples/jsm/objects/Lensflare.js'

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
renderer.setClearColor(colors.white)
renderer.setPixelRatio(window.devicePixelRatio || 1)

/* Scene */
var scene = new THREE.Scene()
scene.background = colors.black
scene.fog = new THREE.Fog(scene.background, 3500, 15000)


/* Camera */
var camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    15000
)
camera.position.set(50, 50, 50)

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
var planeGeometry = new THREE.PlaneGeometry(50, 50, 50)
var planeMaterial = new THREE.MeshBasicMaterial({ color: colors.gray })
var planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
planeMesh.rotation.set(-Math.PI / 2, 0, 0)
scene.add(planeMesh)

/* Basic Material Mesh */
var boxGeometry = new THREE.BoxGeometry(5, 5, 5)
var boxMaterial = new THREE.MeshBasicMaterial({ color: colors.red, side: THREE.DoubleSide })
var basicMesh = new THREE.Mesh(boxGeometry, boxMaterial)
basicMesh.position.set(2.5, 2.5, 2.5)
scene.add(basicMesh)

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

var controls = {
    basic: {
        color: colors.red,
        wireframe: false,
        wireframeLinecap: `round`,
        fog: false,
        visible: true,
        transparent: false,
        opacity: 1,
        side: THREE.DoubleSide,
        add: function() {
            let geo = new THREE.BoxGeometry(5, 5, 5)
            let mat = boxMaterial.clone()
            let mesh = new THREE.Mesh(geo, mat)
            mesh.position.set(10 * Math.random(), 10 * Math.random(), 10 * Math.random())
            mesh.name = "clone"
            scene.add(mesh)
        },
        remove: function() {
            const total = scene.children.length
            const lastChild = scene.children[total - 1]
            if (lastChild instanceof THREE.Mesh && lastChild.name == 'clone') scene.remove(lastChild)
        }
    }
}

/* GUI */
var gui = new GUI()
var basicMaterialGUI = gui.addFolder('Basic Material')
basicMaterialGUI.addColor(controls.basic, 'color').onChange((color) => {
    boxMaterial.color = new THREE.Color(color)
})
basicMaterialGUI.add(controls.basic, 'wireframe').onChange((status) => {
    boxMaterial.wireframe = status
})
basicMaterialGUI.add(controls.basic, 'visible').onChange((status) => {
    boxMaterial.visible = status
})
basicMaterialGUI.add(controls.basic, 'transparent').onChange((status) => {
    boxMaterial.transparent = status
})
basicMaterialGUI.add(controls.basic, 'opacity').step(0.1).min(0).max(1).onChange((value) => {
    boxMaterial.opacity = value
})
basicMaterialGUI.add(controls.basic, 'fog').onChange((status) => {
    if (status) boxMaterial.fog = new THREE.Fog(colors.white, 1, 1000)
    if (!status) boxMaterial.fog = null
})
basicMaterialGUI.add(controls.basic, 'wireframeLinecap', { round: 'round', bevel: 'bevel', miter: 'miter '}).onChange((value) => {
    boxMaterial.wireframeLinecap = value
})
basicMaterialGUI.add(controls.basic, 'side', { front: THREE.FrontSide, back: THREE.BackSide, double: THREE.DoubleSide }).onChange((value) => {
    boxMaterial.side = value
})
basicMaterialGUI.add(controls.basic, 'add')
basicMaterialGUI.add(controls.basic, 'remove')


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