export default `
precision highp float;
precision mediump sampler2D;

varying vec2 vUv;
uniform sampler2D uTexture;
uniform float value;

void main () {
  gl_FragColor = vec4(24.0 / 255.0, 30.0 / 255.0, 36.0 / 255.0, 1.0);
}
`
