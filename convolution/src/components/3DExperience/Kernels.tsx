import { KernelBlock } from "./KernelBlock";
import { Suspense, useContext, useEffect } from "react"
import { KernelContext } from "src/App"
import * as THREE from 'three'
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { Float } from '@react-three/drei'
import { Text } from './Text'

function getMax(matrix: number[][]): number {
  let max = -Infinity;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > max) {
        max = matrix[i][j];
      }
    }
  }
  return max;
}

export const Kernels = () => {
  const kernelContext = useContext(KernelContext)
  const kernelInfo = kernelContext?.kernelInfo

  const kernelsPos = new THREE.Vector3(-kernelInfo!.size/2,0.5,-kernelInfo!.size/2)
  const tempMatrix = new THREE.Matrix4()

  let valMax = getMax(kernelInfo?.matrix)

  const { camera } = useThree();

  const cameraDefaultPos = new THREE.Vector3(10, 5, 10)

  useEffect(() => {
    gsap.globalTimeline.clear()
    const timeline1 = gsap.timeline() 
    timeline1.to(camera.position, {
      duration: 1,
      x: cameraDefaultPos.x,
      y: 5+kernelInfo!.size*2,
      z: cameraDefaultPos.z,
      ease: 'power3'
    })

    const timeline2 = gsap.timeline() 
    timeline2.to(camera.position, {
      duration: 1.5,
      x: cameraDefaultPos.x+5+kernelInfo!.size*2,
      y: cameraDefaultPos.y+20+kernelInfo!.size*2,
      z: cameraDefaultPos.z+5+kernelInfo!.size*2,
      ease: 'circle',
      delay: 1.5
    })

    timeline1.call(() => {
      timeline2.play()
    })

    valMax = getMax(kernelInfo?.matrix)
  }, [kernelInfo])

  return (
    <group>
      <Float floatIntensity={3} rotationIntensity={0} speed={1}>
        <group castShadow>
          { kernelInfo?.matrix.map((row: number[], i: number) => (
            row.map((value: number, j: number) => (
              <KernelBlock
                key={`${i}-${j}-${value}-${kernelInfo.size}`}
                args={{ 
                  position: [kernelsPos.x+i, kernelsPos.y, kernelsPos.z+j],
                  rotation: [0,0,0]}}
                value={value}
                valMax={valMax}
                delay={kernelInfo.size*i+j}/>
            ))
          )) }
        </group>
      </Float>
      {/* <Text rotation={[-Math.PI / 2, 0,  Math.PI/2]} position={[-6, -0.5, 4]}>
        {kernelInfo?.name}
      </Text> */}
    </group>
    )
}