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
<!-- Fog (used for Scene) -->
> THREE.Fog
> THREE.FogExp2
<!-- Scene -->
> scene.traverse(function)
> scene.add(object)
> scene.remove(object)
> scene.getObjectByName(string)
> scene.children
> scene.overrideMaterial
> scene.fog

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