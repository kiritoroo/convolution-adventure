import { useMemo, useRef, useEffect, useState } from "react"
import {  useFrame, useThree} from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three'

export const BoxInstance = () => {
  const tempObject = new THREE.Object3D()
  const tempColor = new THREE.Color()
  const colorArray = Float32Array.from(new Array(2000).fill(0.8))
  const meshRef = useRef<any>()

  const numInstances = 25;
  const initialSprings = Array.from({ length: numInstances }, () => ({
    scale: [1, 1, 1],
    config: { mass: 2, friction: 10 }
  }));
  const [springs, setSprings] = useState<any>(initialSprings);


  useEffect(() => {
    let i = 0
    for (let x = 0; x < 5; x++)
      for (let y = 0; y < 5; y++)
        for (let z = 0; z < 5; z++) {
          const id = i++
          tempObject.position.set(5 - x, 5 - y, 5 - z)
          tempObject.updateMatrix()
          meshRef.current.setMatrixAt(id, tempObject.matrix)
        }
    meshRef.current.instanceMatrix.needsUpdate = true
  }, [])

  useFrame((state) => {
    // const time = state.clock.getElapsedTime()
    // meshRef.current.rotation.x = Math.sin(time / 4)
    // meshRef.current.rotation.y = Math.sin(time / 2)
  })

  return (
    <>
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, 1000]}>
      <boxGeometry args={[0.1, 0.1, 0.1]}>
        <instancedBufferAttribute 
          attach="attributes-color" 
          args={[colorArray, 3]}
        />
      </boxGeometry>
      <meshBasicMaterial toneMapped={false} vertexColors />
    </instancedMesh>

    {springs.map((spring: any, index: number) => (
      <animated.mesh
        key={index}
        scale={spring.scale}
        position={spring.position}
      >
        <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
        <meshBasicMaterial color={'white'} />
      </animated.mesh>
    ))}
    </>
  )
}