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
<!-- Geometry -->
> geometry.clone()

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
> colors.setRGB(r, g, b)
> colors.setHSV(h, s, v)
> colors.setStyle(style)
> colors.copy(color)
> colors.copyGammaToLinear(color)
> colors.copyLinearToGamma(color)
> colors.convertGammaToLinear()
> colors.convertLinearToGamma()
> colors.getHex()
> colors.getHexString()
> colors.getStyle()
> colors.getHSV()
> colors.add(color)
> colors.addColors(color1, color2)
> colors.addScalar(s)
> colors.multiply(color)
> colors.multiplyScalar(s)
> colors.lerp(color, alpha)
> colors.clone()
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

### 4.1 Simple Mesh Materials ###
<!-- Material -->
> MeshBasicMaterial
> MeshDepthMaterial
> MeshNormalMaterial
> MeshFaceMaterial
> MeshLambertMaterial
> MeshPhongMaterial
> ShaderMaterial
> LineBasicMaterial
> LineDashedMaterial
<!-- Basic Material Properties -->
> material.ID
> material.name
> material.opacity
> material.transparent
> material.overdraw
> material.visible
> material.side
> material.needsUpdate
<!-- Blending Material Properties -->
> material.blending
> material.blendsrc
> material.blenddst
> material.blendequation
<!-- Mesh Basic Material -->
> wireframeLinewidth  [will always be one due to limitations]
> wireframeLinejoin (for 2d)
> color
> wireframeLinecap
> shading
> vertexColors
> fog
> visible

### 4.2 Mesh Depth Material ###
<!-- Blending -->
> THREE.MultiplyBlending

### 4.3 Mesh Normal Material ###
<!-- Mesh Normal Material -->
> material.wireframe
> material.wirframeLineWidth
> material.shading
<!-- Shading -->
> THREE.FlatShading
> THREE.SmoothShading
<!-- Helper -->
> THREE.ArrowHelper
<!-- Geometry -->
> sphere.geometry.faces

### 4.4 Mesh Face Material ###
<!-- Material -->
>  THREE.MeshFaceMaterial

### 4.4 Mesh Advanced Material ###
<!-- Mesh Lambert Material -->
> material.ambient
> material.emissive
<!-- Mesh Standard Material -->
> material.metalness
> material.roughness
<!-- Mesh Phong Material -->
> material.emissive
> material.specular
> material.shininess
<!-- Shader Material -->
> material.wireframe
> material.wireframeLinewidth
> material.shading
> material.vertexColors
> material.fog
> material.fragmentShader
> material.vertexShader
> material.uniforms
> material.defines
> material.attributes
> material.lights
> {NEED TO LEARN MORE ABOUT VERTEX AND FRAGMENT SHADER}
<!-- Line Basic Material -->
> material.color
> material.linewidth
> material.vertexColors
> material.fog
<!-- Line Dashed Material -->
> material.scale
> material.dashSize
> material.gapSize
<!-- Utilities -->
> THREE.VertexColors
<!-- Line -->
> THREE.Line

### 4.5 Geometry ###
<!-- Plane Geometry -->
> geometry.width
> geometry.height
> geometry.widthSegements
> geometry.heightSegments
<!-- Circle Geometry -->
> geometry.radius
> geometry.segments
> geometry.thetaStart
> geometry.thetaLength
<!-- Shape Geometry -->
> THREE.Shape
> THREE.Path
> geometry.makeGeometry
> geometry.createPointsGeometry
> geometry.createSpacedPointsGeometry
<!-- Box Geometry -->
> geometry.width
> geometry.height
> geometry.depth
> geometry.widthSegments
> geometry.heightSegments
> geometry.depthSegments
<!-- Cylinder Geometry -->
> geometry.radiusTop
> geometry.radiusBottom
> geometry.height
> geometry.segmentX
> geometry.segmentY
> geometry.openEnded
<!-- Torus Geometry -->
> geometry.radius
> geometry.tube
> geometry.radialSegments
> geometry.tubularSegments
> geometry.arc
<!-- Torus Knot Geometry -->
> geometry.radius
> geometry.tube
> geometry.radialSegments
> geometry.tubularSegments
> geometry.p
> geometry.q
> geometry.heightScale
<!-- Icosahedron Geometry -->
> geometry.radius
> geometry.detail
<!-- Shape -->
> shape.moveTo()
> shape.lineTo(x, y)
> shape.quadraticCurveTo()
> shape.bezierCurveTo()
> shape.splineTo()
> arc()
> aStartAngle()
> aEndAngle()
> AClockwise()
> absArc()
> absArc()
> ellipse()
> absEllipse()
<!-- Geomtery -->
> THREE.WireframeGeometry
> THREE.PlaneGeometry
> THREE.CircleGeometry
> THREE.ShapeGeometry
<!--  Material -->
> THREE.LineBasicMaterial