## 1.1 Create an Skeleton ##
<!-- Renderer -->
> THREE.WebGLRenderer
<!-- Scene -->
> THREE.Scene
<!-- Camera -->
> THREE.PerspectiveCamera
<!-- Helper -->
> THREE.AxesHelper
<!-- Geometry -->
> THREE.PlaneGeometry
> THREE.SphereGeometry
<!-- Material -->
> THREE.MeshBasicMaterial
<!-- Mesh -->
> THREE.Mesh

## 1.2 Material Light Scene ##
<!-- Utilities -->
> Stats
> GUI
<!-- Geometry -->
> THREE.CubeGeometry
> THREE.BoxGeometry
<!-- Material -->
> THREE.MeshLambertMaterial
<!-- Light -->
> THREE.SpotLight
<!-- Mesh/Light -->
> castShadow
> receiveShadow
<!-- Math -->
> Math.cos -> x-axis
> Math.sin -> y-axis

## 1.3 Ascii Effect ##
<!-- Ascii Effect -->
> AsciiEffect

## 2.1 Basic of Scene ##
<!-- Light -->
> THREE.AmbientLight
<!-- Scene -->
> scene.traverse(function)
> scene.add(object)
> scene.remove(object)
> scene.getObjectByName(string)
> scene.children
> scene.overrideMaterial
> scene.fog = THREE.Fog
> scene.for THREE.FogExp2

## 2.2 Vector 3 Face 3 ##
<!-- Geometry -->
> THREE.Geometry
> THREE.Vector3
> THREE.Face3

## 2.3 Custom Geometry ##
<!-- Utilities -->
> SceneUtils
<!-- Mesh -->
> mesh.positionX
> mesh.positionY
> mesh.positionZ
> mesh.position.set
> mesh.rotationX
> mesh.rotationY
> mesh.rotationZ
> mesh.rotation.set
> mesh.scaleX
> mesh.scaleY
> mesh.scaleZ
> mesh.scale.set
> mesh.translateX
> mesh.translateY
> mesh.translateZ
> mesh.translate.set
<!-- GUI -->
> gui.add
> gui.min
> gui.max
> gui.name
> gui.addFolder

## 2.4 Basic Camera Types ##
<!-- Perspective -->
> THREE.PerspectiveCamera
  ==> fov (field of view) Humans (180 degree view) ==> computer screen small (60 to 90 for games) default(45)
  ==> aspect (aspect ration width / height)
  ==> near (default 0.1)
  ==> far (default 1000)
<!-- Orthographic -->
> THREE.Orthographic
  ==> left
  ==> right
  ==> top
  ==> bottom
  ==> near
  ==> far

## 3.1 Explore the lights ###
<!-- GUI -->
> gui.addColor
<!-- Colors -->
> THREE.Colors
> colors.set(value)
> colors.setHex(value)
> setRGB(r, g, b)
> setHSV(h, s, v)
> setStyle(style)
> copy(color)
> copyGammaToLinear(color)
> copyLinearToGamma(color)
> convertGammaToLinear()
> convertLinearToGamma()
> getHex()
> getHexString()
> getStyle()
> getHSV()
> add(color)
> addColors(color1, color2)
> addScalar(s)
> multiply(color)
> multiplyScalar(s)
> lerp(color, alpha)
> clone()
<!-- Ambient Light (Atmosphere)-->
> ambient.color
<!-- Point Light (Light Bulb)-->
> point.color
> point.intensity
> point.distance
> point.position
> point.visible
<!-- Spot Light (Cone) -->
> spot.color
> spot.intensity
> spot.distance
> spot.position
> spot.visible
> spot.castShadow
> spot.shadow.camera.near
> spot.shadow.camera.far
> spot.shadow.camera.fov
> spot.shadow.bias
> spot.angle
> spot.exponent
> spot.shadow.darkness
> spot.shadow.mapSize.width
> spot.shadow.mapSize.height
<!-- Directional Light (Sun)-->
> directional.color
> directional.intensity
> directional.distance
> directional.position
> directional.visible
> directional.castShadow
> directional.shadow.camera.near
> directional.shadow.camera.far
> directional.shadow.camera.fov
> directional.shadow.bias
> directional.angle
> directional.exponent
> directional.shadow.darkness
> directional.shadow.mapSize.width
> directional.shadow.mapSize.height

### 3.2 Hemisphere Lights ###
<!-- Advanced Lights -->
<!-- Hemisphere Light (Natural Light Outdoor Scenes) -->
> hemisphere.color
> hemisphere.groundColor
> hemisphere.intensity

### 3.3 Rect Area Lights ###
> renderer.setSize
> renderer.shadowMap.enabled
> renderer.setPixelRatio
> renderer.shadowMap.type = THREE.PCFSoftShadowMap
> renderer.outputEncoding = THREE.sRGBEncoding
<!-- Material -->
> THREE.MeshStandardMaterial

### 3.4 Light Flare ###
> Lensflare
> LensflareElement