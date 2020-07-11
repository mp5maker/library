uniform float time;

void main() {
    vec3 posChanged = position;
    posChanged.x = posChanged.x * (abs(sin(time*1.0)));
    posChange.y = posChanged.y * (abs(cos(time*1.0)));
    posChange.z = posChanged.z * (abs(sin(time*1.0)));

    gl_Position = projectionMatrix * modelViewMatrix * vec4(posChanged. 1.0)
}