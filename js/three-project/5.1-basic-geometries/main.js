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

/* Common Material */
var meshBasicMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color(colors.red),
    side: THREE.DoubleSide,
})

/* Plane Material */
var planeGeometry = new THREE.PlaneGeometry(50, 50, 5, 5)
var plane = new THREE.Mesh(planeGeometry, meshBasicMaterial)
scene.add(plane)

/* Wireframe Geometry */
var wireframePlaneGeometry = new THREE.WireframeGeometry(planeGeometry)
var wireframeMaterial = new THREE.LineBasicMaterial()
var wireframe = new THREE.Line(wireframePlaneGeometry, wireframeMaterial)
scene.add(wireframe)

/* Circle Geometry */
var circleGeometry = new THREE.CircleGeometry(20, 12, 0, Math.PI)
var circle = new THREE.Mesh(circleGeometry, meshBasicMaterial)
circle.position.set(15, 15, 15)
scene.add(circle)
var wireframeCircleGeometry = new THREE.WireframeGeometry(circleGeometry)
var circleWireframe = new THREE.Line(wireframeCircleGeometry, wireframeMaterial)
scene.add(circleWireframe)
circleWireframe.position.set(15, 15, 15)


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