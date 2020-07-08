(function() {
    "use strict";

    /* Colors */
    const colors = {
        white: 0xEEEEEE,
        gray: 0xcccccc,
        red: 0xff0000,
        blue: 0x7777ff,
    }

    /* Renderer */
    var renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setClearColor(colors.white)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio || 1)

    /* Scene */
    var scene = new THREE.Scene()

    /* Camera */
    var camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )

    /* Axes */
    var axes = new THREE.AxesHelper(20)
    scene.add(axes)

    /* Plane */
    var planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1)
    var planeMaterial = new THREE.MeshBasicMaterial({ color: colors.gray })
    var plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.rotation.x = -0.5 * Math.PI
    plane.position.set(15, 0, 0)
    scene.add(plane)

    /* Cube */
    var cubeGeometry = new THREE.CubeGeometry(4, 4, 4)
    var cubeMaterial = new THREE.MeshBasicMaterial({
        color: colors.red,
        wireframe: true
    })
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    cube.position.set(-4, 3, 0)
    scene.add(cube)

    /* Sphere */
    var sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
    var sphereMaterial = new THREE.MeshBasicMaterial({
        color: colors.blue,
        wireframe: true
    })
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere.position.set(20, 4, 2)
    scene.add(sphere)

    /* Cameara */
    camera.position.set(-30, 40, 30)
    camera.lookAt(scene.position)

    /* Renderer */
    renderer.render(scene, camera)

    /* Resize */
    const onWindowResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight)
        camera.aspect = window.innnerWidth / window.innerHeight
        camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', onWindowResize)

    $('#webgl-output').append(renderer.domElement)

})();