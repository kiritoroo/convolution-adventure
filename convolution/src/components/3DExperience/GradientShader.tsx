import * as THREE from 'three';
import { extend } from "@react-three/fiber";
import { ShaderMaterial } from "three";

class GradientShaderMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      },
      vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
      `,      
      fragmentShader: `
      uniform float uTime;
      uniform vec2 uResolution;
      varying vec2 vUv;

      void main() {
        vec2 position = vUv - 0.5;
        position.x *= uResolution.x / uResolution.y;
        float distance = length(position);

        vec3 color = vec3(0.5);
        color += distance * 3.0;
        color.r += sin(uTime + position.x * 100.0) * 0.5;

        gl_FragColor = vec4(color, 1.0);
      }
      `,
    });
  }
}


extend({ GradientShaderMaterial });
export default GradientShaderMaterial;
