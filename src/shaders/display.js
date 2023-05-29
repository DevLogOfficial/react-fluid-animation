export default `
precision highp float;
precision mediump sampler2D;

varying vec2 vUv;
uniform sampler2D uTexture;

void main () {
  vec4 color = texture2D(uTexture, vUv);
  color.rgb = max(color.rgb, vec3(24.0/255.0, 30.0/255.0, 36.0/255.0));
  gl_FragColor = color;
}
`
