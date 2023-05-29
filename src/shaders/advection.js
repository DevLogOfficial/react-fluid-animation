export default `
precision highp float;
precision mediump sampler2D;

varying vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 texelSize;
uniform float dt;
uniform float dissipation;

void main () {
  vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
  vec4 color = dissipation * texture2D(uSource, coord);
  gl_FragColor = vec4(max(color.rgb, vec3(24.0/255.0, 30.0/255.0, 36.0/255.0)), 0.0);
  gl_FragColor.a = 1.0;
}
`
