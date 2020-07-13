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

/* Common Material */
var meshBasicMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color(colors.red),
    side: THREE.DoubleSide,
})

function generatePoints() {
    var points = []
    for (var i = 0; i < 20; i++) {
        var randomX = -15 + Math.round(Math.random() * 30)
        var randomY = -15 + Math.round(Math.random() * 30)
        var randomZ = -15 + Math.round(Math.random() * 30)
        points.push(new THREE.Vector3(randomX, randomY, randomZ))
    }
    var group = new THREE.Object3D()
    points.forEach((item) => {
        var geo = new THREE.SphereGeometry(1, 20, 20)
        var sphereMesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
            color: new THREE.Color(colors.black),
            side: THREE.DoubleSide,
        }))
        sphereMesh.position.set(item.x, item.y, item.z)
        group.add(sphereMesh)
    })
    scene.add(group)
    return points
}
var geometry = new ConvexGeometry(generatePoints());
var mesh = new THREE.Mesh(geometry, meshBasicMaterial)
scene.add(mesh)

var points2 = []
for (var i = 0; i < 10; i++) {
    points2.push(new THREE.Vector2(Math.sin(i * 0.2) * 10 + 5, (i - 5) * 2))
}
var geometry = new THREE.LatheGeometry(points2)
var material =new THREE.MeshBasicMaterial({ color: colors.red, side: THREE.DoubleSide })
var lathe = new THREE.Mesh(geometry, material)
lathe.position.set(25, 25, 25)
scene.add(lathe)

var points = []
for (let i = 0;  i < 20; i++) {
    var randomX = -20 + Math.round(Math.random() * 50)
    var randomY = -15 + Math.round(Math.random() * 40)
    var randomZ = -20 + Math.round(Math.random() * 40)
    points.push(new THREE.Vector3(randomX, randomY, randomZ))
}
var tubeGeometry = new THREE.TubeGeometry(
    new THREE.CatmullRomCurve3(points),
    5,
    20,
    20,
    true
)
var mesh = new THREE.Mesh(tubeGeometry, meshBasicMaterial)
mesh.position.set(-50, 50, 50)
scene.add(mesh)

var loader = new SVGLoader()
const onSuccessLoad = (data) => {
    var paths = data.paths;
    var group = new THREE.Group();

    for (var i = 0; i < paths.length; i++) {
        var path = paths[i];
        var material = new THREE.MeshBasicMaterial({
            color: path.color,
            side: THREE.DoubleSide,
            depthWrite: false
        });

        var shapes = path.toShapes(true);
        for (var j = 0; j < shapes.length; j++) {
            var shape = shapes[j];
            var geometry = new THREE.ExtrudeGeometry(shape, {
                steps: 2,
                depth: 16,
                bevelEnabled: true,
                bevelThickness: 1,
                bevelSize: 1,
                bevelOffset: 0,
                bevelSegments: 1
            });
            var mesh = new THREE.Mesh(geometry, material);
            group.add(mesh);
        }
    }
    scene.add(group);
}
loader.load('./batman.svg', onSuccessLoad)

var paraFunction = function (a, b, target) {
    var x = -5 + 5 * a;
    var y = -5 + 5 * b;
    var z = (Math.sin(a * Math.PI) + Math.sin(b * Math.PI)) * -7;
    target.set(x, y, z);
}
var geometry = new THREE.ParametricGeometry(paraFunction, 25, 25);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var klein = new THREE.Mesh(geometry, material);
klein.position.set(-100, 100, 100)
scene.add(klein);

var options = {
    steps: 2,
    depth: 16,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 1,
    bevelOffset: 0,
    bevelSegments: 1
}
/* Shape Geometry */
var shape = new THREE.Shape();
shape.moveTo(0, 0);
shape.lineTo(0, 7);
shape.lineTo(5, 10);
shape.lineTo(5, 0);
shape.lineTo(0, 0);

var extrudeSettings = {
    steps: 2,
    depth: 16,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 1,
    bevelOffset: 0,
    bevelSegments: 1
};

var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var mesh = new THREE.Mesh(geometry, material);
mesh.position.set(100, 25, 25)
scene.add(mesh);

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