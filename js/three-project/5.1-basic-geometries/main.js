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

/* Shape Geometry */
var createShape = () => {
    var shape = new THREE.Shape()
    shape.moveTo(10, 10)
    shape.lineTo(10, 40)
    shape.bezierCurveTo(15, 25, 25, 30, 40)
    shape.splineThru([
        new THREE.Vector2(32, 30),
        new THREE.Vector2(28, 20),
        new THREE.Vector2(30, 10),
    ])
    shape.quadraticCurveTo(20, 15, 10, 10)

    var hole1 = new THREE.Path()
    hole1.absellipse(16, 24, 2, 3, 0, Math.PI * 2, true)
    shape.holes.push(hole1)

    var hole2 = new THREE.Path()
    hole2.absellipse(23, 24, 2, 3, 0, Math.PI * 2, true)
    shape.holes.push(hole2)

    var hole3 = new THREE.Path()
    hole3.absellipse(20, 16, 2, 0, Math.PI, true)
    shape.holes.push(hole3)

    return shape
}
var shapeGeometry = new THREE.ShapeGeometry(createShape())
var shapeMesh = new THREE.Mesh(shapeGeometry, meshBasicMaterial)
shapeMesh.position.set(25, 25, 25)
scene.add(shapeMesh)

var shapeLineGeometry = new THREE.Line(
    createShape().createPointsGeometry(10),
    new THREE.LineBasicMaterial({ color: colors.red, linewidth: 2 })
)
shapeLineGeometry.position.set(50, 50, 50)
scene.add(shapeLineGeometry)

var boxGeometry = new THREE.BoxGeometry(10, 10, 10)
var boxMesh = new THREE.Mesh(boxGeometry, meshBasicMaterial)
boxMesh.position.set(-15, 15, -15)
scene.add(boxMesh)

var sphereGeometry = new THREE.SphereGeometry(5, 20, 20)
var sphereMesh = new THREE.Mesh(sphereGeometry, meshBasicMaterial)
sphereMesh.position.set(-30, 15, -15)
scene.add(sphereMesh)

var cylinderGeometry = new THREE.CylinderGeometry(5, 5, 10, 5)
var cylinderMesh = new THREE.Mesh(cylinderGeometry, meshBasicMaterial)
cylinderMesh.position.set(-50, 50, -50)
scene.add(cylinderMesh)

var torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
var torusMesh = new THREE.Mesh(torusGeometry, meshBasicMaterial)
torusMesh.position.set(-80, 80, -80)
scene.add(torusMesh)

var torusKnotGeometry = new THREE.TorusKnotGeometry(10, 8, 100, 16)
var torusKnotMesh = new THREE.Mesh(torusKnotGeometry, meshBasicMaterial)
torusKnotMesh.position.set(-100, 100, -100)
scene.add(torusKnotMesh)

var vertices = [
    -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1,
    -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1,
];

var faces = [
    2, 1, 0, 0, 3, 2,
    0, 4, 7, 7, 3, 0,
    0, 1, 5, 5, 4, 0,
    1, 2, 6, 6, 5, 1,
    2, 3, 7, 7, 6, 2,
    4, 5, 6, 6, 7, 4
];
var polyhedronGeometry = new THREE.PolyhedronGeometry(vertices, faces, 6, 2);
var polyhedronMesh = new THREE.Mesh(polyhedronGeometry, meshBasicMaterial)
polyhedronMesh.position.set(-150, 50, -150)
scene.add(polyhedronMesh)

var icosahedronGeometry = new THREE.IcosahedronGeometry(6, 2);
var IcosahedronMesh = new THREE.Mesh(icosahedronGeometry, meshBasicMaterial)
IcosahedronMesh.position.set(-175, 100, -175)
scene.add(IcosahedronMesh)

var tetrahedronGeometry = new THREE.TetrahedronGeometry(6, 2);
var tetrahedronMesh = new THREE.Mesh(tetrahedronGeometry, meshBasicMaterial)
tetrahedronMesh.position.set(-300, 125, -300)
scene.add(tetrahedronMesh)

var OctahedronGeometry = new THREE.OctahedronGeometry(6, 2);
var octahedronMesh = new THREE.Mesh(OctahedronGeometry, meshBasicMaterial)
octahedronMesh.position.set(-300, 150, -300)
scene.add(octahedronMesh)

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